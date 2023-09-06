import { Component } from '@angular/core';

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top_colleagues';
  colleague= {
    pseudo: 'tchoin',
    score: 1000,
    photo: "https://picsum.photos/200"
  }
}
