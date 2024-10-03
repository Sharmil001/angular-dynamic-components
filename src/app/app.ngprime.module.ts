import { NgModule } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { CalendarModule } from "primeng/calendar";
import { InputTextareaModule } from "primeng/inputtextarea";
import { DropdownModule } from "primeng/dropdown";
import { CheckboxModule } from "primeng/checkbox";
import { RadioButtonModule } from "primeng/radiobutton";
import { InputSwitchModule } from 'primeng/inputswitch';
import { PasswordModule } from "primeng/password";

@NgModule({
  exports: [
    InputTextModule,
    CalendarModule,
    InputTextareaModule,
    DropdownModule,
    CheckboxModule,
    RadioButtonModule,
    InputSwitchModule,
    PasswordModule
  ],
})
export class NgPrimeModule {}
