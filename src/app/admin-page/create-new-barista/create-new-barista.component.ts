import { Component, OnInit } from '@angular/core';
import {RegisterData, RegisterService} from '../../register.service';
import {Router} from '@angular/router';
import {NgbActiveModal, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-new-barista',
  templateUrl: './create-new-barista.component.html',
  styleUrls: ['./create-new-barista.component.css']
})
export class CreateNewBaristaComponent implements OnInit {

  user: RegisterData = { username: '', email: '', role: '2', password: ''};

  constructor(
      private registerService: RegisterService,
      private router: Router,
      public modal: NgbActiveModal) { }

  ngOnInit() {
  }

  onSubmit() {
    this.registerService.addUser(this.user).subscribe(
        () => {this.modal.close(); window.location.reload(); }
    );
  }
}
