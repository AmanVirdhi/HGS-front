import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypesService } from '../hgsTypeServices/types.service';
import { hgsTypes } from '../shared/models';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  userData: undefined | hgsTypes;
  GrievanceMessage: undefined | string;

  constructor(private route: ActivatedRoute, private updateService:TypesService, private router: Router  ) {}

  ngOnInit(): void {
    let userId = this.route.snapshot.paramMap.get('id');
    userId &&
      this.updateService.getUser(userId).subscribe((data) => {
        this.userData = data;
      });
  }

  submit(data:any){
    if (this.userData) {
      data.id = this.userData.id;
    }
    this.updateService.updateGrievance(data).subscribe((result) => {
      if (result) {
        this.GrievanceMessage = 'Grievance has updated';
      }
    });
    setTimeout(() => {
      this.GrievanceMessage = undefined;
      this.router.navigate(['/grievanceList']);
    }, 1000);
    console.warn(data);
  }

}
