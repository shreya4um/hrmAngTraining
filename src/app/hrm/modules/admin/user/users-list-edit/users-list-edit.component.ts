




import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/demo/api/product';
interface Gender {
  name: string;
  value: string;
}

interface Attendance {
  name: string;
  value: string;
}
@Component({
  selector: 'app-users-list-edit',
  standalone: false,
  templateUrl: './users-list-edit.component.html',
  styleUrl: './users-list-edit.component.scss'
})


export class UsersListEditComponent implements OnInit {


  formGroup: FormGroup; // Define formGroup property
  messageService: any;
  createId: any;
  findIndexById: any;

  constructor(private formBuilder: FormBuilder) {}



  productDialog: boolean = false;

  deleteProductDialog: boolean = false;

  deleteProductsDialog: boolean = false;

  products: Product[] = [];

  product: Product = {};

  selectedProducts: Product[] = [];

  submitted: boolean = false;

  cols: any[] = [];

  statuses: any[] = [];

  rowsPerPageOptions = [5, 10, 20];
  popoverButton: EventTarget;





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

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
}

saveProduct() {
    this.submitted = true;

    if (this.product.name?.trim()) {
        if (this.product.id) {
            // @ts-ignore
            this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value : this.product.inventoryStatus;
            this.products[this.findIndexById(this.product.id)] = this.product;
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
        } else {
            this.product.id = this.createId();
            this.product.code = this.createId();
            this.product.image = 'product-placeholder.svg';
            // @ts-ignore
            this.product.inventoryStatus = this.product.inventoryStatus ? this.product.inventoryStatus.value : 'INSTOCK';
            this.products.push(this.product);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
        }

        this.products = [...this.products];
        this.productDialog = false;
        this.product = {};
    }
}


}








