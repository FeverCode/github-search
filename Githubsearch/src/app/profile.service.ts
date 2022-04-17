import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class ProfileService {

  private username: string;
  private clientid = '7d6ef4cb6effb6013d6f';
  private clientsecret = '2f4cbc12215530d96bdd0bd20fbffdead67d46fa';


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
