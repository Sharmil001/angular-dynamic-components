import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dyanmic-components';

  // Form Fields For Login
  formFields: any[] = [
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      placeholder: 'Enter Email Address',
      required: true,
      minLength: 3,
      maxLength: 40,
      pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
      disabled: false,
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter Password',
      required: true,
      minLength: 8, // Updated minimum length for stronger password
      maxLength: 20, // Adjust max length as needed
      pattern:
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$',
      disabled: false,
    },
  ];
  formData: any;

  // Example 2 - Form Field
  // formFields1: any[] = [
  //   {
  //     name: 'projectName',
  //     label: 'Project',
  //     type: 'text',
  //     placeholder: 'Enter Project Name',
  //     required: true,
  //     minLength: 3,
  //     maxLength: 260,
  //     pattern: '^(?=.*[a-zA-Z])(?![\\d ]+$)[a-zA-Z\\d ]+$',
  //     disabled: false,
  //   },
  //   {
  //     name: 'tenant',
  //     label: 'Tenant',
  //     type: 'dropdown',
  //     options: [
  //       { tenantName: 'Flipkart', tenantCode: 'ABC123' },
  //       { tenantName: 'Amazon', tenantCode: 'XYZ789' },
  //     ],
  //     optionLabel: 'tenantName',
  //     optionValue: 'tenantCode',
  //     placeholder: 'Select a Tenant',
  //     required: false,
  //     disabled: false,
  //   },
  //   {
  //     name: 'startDate',
  //     label: 'Starting Date',
  //     type: 'date',
  //     placeholder: 'Select a date',
  //     required: true,
  //     disabled: false,
  //   },
  //   {
  //     name: 'isActive',
  //     label: 'Is Active',
  //     type: 'checkbox',
  //     message: 'Activate project for users',
  //     required: false,
  //     disabled: false,
  //   },
  // ];

  // formData1: any;

  saveForm(formData: FormGroup): void {
    console.log('her', formData.value);
    // this.formData = formData.value;
  }
}
