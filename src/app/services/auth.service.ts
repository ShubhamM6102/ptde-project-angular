import { Injectable } from '@angular/core';
import { users } from 'src/app/models/users'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user?: { email: string; password: string; username: string; };

  constructor() { }

  authenticate(email?: string, password?: string) {
    this.user = users.find(user => user.email === email && user.password === password);
    return this.user !== undefined;
  }

  
}


// authenticate(email: string, password: string) {
//   const user = users.find(
//     (user) => user.email === email && user.password === password
//   );
//   return !!user;
// }

// getUsername(email: string) {
//   const user = users.find((user) => user.email === email);
//   return user ? user.username : '';
// }

// }