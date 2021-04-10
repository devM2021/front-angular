import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  private roles: Array<string> = [];
  constructor() {}

  signOut = () => {
    localStorage.clear();
  };

  saveToken = (token: string) => {
    localStorage.setItem('token', token);
  };

  getToken = (): string | null => {
    return localStorage.getItem('token');
  };

  saveUsername = (username: string) => {
    window.localStorage.setItem('username', username);
  };

  getUsername = (): string | null => {
    return localStorage.getItem('username');
  };

  saveRoles = (roles: string[]) => {
    window.localStorage.setItem('roles', JSON.stringify(roles));
  };

  getRoles = (): string[] => {
    this.roles = ['USER']; //Fake user role
    return this.roles;
  };
}
