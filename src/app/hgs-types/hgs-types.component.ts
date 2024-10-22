import { Component } from '@angular/core';
import { TypesService } from '../hgsTypeServices/types.service';
import { NgForm } from '@angular/forms';
import { hgsTypes } from '../shared/models';

@Component({
  selector: 'app-hgs-types',
  templateUrl: './hgs-types.component.html',
  styleUrls: ['./hgs-types.component.scss']
})
export class HgsTypesComponent {
  addGrievanceMessage: string | undefined;

  constructor(private hgsTypes: TypesService) {}

  ngOnInit(): void {}

  submit(data: hgsTypes, form: NgForm) {
    // Check if the form is valid
    if (form.invalid) {
      this.addGrievanceMessage = 'Please fill all the required details!';
      setTimeout(() => {
        this.addGrievanceMessage = undefined;
      }, 2000);
      return;  // Stop further execution if the form is invalid
    }

    // If the form is valid, submit the data
    this.hgsTypes.addGrievance(data).subscribe((result) => {
      if (result) {
        this.addGrievanceMessage = 'Grievance is Submitted successfully';
        form.reset();  // Reset the form on successful submission
      }
    });

    // Reset the success message after 2 seconds
    setTimeout(() => {
      this.addGrievanceMessage = undefined;
    }, 2000);
  }
}
