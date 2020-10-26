import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CdkStepperModule } from '@angular/cdk/stepper';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterStepperComponent } from './register-stepper/register-stepper.component';
import { RegisterFirstStepComponent } from './register-first-step/register-first-step.component';
import { RegisterSecondStepComponent } from './register-second-step/register-second-step.component';
import { RegisterThirdStepComponent } from './register-third-step/register-third-step.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    RegisterStepperComponent,
    RegisterFirstStepComponent,
    RegisterSecondStepComponent,
    RegisterThirdStepComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    CdkStepperModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
  ],
})
export class AuthModule {}
