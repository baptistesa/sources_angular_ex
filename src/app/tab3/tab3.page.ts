import { Component } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  private value = "";

  private received_object : any;

  constructor(private router: Router, private activated_route : ActivatedRoute) {
    this.activated_route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.received_object = this.router.getCurrentNavigation().extras.state
        alert(this.received_object);
      }
    })
  }


  // Display an alert with the current value
  alertValue() {
    alert(this.value);
  }

  // Go to google maps
  goToMaps() {
    let navigationExtras: NavigationExtras = {
      state: {
        user: "this.user"
      }
    };
    this.router.navigate(["/maps"], navigationExtras);
  }

  // Go to api
  goToAPI() {
    this.router.navigate(['/calls'])
  }
}
