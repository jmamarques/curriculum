import {Component, OnInit, OnDestroy} from '@angular/core';
import {User} from '../interfaces/user';
import {UserService} from '../services/user.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'cod-homepage',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.scss']
})
export class PortofolioComponent implements OnInit,OnDestroy {
  users: User [];
  responsiveOptions: any;
  constructor(private serviceUsers: UserService,
              private headerService: HeaderService) {
                this.headerService.setColor("#efefef");
                this.responsiveOptions = [
                  {
                      breakpoint: '1024px',
                      numVisible: 3,
                      numScroll: 3
                  },
                  {
                      breakpoint: '768px',
                      numVisible: 2,
                      numScroll: 2
                  },
                  {
                      breakpoint: '560px',
                      numVisible: 1,
                      numScroll: 1
                  }
              ];
  }
  ngOnDestroy(): void {
    this.headerService.setDefaultColor();
  }

  ngOnInit(): void {
    this.users = this.serviceUsers.getUsers();
  }

}
