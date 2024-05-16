import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { AddUpdateUserComponent } from '../add-update-user/add-update-user.component';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UsersListEditComponent } from '../users-list-edit/users-list-edit.component';
import { UserDataService } from '../services/user-data.service';

@Component({
    selector: 'app-user-list',
    standalone: false,
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.scss'
})


export class UserListComponent implements OnInit {

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
    ref: DynamicDialogRef | undefined;

    isAddUpdate: boolean = false;

    testBhuvi = "Hello";

    constructor(private productService: ProductService, private messageService: MessageService, private router: Router,
        public dialogService: DialogService, private userData: UserDataService, private confirmationService: ConfirmationService

    ) {

        this.getAllProducts()


    }

    ngOnInit() {


        this.cols = [
            { field: 'product', header: 'Product' },
            { field: 'price', header: 'Price' },
            { field: 'category', header: 'Category' },
            { field: 'rating', header: 'Reviews' },
            { field: 'inventoryStatus', header: 'Status' }
        ];

        this.statuses = [
            { label: 'INSTOCK', value: 'instock' },
            { label: 'LOWSTOCK', value: 'lowstock' },
            { label: 'OUTOFSTOCK', value: 'outofstock' }
        ];
        this.cols.push({ field: 'newField', header: 'New Header' });
    }

    getAllProducts() {
        this.productService.getProducts().then(data => {
            this.products = data
            console.log(this.products)
        });
    }

    addUpdateNewEmployye() {
        this.ref = this.dialogService.open(AddUpdateUserComponent, {
            header: 'Select a Product',
            width: '50vw',
            modal: true,
            breakpoints: {
                '960px': '75vw',
                '640px': '90vw'
            },
            data: {
                data: "Sherya"
            }
        });

        this.ref.onClose.subscribe((res: any) => {

            console.log(res)

            return

        });


    }

    openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    }


    deleteProduct1() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed? shreya',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {

                this.acceptFunc();
            },
            reject: () => {

                this.rejectFunc();
            }
        });
    }
    acceptFunc() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product deleted successfully.' });

    }

    rejectFunc() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Deletion canceled.' });

    }
    // acceptFunc() {

    //     console.log('Product deleted successfully.');

    // }

    // rejectFunc() {

    //     console.log('Deletion canceled.');

    // }





    //     openNew(){
    //       this.router.navigate(['/admin/users/add-update-user']);
    //  }


    // openNewEmplyee(){
    //  this.product = {};
    //         this.submitted = false; 
    //         this.productDialog = true;
    //     }


    deleteSelectedProducts() {
        this.deleteProductsDialog = true;
    }

    editProduct(product: Product) {
        this.product = { ...product };
        this.productDialog = true;
    }


    // editProduct() {
    //     this.ref = this.dialogService.open(UsersListEditComponent, {
    //         header: 'Select a Product',
    //         width: '50vw',
    //         modal: true,
    //         breakpoints: {
    //             '960px': '75vw',
    //             '640px': '90vw'
    //         },
    //     });


    // }


    deleteProduct(product: Product) {
        this.deleteProductDialog = true;
        this.product = { ...product };
    }

    confirmDeleteSelected() {
        this.deleteProductsDialog = false;
        this.products = this.products.filter(val => !this.selectedProducts.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
        this.selectedProducts = [];
    }

    confirmDelete() {
        this.deleteProductDialog = false;
        this.products = this.products.filter(val => val.id !== this.product.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
        this.product = {};
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




    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    // addUpdateNewEmployye() {

    //     this.isAddUpdate = true;

    // }

    getData(formData: any) {
        console.log(formData, "Bhuvi")
    }
}
