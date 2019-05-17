import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/common';
import {Router} from '@angular/router';
import {UsersService} from '../../users.service';
import {CreateNewBaristaComponent} from '../create-new-barista/create-new-barista.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EditBaristaComponent} from '../edit-barista/edit-barista.component';

@Component({
  selector: 'app-barista-table',
  templateUrl: './barista-table.component.html',
  styleUrls: ['./barista-table.component.css']
})
export class BaristaTableComponent implements OnInit {

  @Input()
  baristas: User[];

  constructor(private router: Router,
              private usersService: UsersService,
              private modalService: NgbModal) { }

  ngOnInit() {
  }

  deleteBarista(id: number) {
    this.usersService.delete(id).subscribe((res) => {
      window.location.reload();
    });
  }

  editBarista(id: number) {
    const user: User = this.baristas.find(item => item.id === id);
    const modalRef = this.modalService.open(EditBaristaComponent);
    modalRef.componentInstance.user = user;
  }
}
