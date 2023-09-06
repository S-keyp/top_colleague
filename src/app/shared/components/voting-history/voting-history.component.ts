import { Component } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';


@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {
  votes: Vote[] =[
    {
      colleague : {
        pseudo: 'azer',
        score: 100,
        photo: "https://picsum.photos/200",
      },
      vote : LikeHate.HATE,
    },
    {
      colleague : {
        pseudo: 'qsdf',
        score: 300,
        photo: "https://picsum.photos/200"
      },
      vote : LikeHate.HATE,
    },
    {
      colleague : {
        pseudo: 'wcxv',
        score: 400,
        photo: "https://picsum.photos/200"
      },
      vote : LikeHate.HATE,
    },
    {
      colleague : {
        pseudo: 'yuio',
        score: 125,
        photo: "https://picsum.photos/200"
      },
      vote : LikeHate.HATE,
    },
  ]

  removeVote(vote:Vote){
    this.votes = this.votes.filter(v => v !== vote)
  }
}

