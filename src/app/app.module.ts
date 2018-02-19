import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import {MainLayout} from './main/main.layout';
import {AssetService} from '../services/asset.service';
import {AssetDetailPage} from './dashboard/asset-detail.page';
import {DashboardPage} from './dashboard/dashboard.page';
import {AssetCreatorDialog} from './dashboard/asset-creator.dialog';
import {AcademicService} from '../services/Academic.services';
import {TestPage} from './dashboard/test.page';
import {StudentDetailPage} from './dashboard/student-detail.page';
import {AlbumService} from '../services/album.service';
import {AlbumListPage} from './dashboard/album-list.page';
import {AlbumDetailPage} from './dashboard/album.detail.page';
import {studentCreatorDialog} from './dashboard/student-creator.dialog';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {StudentTypePipe} from './dashboard/student-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    AssetDetailPage,
    AssetCreatorDialog,
    MainLayout,
    TestPage,
    StudentDetailPage,
    // AlbumListPage,
    // AlbumDetailPage,
    studentCreatorDialog,
    StudentTypePipe,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,


  ],
  providers: [AssetService, AcademicService,AlbumService],
  entryComponents: [AssetCreatorDialog,studentCreatorDialog],
  bootstrap: [AppComponent],
})
export class AppModule {
}
