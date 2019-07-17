import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {GameService} from '../../../core/http/game.service';
import {ToastrService} from 'ngx-toastr';
import {Game} from '../../../shared/models/game';
import {first} from 'rxjs/operators';
import {ConsoleService} from '../../../core/http/console.service';
import {Console} from '../../../shared/models/console';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {
  public id: string;
  public game: Game;
  public console: Console[];

  constructor(private fb: FormBuilder,
              private router: Router,
              private gameService: GameService,
              private route: ActivatedRoute,
              private toastr: ToastrService,
              private consoleService: ConsoleService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((id: ParamMap) => {
      this.id = id.get('id');
      if (this.id) {
        this.gameService.getGameById(this.id).subscribe(
          (game: Game) => {
            this.game = game;
            this.gameForm.patchValue(game);
          },
        );
      }
    });
    this.consoleService.getListConsole().pipe(first()).subscribe((console) => {
      this.console = console;
    });
  }

  gameForm = this.fb.group(
    {
      name: ['', [Validators.required]],
      content: ['', [Validators.required]],
      console_id: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });

  onSubmit() {
    this.gameService.putGame(this.id, this.gameForm.value).subscribe(
      () => {
        this.toastr.success('Succès', `Jeux modifier`);
        this.router.navigateByUrl('/games');
      },
      (error) => {
        this.toastr.error(`Error ${error}`);
      }
    );
  }

}
