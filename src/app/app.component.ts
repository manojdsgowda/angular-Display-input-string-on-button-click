import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  text: string;
  clickMessage = '';

    onClickMe() {
    this.clickMessage = this.text;
  }
}
