import {AssetService} from '../../services/asset.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Asset} from './asset.interface';
import {Component, OnInit} from '@angular/core';
import {AcademicService} from '../../services/Academic.services';
import {Student} from './student.interface';

@Component({
  selector: 'qs.student.detail.',
  templateUrl: 'student.detail.page.html'
})
export class StudentDetailPage implements OnInit {
  student$: Observable<Student>;


  // constructor
  constructor(private academicService: AcademicService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  //iplement onInit
  ngOnInit(): void {
    this.route.params.subscribe((params: { matricNumber: string }) => {

      //this is where you retrieve data
      this.student$ = this.academicService.findstudentBymatricNumber(params.matricNumber);
    });
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
