import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hgsTypes } from '../shared/models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  constructor(private http:HttpClient) { }

  addGrievance(data:hgsTypes){
    return this.http.post('https://hgs-api.onrender.com/hgsapp/grievances/create/', data);
  }
  
  GrievanceList(): Observable<hgsTypes[]> {
    return this.http.get<hgsTypes[]>('https://hgs-api.onrender.com/hgsapp/grievances/');
  }

  deleteUser(id: string | number){
    return this.http.delete(`https://hgs-api.onrender.com/hgsapp/grievances/${id}/`);
  }

  getUser(id: string | number) {
    return this.http.get<hgsTypes>(`https://hgs-api.onrender.com/hgsapp/grievances/${id}/`);
  }

  updateGrievance(product: hgsTypes) {
    return this.http.put<hgsTypes>(`https://hgs-api.onrender.com/hgsapp/grievances/${product.id}/`,product);
  }

}
