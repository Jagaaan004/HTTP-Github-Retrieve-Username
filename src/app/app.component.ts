import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { userNameSearch } from 'Shared/userNameSearch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = "";
  userData = "";

  constructor(private userSearch: userNameSearch) {}

  eventClick() {
    this.returnUsers();
  }

  returnUsers() {
  this.userSearch.gitHub(this.userName).subscribe(value => this.userData = JSON.stringify(value));
  }
  }




