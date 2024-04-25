import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  standalone: false,
  templateUrl: './add-update-user.component.html',
  styleUrl: './add-update-user.component.scss'
})


export class AddUpdateUserComponent implements OnInit {


  formGroup: FormGroup; // Define formGroup property

  constructor(private formBuilder: FormBuilder) {}




  gender: Gender[] | undefined;
  attendance: Attendance[] | undefined;



  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      // Define form controls here
      // Example:
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required],
      selectedGender: ['', Validators.required],
      selectedAttendance: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      department: ['', Validators.required],
      position: ['', Validators.required],
      // Add more form controls as needed
    });

      this.gender = [
        { name: 'Male', value: 'male' },
        { name: 'Female', value: 'female' },
      ];
      this.attendance = [
        { name: 'Present', value: 'present' },
        { name: 'Absent', value: 'absent' },
      ];
      
  }
}








