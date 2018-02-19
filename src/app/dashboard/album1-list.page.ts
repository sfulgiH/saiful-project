import {Observable} from 'rxjs/Observable';
import {Album1Service} from '../../services/album1.service';
import {Album} from './album.interface';
import {OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Album1} from './album1.interface';


@component ({
  selector : 'qs-album-list',
  templateUrl: './album1-list.page.html,'
})

export class Album1ListPageListPage implements OnInit, OnDestroy {
  album$: Observable<Album1[]>;

  constructor(private flora:Album1Service,
              private router: Router) {
  }
}
