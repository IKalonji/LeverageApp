import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class DataService{
    constructor(private http:HttpClient){
    }

    camp(){
        return this.http.get("https://leverage-api-mtn.herokuapp.com/api/campaigns/")
    }
}