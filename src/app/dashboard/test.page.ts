import {Component, OnDestroy, OnInit} from '@angular/core';
import {Student} from './student.interface';
import {Observable} from 'rxjs/Observable';
import {AcademicService} from '../../services/Academic.services';

@Component ({
  selector:'qs-test',
  templateUrl:'./test.page.html',
})
export class TestPage implements OnInit, OnDestroy{
  students$: Observable<Student[]>;
  constructor( private academicService:AcademicService){
  }

  ngOnInit(): void {
    this.students$ = this.academicService.findStudents();
  }

  ngOnDestroy(): void {
    console.log('ondestroy');
  }
}

