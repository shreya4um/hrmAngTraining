


import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

interface Gender {
  name: string;
  value: string;
}

interface Attendance {
  name: string;
  value: string;
}

@Component({
  selector: 'app-add-update-user',
  templateUrl: './add-update-user.component.html',
  styleUrls: ['./add-update-user.component.scss']
})
export class AddUpdateUserComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<any>();

  formGroup: FormGroup;
  gender: Gender[] = [];
  attendance: Attendance[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private configService: DynamicDialogConfig,
    private dialogService: DialogService,
    public ref: DynamicDialogRef
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.loadGenderOptions();
    this.loadAttendanceOptions();
  }

  initializeForm() {
    this.formGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required],
      selectedGender: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      department: ['', Validators.required],
      position: ['', Validators.required],
      selectedAttendance: ['', Validators.required]
    });
  }

  loadGenderOptions() {
    // Assuming you fetch gender options from somewhere (e.g., API)
    this.gender = [
      { name: 'Male', value: 'male' },
      { name: 'Female', value: 'female' }
    ];
  }

  loadAttendanceOptions() {
    // Assuming you fetch attendance options from somewhere (e.g., API)
    this.attendance = [
      { name: 'Present', value: 'present' },
      { name: 'Absent', value: 'absent' }
    ];
  }

  AddUpdateUser() {
    if (this.formGroup.valid) {
      const userData = this.formGroup.value;
      this.newItemEvent.emit(userData);
      this.ref.close(); // Close the dialog after emitting data
    } else {
      // Handle form validation errors
      Object.keys(this.formGroup.controls).forEach(key => {
        this.formGroup.get(key).markAsTouched();
      });
    }
  }
}
