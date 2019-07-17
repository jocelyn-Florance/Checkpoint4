import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Game} from '../../../shared/models/game';
import {GameService} from '../../../core/http/game.service';
import {ToastrService} from 'ngx-toastr';

@Component({
             selector: 'app-detail-game',
             templateUrl: './detail-game.component.html',
             styleUrls: ['./detail-game.component.scss']
           })
export class DetailGameComponent implements OnInit {
  public id: string;
  public game: Game;
  public randomGame: Game;
  public gameAlternative: Game[];

  constructor(private route: ActivatedRoute,
              private gameService: GameService,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.getGame();
      this.getRandomGame();
      this.getAlternative();
    });
  }

  getGame() {
    this.gameService.getGameById(this.id).subscribe(
      (game: Game) => {
        this.game = game;
      },
    );
  }

  getAlternative() {
    this.gameService.getAlternativeById(this.id).subscribe(
      (game: Game[]) => {
        this.gameAlternative = game;
      },
    );
  }

  getRandomGame() {
    this.gameService.getRandomGame().subscribe(
      (game: Game) => {
        this.randomGame = game;
      },
    );
  }

  click(idGame) {

    if (idGame) {
      this.gameService.postAlternative(this.id, idGame).subscribe(
        () => {
          this.getRandomGame();
          this.toastr.success('Succès', `alternative ajouter`);
        },
        (error) => {
          this.toastr.error(`Error ${error}`);
        }
      );
      this.getRandomGame();
    } else {
      this.getRandomGame();
    }
  }

  deleteGame(id: number) {
    const r = confirm('Et tu sur ?');
    if (r) {
      this.gameService.deleteGame(id).subscribe();
      this.toastr.success('Succès', `jeux suprimer`);
      this.router.navigateByUrl('/dashboard');
    } else {
      this.toastr.error(`Error suppression`);
    }
  }

}
