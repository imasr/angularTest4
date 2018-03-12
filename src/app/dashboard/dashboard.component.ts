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
  constructor(private apiCommunity: ApiServiceService) { }

  ngOnInit() {
    this.location();    
  }
  location () {
    this.apiCommunity.location().subscribe(response => {
      console.log(response)
        this.locationData = response.data.locations;
      },
      error => {
        console.log(error);
      }
    );
  };

    selectLocation(location) {
      this.data = { 'data': location };
      // $rootScope.$broadcast("categoryData", data);
    };
    selectBranch(location, branch){
      this.data = { 'data': location, 'branch': branch };
      // $rootScope.$broadcast("categoryData", data);
    };
}
