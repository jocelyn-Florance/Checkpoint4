import { Component, OnInit } from '@angular/core';
import {Game} from '../../../shared/models/game';
import {GameService} from '../../../core/http/game.service';

@Component({
  selector: 'app-list-game',
  templateUrl: './list-game.component.html',
  styleUrls: ['./list-game.component.scss']
})
export class ListGameComponent implements OnInit {
  public game: Game[];
  public filterName: string;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getListGame();
  }

  getListGame() {
    this.gameService.getListGame().subscribe(
      (games: Game[]) => {
        this.game = games;
      }
    );
  }

}
