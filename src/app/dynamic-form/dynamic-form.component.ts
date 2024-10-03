// dynamic-form.component.ts
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export interface DynamicFormField {
  type: string; // 'text', 'dropdown', 'checkbox', etc.
  name: string; // FormControl name
  label: string; // Label text
  placeholder?: string; // Placeholder text
  optionLabel?: string; // Option label
  optionValue?: string; // Option value
  options?: any[]; // Dropdown options, etc.
  validation?: any[]; // Validators
  disabled?: boolean; // Disabled state
  required?: boolean; // Is field required
  pattern?: string; // Pattern validation
  maxLength?: number; // Maximum length
  minLength?: number; // Minimum length
}


@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.css"],
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input() fields: DynamicFormField[] = [];
  @Input() formData: any;
  @Input() isEdit: boolean = false;
  @Output() submit: EventEmitter<any> = new EventEmitter();

  form: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('here');
    if (changes['fields'] || changes['formData']) {
      this.buildForm();
    }
    // this way also you can write it.
    // if (changes.fields || changes.formData) {
    //   this.buildForm();
    // }
  }

  buildForm() {
    const group: any = {};
    this.fields.forEach((field) => {
      const control = this.fb.control({
        value: this.formData ? this.formData[field.name] : "",
        disabled: field.disabled || !this.isEdit,
      });

      const validations = [];

      if (field.required) validations.push(Validators.required);
      if (field.pattern) validations.push(Validators.pattern(field.pattern));
      if (field.maxLength)
        validations.push(Validators.maxLength(field.maxLength));
      if (field.minLength)
        validations.push(Validators.minLength(field.minLength));

      control.setValidators(validations);
      group[field.name] = control;
    });

    this.form = this.fb.group(group);
  }

  onSubmit() {
    if (this.form.valid) {
      this.submit.emit(this.form);
    } else {
      this.markAllFieldsAsTouched();
    }
  }

  markAllFieldsAsTouched() {
    Object.keys(this.form.controls).forEach((field) => {
      const control = this.form.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }

  getErrorMessage(field: DynamicFormField) {
    const control = this.form.get(field.name);
    if (control?.hasError("required")) {
      return `${field.label} is required`;
    } else if (control?.hasError("pattern")) {
      return `Invalid ${field.label}`;
    } else if (control?.hasError("maxlength")) {
      return `${field.label} exceeds maximum length of ${field.maxLength}`;
    } else if (control?.hasError("minlength")) {
      return `${field.label} must be at least ${field.minLength} characters long`;
    }
    return "";
  }

  resetForm() {
    this.form.reset();
  }
}
