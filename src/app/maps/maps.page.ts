import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  constructor(private router: Router, private activated: ActivatedRoute) {
    this.activated.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        alert(this.router.getCurrentNavigation().extras.state)
      }
    })
  }

  ngOnInit() {
  }

}
