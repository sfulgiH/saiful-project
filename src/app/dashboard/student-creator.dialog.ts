import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'qs-student-creator',
  templateUrl: './student-creator.dialog.html'
})

export class studentCreatorDialog implements OnInit {

  editorForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.editorForm = this.formBuilder.group({
      studentNo: ['', Validators.required]
    });
  }

}
