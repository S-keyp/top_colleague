import { Component, Input } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
 @Input() colleague! : Colleague


 handleVote(b: number){
  if(b == 1) this.colleague.score--
  else this.colleague.score++
 }
}
