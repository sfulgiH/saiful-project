import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Album} from '../app/dashboard/album.interface';


@Injectable()
export class AlbumService {
  constructor

  (private http: HttpClient) {

  }

  findAlbum(): Observable<Album[]>{
    return this.http.get('https://saiful-1a525.firebaseio.com/Album.json').map(res=><Album[]>res);
  }

}
