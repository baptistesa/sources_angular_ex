import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from '../service/placeholder.service';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.page.html',
  styleUrls: ['./calls.page.scss'],
})
export class CallsPage implements OnInit {

  constructor(private service : PlaceholderService) { }

  ngOnInit() {
    this.service.getArticle()
      .subscribe(data => {
        alert(JSON.stringify(data))
      })
  }

}
