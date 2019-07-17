import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GameService} from '../http/game.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
             selector: 'app-header',
             templateUrl: './header.component.html',
             styleUrls: ['./header.component.scss']
           })
export class HeaderComponent implements OnInit {
  @Output() search = new EventEmitter();

  constructor(private gameService: GameService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
  }

  searchForm = this.fb.group(
    {
      name: [''],
    });

  onSubmit() {
    this.search.emit(this.searchForm.value.name);
    this.router.navigate(['/search'], {queryParams: {name: this.searchForm.value.name}});
  }

}
