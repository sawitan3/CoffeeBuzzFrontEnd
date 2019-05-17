import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/common';
import {Router} from '@angular/router';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {UsersService} from '../../users.service';

@Component({
  selector: 'app-edit-barista',
  templateUrl: './edit-barista.component.html',
  styleUrls: ['./edit-barista.component.css']
})
export class EditBaristaComponent implements OnInit {

  @Input()
  public user: User;

  constructor(
      private usersService: UsersService,
      private router: Router,
      public modal: NgbActiveModal) { }

  ngOnInit() {
  }

  onSubmit() {
    this.usersService.update(this.user).subscribe(
        () => {this.modal.close(); window.location.reload(); }
    );
  }

}
