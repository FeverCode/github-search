import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from './repo';



@Injectable()
export class ProfileService {
  repos!: Repo;
  username!: string;
  clientid!: string;
  clientsecret!: string;



  constructor(private http:  HttpClient) {
    console.log('service is now ready');
    this.username = 'FeverCode';
  }

  getProfileInfo() {
    interface ApiResponse {
      login: string;
    }
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
     
  }

  getProfileRepos() {
  
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
      
  }

  updateProfile(username: string) {
    this.username = username;
  }
}
