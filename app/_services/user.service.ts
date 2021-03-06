﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '../app.config';
import { Admin } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Admin[]>(appConfig.apiUrl + '/users');
    }

    getById(_id: string) {
        return this.http.get(appConfig.apiUrl + '/users/' + _id);
    }

    create(admin: Admin) {
        return this.http.post(appConfig.apiUrl + '/users/register', admin);
    }

    update(admin: Admin) {
        return this.http.put(appConfig.apiUrl + '/users/' + admin._id, admin);
    }

    delete(_id: string) {
        return this.http.delete(appConfig.apiUrl + '/users/' + _id);
    }
}