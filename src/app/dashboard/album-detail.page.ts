import {MatDialogRef} from '@angular/material';
import {Asset} from './asset.interface';
import {Observable} from 'rxjs/Observable';
import {AssetCreatorDialog} from './asset-creator.dialog';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AssetService} from '../../services/asset.service';
import {Album} from './album.interface';

@Component({
  selector: 'qs-album-detail',
  templateUrl: './album-detail.page.html',
})
export class AlbumDetailPage implements OnInit, OnDestroy {

  album$: Observable<Album>;
  creatorDialogRef: MatDialogRef<AlbumCreatorDialog>;

  columns: any[] = [
    {name: 'referenceNo', label: 'Reference No'},
    {name: 'maintainedDate', label: 'Date'},
    {name: 'cost', label: 'Cost'},
  ];

  // constructor
  constructor(private albumService: AlbumService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  loadAlbum(albumNo: string): void {
    console.log('albumNo: ' + albumNo);
    this.album$ = this.albumService.findAlbumByAlbumNo(albumNo);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: { albumNo: string }) => {
      this.loadAlbum(params.albumNo);
    });
  }

  ngOnDestroy(): void {
    // no op
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
