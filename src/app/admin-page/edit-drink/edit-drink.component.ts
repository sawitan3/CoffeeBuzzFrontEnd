import {Component, Input, OnInit} from '@angular/core';
import {Drink} from '../../models/drink';
import {DrinksService} from '../../drinks.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-drink',
  templateUrl: './edit-drink.component.html',
  styleUrls: ['./edit-drink.component.css']
})
export class EditDrinkComponent implements OnInit {

  @Input()
  public drink: Drink;

  constructor(private drinkService: DrinksService,
              public modal: NgbActiveModal) { }

  ngOnInit() {
  }

  onSubmit() {
    this.drinkService.update(this.drink).subscribe(
      () => {this.modal.close(); window.location.reload(); }
    );
  }

}
