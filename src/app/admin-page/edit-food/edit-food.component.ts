import {Component, Input, OnInit} from '@angular/core';
import {Food} from '../../models/food';
import {FoodsService} from '../../foods.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent implements OnInit {

  @Input()
  public food: Food;

  constructor(private foodService: FoodsService,
              public  modal: NgbActiveModal) { }

  ngOnInit() {
  }

  onSubmit() {
    this.foodService.update(this.food).subscribe(
      () => {this.modal.close(); window.location.reload(); }
    );
  }

}
