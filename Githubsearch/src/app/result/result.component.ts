import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User } from '../user';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  profile: any;
  repos: any;
  username!: string;
  user!: User;
  


  constructor(private service: ProfileService) {
    this.service.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
    this.service.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });


  }

  findProfile() {
    this.service.updateProfile(this.username);
    this.service.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
    this.service.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }

  ngOnInit() {

  }

}

