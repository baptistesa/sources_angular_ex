import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  test = "value"

  teest : String = "";

  private tableau_cartes = [
    {
    titre: "titre 1",
    contenu : "Je suis le contenu 1"
  },{
    titre: "titre 2",
    contenu : "Je suis le contenu 2"
  },{
    titre: "titre 3",
    contenu : "Je suis le contenu 3"
  },{
    titre: "titre 4",
    contenu : "Je suis le contenu 4"
  }]

  constructor(private router : Router) {}

  // Display an alert
  displayAlert() {
    alert("Hello je suis cliqué !");
  }

  // Aller à la tab 3
  goToTabs3(carte) {
    let params : NavigationExtras = {
      state : {
        titre : carte.title,
        contenu : carte.contenu,
        parution : "2019-03-03",
        auteur : "monsieur test"
      }
    }
    this.router.navigate(["/tabs3"], params);
  }

}
