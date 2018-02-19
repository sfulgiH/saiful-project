import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardPage} from './dashboard/dashboard.page';
import {MainLayout} from './main/main.layout';
import {AssetDetailPage} from './dashboard/asset-detail.page';
import {TestPage} from './dashboard/test.page';
import {StudentDetailPage} from './dashboard/student-detail.page';
import {AlbumDetailPage} from './dashboard/album.detail.page';
import {AlbumListPage} from './dashboard/album-list.page';

const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardPage,
      },
      {
        path: 'detail/:assetNo',
        component: AssetDetailPage,
      },
      {
        path: 'test',
        component: TestPage,
      },
      {
        path : 'student-detail/:matricNumber',
        component : StudentDetailPage,
      },
      {
        path : '',
        component : StudentDetailPage,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: false}),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
