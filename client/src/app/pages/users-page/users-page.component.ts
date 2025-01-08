import { Component } from '@angular/core';
import { UserEditFormComponent } from '../../entities/user-edit-form/user-edit-form.component';
import { UserOverviewComponent } from '../../entities/user-overview/user-overview.component';

@Component({
  selector: 'app-users-page',
  imports: [UserEditFormComponent, UserOverviewComponent],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css',
})
export class UsersPageComponent {}
