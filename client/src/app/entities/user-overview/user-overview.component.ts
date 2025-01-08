import { Component, inject, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { User } from '../../schemas/types/user.type';
import { Observable, of } from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-user-overview',
  imports: [NgFor, AsyncPipe],
  templateUrl: './user-overview.component.html',
  styleUrl: './user-overview.component.css',
})
export class UserOverviewComponent implements OnInit {
  private userDataService = inject(UserDataService);

  public data$: Observable<User[]> = of([]);

  ngOnInit(): void {
    this.data$ = this.userDataService.getUsers();
  }
}
