import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Admin } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
})

export class HomeComponent implements OnInit {
    @ViewChild("LinkRegAdmin") Boton: ElementRef;
    @ViewChild("gestionarAdmins") Div: ElementRef;
    currentUser: Admin;
    admins: Admin[] = [];

    constructor(private userService: UserService, private renderer: Renderer2) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(_id: string) {
        this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        if (this.currentUser.nombres == "root" && this.currentUser.apellidos == "root"){
            this.userService.getAll().subscribe(admins => { this.admins = admins; });
            this.renderer.setAttribute(this.Boton.nativeElement, "style", "display:compact");
            this.renderer.setAttribute(this.Div.nativeElement, "style", "display:compact");
        }else{

        }
    }
}