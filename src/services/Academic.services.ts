import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {Student} from '../app/dashboard/student.interface';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable()
export class AcademicService {

  constructor(private http: HttpClient){
    // no op
  }

  findStudents(): Observable<Student[]> {
    return  this.http.get( environment.endpoint + '/students.json').map(res => <Student[]>res);
  }

  findstudentBymatricNumber(matricNumber: string): Observable<Student> {
    return this.http.get(environment.endpoint + '/student.json').map(res => <Student>res);
  }
}
  //find Student
