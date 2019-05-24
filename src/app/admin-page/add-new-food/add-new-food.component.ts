import { Component, OnInit } from '@angular/core';
import {FoodsService, NewFoodData} from '../../foods.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-new-food',
  templateUrl: './add-new-food.component.html',
  styleUrls: ['./add-new-food.component.css']
})
export class AddNewFoodComponent implements OnInit {

  food : NewFoodData = { name: '', qty: 0, price: 0};

  constructor(private foodService: FoodsService,
              public modal: NgbActiveModal) { }

  ngOnInit() {
  }

  onSubmit() {
    this.foodService.add(this.food).subscribe(
      () => {this.modal.close(); window.location.reload(); }
    );
  }
}
