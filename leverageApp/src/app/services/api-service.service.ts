import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  api_link: string = "http://localhost:8000/";

  constructor(private http: HttpClient) { }

  getAllCampaigns() {
    return this.http.get(this.api_link + `api/campaigns/`);
  }
}
