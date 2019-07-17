import { Component, OnInit } from '@angular/core';
import {GameService} from '../../core/http/game.service';
import {Game} from '../../shared/models/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public game: Game[];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGame()
  }

  getGame() {
    this.gameService.getListGame().subscribe(
      (game: Game[]) => {
        this.game = game;
      },
    );
  }

}
