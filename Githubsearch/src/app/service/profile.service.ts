import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


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
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
    //  .pipe(map(res => res.json()));
  }

  getProfileRepos() {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
      // .pipe(map(res => res.json()));
  }

  updateProfile(username: string) {
    this.username = username;
  }
}
