import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewChecked, AfterViewInit} from '@angular/core';
import { ApiServiceService } from '../api-service.service';

import { } from '@types/googlemaps';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  map: google.maps.Map;
  locationData = [];
  data: any;
  nav = [];
  marker: any;
  maindata: any;
  address: any;
  timestamp: any;
  constructor(private apiCommunity: ApiServiceService) {}

  ngOnInit() {
    this.location();
  }

  ngAfterViewInit() {
    const longitudeLatitude = { lat: 28.5966366, lng: 77.32841169999999 };
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: longitudeLatitude
    });
    this.marker = new google.maps.Marker({
      position: longitudeLatitude,
      map: this.map
    });
  }

  locateMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.showPosition(position);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
  getAddress(location) {
    return new Promise((resolve, reject) => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ location: location }, function(results, status) {
        if (results) {
          resolve(results[0].formatted_address);
        }
      });
    });
  }
  showPosition(position) {
    const location = new google.maps.LatLng(
      position.coords.latitude,
      position.coords.longitude
    );
    this.getAddress(location).then(result => {
      this.address = result;
    });
    this.map.panTo(location);

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: 'Got you!'
      });
    } else {
      this.marker.setPosition(location);
    }
  }

  location() {
    this.apiCommunity.location().subscribe(
      response => {
        this.locationData = response.data.locations;
      },
      error => {
        console.log(error);
      }
    );
  }

  selectLocation(location) {
    this.data = location.branches;
  }
  selectBranch(branch) {
    this.maindata = branch;
    this.nav = [branch];
    this.data = branch.categories;
  }
  subcategory(data) {
    if (data.subcategories) {
      this.nav.push(data);
      this.data = data.subcategories;
    }
  }
}
