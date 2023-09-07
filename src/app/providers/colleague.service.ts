import { Injectable } from '@angular/core';
import { Colleague } from '../models/colleague';
import axios from 'axios';
import Axios from 'axios-observable'


@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  baseRoute = "https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2"
  data = undefined

  constructor() { }

  async getColleagueList(): Promise<Colleague[] | undefined> {
    const endpoint = this.baseRoute + "/colleagues"

    try {
      const response = await axios.get(endpoint);
      return response.data;
    } catch (error) {

      return undefined;

    }
  }

  async getVotes() {
    const endpoint = this.baseRoute + "/votes"

    try {
      const response = await axios.get(endpoint);
      return response.data;
    } catch (error) {
      return undefined;
    }
  }

  handleErrorPostVote(error: any) {
    console.error('CECI EST MON ERREUR', error.message);
  }
  handlePostVote(data: any) {
    this.data = data
    console.log(data)
  }

  public async voteForCollegue(pseudo: string, like_hate: string) {
    try {
      let colleagueVote = await this.getUserByPseudo(pseudo);
      if (colleagueVote != null) {
        await axios.post("https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/votes", {
          pseudo: colleagueVote,
          like_hate: like_hate
        });
      }
    } catch (error) {
      console.error("Erreur connexion API voteForCollegue : " + error);
    }
  }

  async getUserByPseudo(pseudo: string) {
    const endpoint = this.baseRoute + "/colleagues/" + pseudo
    console.log('chqsodf')
    try {
      const response = await axios.get(endpoint);
      return response.data.pseudo;
    } catch (error) {
      return undefined;
    }

  }

}
