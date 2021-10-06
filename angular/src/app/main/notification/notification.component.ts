import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/common-services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(private vm: NotificationService) { }

  ngOnInit(): void {
  }
  public get VM() { return this.vm; }
}
