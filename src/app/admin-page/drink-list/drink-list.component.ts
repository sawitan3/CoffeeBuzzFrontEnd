import {Component, Input, OnInit} from '@angular/core';
import {Drink} from '../../models/drink';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddNewDrinkComponent} from '../add-new-drink/add-new-drink.component';
import {DrinksService} from '../../drinks.service';
import {EditDrinkComponent} from '../edit-drink/edit-drink.component';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.css']
})
export class DrinkListComponent implements OnInit {

  @Input()
  drinks: Drink[];

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  editDrink(id: number) {
    const drink: Drink = this.drinks.find(item => item.id === id);
    const modalRef = this.modalService.open(EditDrinkComponent);
    modalRef.componentInstance.drink = drink;
  }
}
