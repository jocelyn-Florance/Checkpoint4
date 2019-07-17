import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {GameService} from '../../../core/http/game.service';
import {ToastrService} from 'ngx-toastr';
import {ConsoleService} from '../../../core/http/console.service';
import {first} from 'rxjs/operators';
import {Console} from '../../../shared/models/console';

@Component(
  {
    selector: 'app-create-game',
    templateUrl: './create-game.component.html',
    styleUrls: ['./create-game.component.scss']
  })
export class CreateGameComponent implements OnInit {
  public console: Console[];

  constructor(private fb: FormBuilder,
              private router: Router,
              private gameService: GameService,
              private consoleService: ConsoleService,
              private toastr: ToastrService,
  ) {
  }

  ngOnInit() {
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
    this.gameService.postGame(this.gameForm.value).subscribe(
      () => {
        this.gameForm.reset();
        this.toastr.success('Succès', `Jeux cree`);
        this.router.navigateByUrl('/dashboard');
      },
      (error) => {
        this.gameForm.reset();
        this.toastr.error(`Error ${error}`);
      }
    );
  }

}
