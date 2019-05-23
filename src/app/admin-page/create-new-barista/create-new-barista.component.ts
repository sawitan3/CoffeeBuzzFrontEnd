import { Component, OnInit } from '@angular/core';
import {RegisterData, RegisterService} from '../../register.service';
import {Router} from '@angular/router';
import {NgbActiveModal, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-create-new-barista',
  templateUrl: './create-new-barista.component.html',
  styleUrls: ['./create-new-barista.component.css']
})
export class CreateNewBaristaComponent implements OnInit {

  user: RegisterData = { username: '', email: '', role: '2', password: ''};

  confirm = '';

  error;

  constructor(
      private registerService: RegisterService,
      private router: Router,
      public modal: NgbActiveModal) { }

  ngOnInit() {
  }

  onSubmit() {
    this.registerService.addUser(this.user).subscribe(
        () => {this.modal.close(); window.location.reload(); },
        (err) => {this.onError(err); }
    );
  }

  onError(error: HttpErrorResponse) {
    console.log(error);
    this.error = {type: '', message: ''};
    if (error.status === 422) {
      this.error.message = 'Username is already used.';
      this.error.type = 'info';
    } else if (error.status === 0 || error.status === 500 || error.status === 404) {
      this.error.message = 'Our server encountered a problem. Please try again.';
      this.error.type = 'info';
    }
  }
}
