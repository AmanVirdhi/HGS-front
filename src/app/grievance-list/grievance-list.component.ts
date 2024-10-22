import { Component, ViewChild } from '@angular/core';
import { TypesService } from '../hgsTypeServices/types.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource} from '@angular/material/table';
import { hgsTypes } from '../shared/models';


@Component({
  selector: 'app-grievance-list',
  templateUrl: './grievance-list.component.html',
  styleUrls: ['./grievance-list.component.scss']
})
export class GrievanceListComponent {
  GrievanceMessage: undefined | string;
  grievanceList = new MatTableDataSource<hgsTypes>;
  selection = new SelectionModel<hgsTypes>(true, []);

  constructor(private typesServices: TypesService) {}
 
  displayedColumns: string[] = ['id','name', 'hgstypes', 'room','course','mobile','description','actions'];

  ngOnInit(): void {
    this.Userlist();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.grievanceList.filter = filterValue.trim().toLowerCase();

    if (this.grievanceList.paginator) {
      this.grievanceList.paginator.firstPage();
    }
  }

  deleteUser(id: string) {
    this.typesServices.deleteUser(id).subscribe((result) => {
      if (result) {
        this.GrievanceMessage = 'Resident is deleted';

        this.Userlist();
      }
    });
    setTimeout(() => {
      this.GrievanceMessage = undefined;
    }, 3000);
  }

  Userlist() {
    this.typesServices.GrievanceList().subscribe((result: hgsTypes[]) => {
      this.grievanceList.data = result;
      
    this.grievanceList.paginator = this.paginator;
    this.grievanceList.sort = this.sort;
    });
  }
}
