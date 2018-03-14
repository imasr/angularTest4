import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  locationData = [];
  data: any;
  nav= [];
  maindata: any;
  constructor(private apiCommunity: ApiServiceService) { }

  ngOnInit() {
    this.location();
  }
  location () {
    this.apiCommunity.location().subscribe(response => {
        this.locationData = response.data.locations;
      },
      error => {
        console.log(error);
      }
    );
  };

    selectLocation(location) {
      this.data = location.branches;
    };
    selectBranch(branch){
      this.maindata=branch
      this.nav=[branch];
      this.data =branch.categories;
    };
    subcategory(data){
      if (data.subcategories){
        this.nav.push(data)
        this.data = data.subcategories;
      }
    }
}
