import {NgModule, Pipe, PipeTransform} from '@angular/core';
import {StudentType} from './student-type.enum';

@Pipe({name: 'studentTypePipe'})

export class StudentTypePipe implements PipeTransform {

  transform(value: StudentType): any {
    if (!value) {
      return value;
    }
    switch (StudentType[value.toString()]) {
      case StudentType.FULL_TIME  : {
        return 'SEPENUH MASA';
      }
      default: {
        return value;
      }
    }
  }


}
