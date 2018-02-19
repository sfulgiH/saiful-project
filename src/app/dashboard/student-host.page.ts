import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {AcademicService} from '../../services/Academic.services';
@Component ({
  selector: 'qs-student-dialog' ,
  templateUrl: './student.dialog.html,'
})
export class StudentCreatorDialog {
  creatorDialogRef: MatDialogRef<StudentCreatorDialog>;
  constructor(private studentService: AcademicService,
              private dialog: MatDialog) {
  }
  showAddDialog(): void {
    this.creatorDialogRef = this.dialog.open(StudentCreatorDialog);
  }
  }
// dialog reference


// direct inject constructor




