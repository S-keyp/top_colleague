import { Component, Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription, interval } from 'rxjs';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
@Injectable()
export class CounterComponent implements OnDestroy {
 
  voteSub: Subscription
  voteData: Vote | undefined 
  obs1 = interval(400)
  
  constructor(private voteService: VoteService){
    // this.voteSub = this.obs1.subscribe({
    //   next: this.handleUpdateResponse.bind(this),
    //   error: this.handleError.bind(this)
    // })
    this.voteSub = this.voteService.votesObs.subscribe({
      next: this.handleUpdateResponse.bind(this),
      error: this.handleError.bind(this)
    })

  }

  handleError(err: any){
    console.error(err);
    
  }
  handleUpdateResponse(data:any){
    console.log(data)
    this.voteData = data
  }

  ngOnDestroy(): void {
    this.voteSub.unsubscribe()
  }


}
