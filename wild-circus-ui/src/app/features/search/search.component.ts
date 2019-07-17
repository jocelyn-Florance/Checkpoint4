import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Game} from '../../shared/models/game';
import {GameService} from '../../core/http/game.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public game: Game;
  public params: string;

  constructor(private route: ActivatedRoute,
              private gameService: GameService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => this.params = params.name);
    this.gameService.getSearch(this.params).subscribe(
      (games: Game) => {
        this.game = games;
      }
    );
  }

}
