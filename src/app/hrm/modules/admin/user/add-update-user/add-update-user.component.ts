


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




  gender = [

    {
      name: 'Female', value: 'female'
    },
    {
      name: 'Male', value: 'male'
    }

  ]


  attendance = [

    {
      name: 'Apsent', value: 'apsent'
    },
    {
      name: 'Present', value: 'present'
    }

  ]


  statuses = [
    { name: 'Available', value: 'available' },
    {name: 'Out of Stock', value: 'out_of_stock' },
    // Add more statuses as needed
  ];

  category = [

    {
      name: 'Accessories', value: 'accessories'
    },
    {
      name: 'Clothing', value: 'clothing'
    },
    {
      name: 'Electronics', value: 'electronics'
    },
    {
      name: 'Fitness', value: 'fitness'
    }


  ]


  @Input() data: any;
  products = [] as any;

  @Output() userformData = new EventEmitter<any>();


  formGroup: FormGroup;
  submitted: boolean;
  fb: any;
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
        name: ['',[Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
        description: ['', Validators.required],
        inventoryStatus: ['', Validators.required],
        category: ['', Validators.required],
        price: ['', [Validators.required, Validators.min(0)]],
        quantity: ['', [Validators.required, Validators.min(0)]]
      });
    }
 

  //   this.formGroup = this.formBuilder.group({

  //     firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
  //     lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
  //     email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
  //     dateOfBirth: ['', Validators.required],
  //     selectedGender: ['', Validators.required],
  //     phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
  //     address: ['', Validators.required],
  //     department: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
  //     position: ['', Validators.required],
  //     selectedAttendance: ['', Validators.required]
  //   });
  // }


  get f() {
    return this.formGroup.controls
  }


  AddUpdateUser() {
    console.log(this.formGroup.value)
    this.products.push(this.formGroup.value);
    console.log(this.products, "Bhvui")
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
