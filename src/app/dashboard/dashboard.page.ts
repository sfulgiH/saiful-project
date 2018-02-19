import {Component, DoCheck, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import { Asset } from './asset.interface';
import { Observable } from 'rxjs/Observable';
import { AssetService } from '../../services/asset.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {AssetCreatorDialog} from './asset-creator.dialog';
import {AcademicService} from '../../services/Academic.services';
import {Student} from './student.interface';

@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.page.html',
})
export class DashboardPage implements OnInit, OnDestroy {
  assets$: Observable<Asset[]>;
  students$: Observable<Student[]>;

  creatorDialogRef: MatDialogRef<AssetCreatorDialog>;

  // constructor
  constructor(private assetService: AssetService,
              private academicService:AcademicService,
              private router: Router,
              private route: ActivatedRoute,
              private vcf: ViewContainerRef,
              private dialog: MatDialog
  ) {
  }

  loadPosts(): void {
    this.assets$ = this.assetService.findAssets();
    this.students$ = this.academicService.findStudents();
  }

  viewAsset(asset: Student): void {
    console.log(JSON.stringify(asset));
    this.router.navigate(['/student-detail', asset.matricNumber]);
  }

  ngOnInit(): void {
    console.log('oninit');
    this.loadPosts();
  }

  ngOnDestroy(): void {
    console.log('ondestroy');
  }
  ngDoCheck(): void {
    console.log('Docheck');
  }
  showAddDialog(): void {
    console.log('showContainerDialog');
    let config: MatDialogConfig = new MatDialogConfig();
    config.viewContainerRef = this.vcf;
    config.role = 'dialog';
    config.width = '70%';
    config.height = '60%';
    config.position = {top: '0px'};
    this.creatorDialogRef = this.dialog.open(AssetCreatorDialog, config);
    this.creatorDialogRef.afterClosed().subscribe((res) => {
      console.log('close dialog');
    });
  }
}
