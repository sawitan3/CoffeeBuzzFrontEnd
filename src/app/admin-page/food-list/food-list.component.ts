import {Component, Input, OnInit} from '@angular/core';
import {Food} from '../../models/food';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddNewFoodComponent} from '../add-new-food/add-new-food.component';
import {FoodsService} from '../../foods.service';
import {EditFoodComponent} from '../edit-food/edit-food.component';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  @Input()
  foods: Food[];

  constructor(private modalService: NgbModal,
              private foodService: FoodsService) { }

  ngOnInit() {
  }

  public newFood() {
    this.modalService.open(AddNewFoodComponent);
  }

  public deleteFood(id: number) {
    this.foodService.delete(id).subscribe((res) => {
      window.location.reload();
    });
  }

  public editFood(id: number) {
    const food: Food = this.foods.find(item => item.id === id);
    const modalRef = this.modalService.open(EditFoodComponent);
    modalRef.componentInstance.food = food;
  }

}
