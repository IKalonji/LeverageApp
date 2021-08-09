import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class DataService{

    loggedIn = false;
    user = {
        username: "demo",
        name: "demo",
        surname: "demo",
        email: "demo@demo.com",
        contact: "0000000000",
        password: "password"

    };

    constructor(private http:HttpClient){
    }

    camp(){
        return this.http.get("https://leverage-api-mtn.herokuapp.com/api/campaigns/")
    }

    createUser(uname, name, surname, email, contact, password){
        this.user.name = name;
        this.user.username = uname;
        this.user.contact = contact;
        this.user.password = password;
        this.user.surname = surname;
        this.user.email = email;
    }

    getUser(){return this.user}

    setLoggedIn(event: boolean){this.loggedIn=event;}
}