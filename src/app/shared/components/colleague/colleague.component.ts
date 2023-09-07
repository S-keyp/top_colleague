import { Component, Input } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { LikeHate } from 'src/app/models/like-hate';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
	selector: 'tc-colleague',
	templateUrl: './colleague.component.html',
	styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
	@Input() colleague!: Colleague

	constructor(private voteService: VoteService){ }

	handleVote(b: number) {
		this.voteService.voteForCollegue(this.colleague.pseudo,LikeHate[b].toString())
	}
}
