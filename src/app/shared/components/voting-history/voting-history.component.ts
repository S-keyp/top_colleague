import { Component, OnInit } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';
import { ColleagueService } from 'src/app/providers/colleague.service';
import { VoteService } from 'src/app/providers/vote.service';


@Component({
	selector: 'tc-voting-history',
	templateUrl: './voting-history.component.html',
	styleUrls: ['./voting-history.component.scss'],
	providers: [ColleagueService]
})
export class VotingHistoryComponent implements OnInit {
	votes: Vote[] = [];

	constructor(private voteService: VoteService) {

	}


	ngOnInit(): void {
		this.voteService.getVotes().then((data) => {
			this.votes = data
		})
	}


	removeVote(vote: any) {
		this.votes = this.votes.filter(v => v !== vote)
	}
}

