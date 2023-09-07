import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Vote } from '../models/vote';
import { ColleagueService } from './colleague.service';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private votes = new Subject<Vote>();

  get votesObs(){
    return this.votes.asObservable();
  }

  vote(data: Vote){
    console.log('data emitted:', data)
    this.votes.next(data);
  }
  
}
