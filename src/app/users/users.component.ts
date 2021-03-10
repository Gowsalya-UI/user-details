import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList:any;
  toggle = true;
  constructor() {
  }

  ngOnInit(): void {
    this.userList = {"users":[
      {
        "Name":"Joe",
        "Age":12
      },
      {
        "Name":"Biden",
        "Age":30
      },
      {
        "Name":"John",
        "Age":67
      },
      {
        "Name":"Kumar",
        "Age":45
      },
      {
        "Name":"Arhav",
        "Age":10
      }
      ]
      };
   
  }

}
