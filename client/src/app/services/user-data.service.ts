import { Injectable } from '@angular/core';
import { User } from '../schemas/types/user.type';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor() {}

  getUsers(): Observable<User[]> {
    const result: User[] = [];

    for (let i = 0; i < 10; i++) {
      result.push({
        id: `${i}`,
        username: `user-${i}`,
        email: `user-${i}@example.com`,
      });
    }

    return of(result);
  }
}
