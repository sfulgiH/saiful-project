import {Component, OnDestroy, OnInit} from '@angular/core';

import {Observable} from 'rxjs/Observable';

import {Album} from './album.interface';

import {Router} from '@angular/router';
import {AlbumService} from '../../services/album.service';

@Component({
  selector: 'qs-album-list',
  templateUrl: './album-list.page.html',
})
export class AlbumListPage implements OnInit, OnDestroy {
  album$: Observable<Album[]>;

  constructor(private flora:AlbumService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.album$ = this.flora.findAlbum();
  }


  viewAlbum(album: Album) {
    console.log(JSON.stringify(album));
    this.router.navigate(['/albumDetail', album.id]);
  }

  ngOnDestroy(): void {
    console.log('ondestroy');
  }
}
