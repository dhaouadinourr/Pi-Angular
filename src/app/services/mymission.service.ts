import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mymission } from '../Models/Mymission';

@Injectable({
  providedIn: 'root'
})
export class MymissionService {

  url = `${environment.apiBaseUrl}`

  constructor(
    private http:HttpClient
  ) {}

   getAllMissions() : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/Mymission/getAll` , {observe : 'response'})
   }

   getMissionById(id:any) : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/Mymission/getById/${id}` , {observe : 'response'})
   }

   addMission(mission : Mymission) : Observable<HttpResponse<any>>{
    return this.http.post(`${this.url}/Mymission/add` , mission , {observe : 'response'})
   } 

   updateMission(mission:Mymission) : Observable<HttpResponse<any>>{
    return this.http.put(`${this.url}/Mymission/update` , mission , {observe : 'response'})
   }

   deleteMission(id : any) : Observable<HttpResponse<any>>{
    return this.http.delete(`${this.url}/Mymission/delete/${id}` , {observe : 'response'})
   }

   participateToMission(id:any , name:any) : Observable<HttpResponse<any>>{
    return this.http.put(`${this.url}/Mymission/addWtUser/${id}` , name ,{observe : 'response'});
   }

   affectCompToMiss(idM:any , idComp:any[] ) : Observable<HttpResponse<any>>{
    return this.http.put(`${this.url}/Mymission/addWC/${idM}`, idComp,{observe : 'response'})
   }

   getNbPlaces(idM : any) : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/Mymission/nbPlaces/${idM}`,{observe : 'response'})
   } 

   getCompetenceForMission(idM:any) : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/Mymission/getCompForMiss/${idM}`,{observe : 'response'})
   }

}
