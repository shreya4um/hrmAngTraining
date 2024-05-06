


import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

// interface Gender {
//   name: string;
//   value: string;
// }

// interface Attendance {
//   name: string;
//   value: string;
// }



@Component({
  selector: 'app-add-update-user',
  templateUrl: './add-update-user.component.html',
  styleUrls: ['./add-update-user.component.scss']
})
export class AddUpdateUserComponent implements OnInit {




  gender=[
    {
      name: 'Select gender', value:null
    },
    {
      name: 'Female', value:'female'
    },
    {
      name: 'Male', value:'male'
    }

  ]

  
  attendance =[
    
    {
      name: 'Apsent', value:'apsent'
    },
    {
      name: 'Present', value:'present'
    }

  ]

  @Input() data:any;

  @Output() userformData = new EventEmitter<any>();


  formGroup: FormGroup;
  submitted: boolean;
  //  gender: Gender[] = [];
  // attendance: Attendance[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private configService: DynamicDialogConfig,
    private dialogService: DialogService,
    public ref: DynamicDialogRef
  ) { 
    console.log("this.data")
  }

  ngOnInit() {
    this.initializeForm();
    // this.loadGenderOptions();
    // this.loadAttendanceOptions();

    console.log(this.data, "Bhuvi")
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


  get f() {
    return this.formGroup.controls
  }


  AddUpdateUser() {

    this.submitted = true;
    if (this.formGroup.valid) {
      const userData = this.formGroup.value;
      
      // this.userformData.emit(userData);

    //  this.ref.close(); // Close the dialog after emitting data
    } else {
      // Handle form validation errors
      Object.keys(this.formGroup.controls).forEach(key => {
        this.formGroup.get(key).markAsTouched();
      });
    }
  }




  
}
