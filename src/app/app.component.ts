import { Component } from '@angular/core';

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top_colleagues';
  colleagueList = [
    {
      pseudo: 'azer',
      score: 100,
      photo: "https://picsum.photos/200"
    },
    {
      pseudo: 'qsdf',
      score: 300,
      photo: "https://picsum.photos/200"
    },
    {
      pseudo: 'wcxv',
      score: 400,
      photo: "https://picsum.photos/200"
    },
    {
      pseudo: 'yuio',
      score: 125,
      photo: "https://picsum.photos/200"
    },
    {
      pseudo: 'hjkl',
      score: 1000,
      photo: "https://picsum.photos/200"
    },
  
  ]
}
