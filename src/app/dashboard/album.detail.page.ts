import {Component, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {Asset} from './asset.interface';
import {Observable} from 'rxjs/Observable';
import {AssetService} from '../../services/asset.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material';
import {AssetCreatorDialog} from './asset-creator.dialog';
import {Album} from './album.interface';
import {AlbumService} from '../../services/album.service';

@Component({
  selector: 'qs-album-detail',
  templateUrl: './album-detail.page.html',
})
export class AlbumDetailPage implements OnInit, OnDestroy {

  album$: Observable<Album>;

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

  ngOnInit(): void {
    this.route.params.subscribe((params: { id: number }) => {
      // this.album$ = this.albumService.findAlbumById(params.id);
    });
  }

  ngOnDestroy(): void {
    // no op
  }

  goBack(): void {
    this.router.navigate(['/album-list']);
  }
}
