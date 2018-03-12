import { Component, OnInit, Input } from '@angular/core';
import { ApiServiceService } from '../api-service.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories=[];
  locationData: any;
  @Input() data:any;
  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    // this.location();
    // if (this.data.branch.categories) {
    //   this.categories = this.data.branch.categories;
    // }
    console.log(this.data)
  }

  location() {
    this.apiService.location().subscribe(response => {
        console.log(response)
        // this.locationData = response.data.data.locations;
      }, error => {
        console.log(error);
      });
  };

  subcategory(data){
    if (data.subcategories){
      this.categories = data.subcategories;
    }
  }

}
