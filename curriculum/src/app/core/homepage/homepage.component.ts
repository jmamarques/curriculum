import {Component, OnInit} from '@angular/core';
import {User} from '../../user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'cod-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  users: User [];

  constructor(private serviceUsers: UserService) {
  }

  ngOnInit(): void {
    this.users = this.serviceUsers.getUsers();
  }

}
