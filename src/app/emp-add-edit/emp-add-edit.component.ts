import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { EmpService } from '../service/emp.service';





@Component({
  selector: 'app-emp-add-edit',
  standalone: true,
  providers: [provideNativeDateAdapter(), EmpService],
  imports: [MatIconModule, MatButtonModule,
    MatToolbarModule, MatDialogModule, MatFormFieldModule,
    MatInputModule, MatDatepickerModule,
    FormsModule, ReactiveFormsModule, NgFor],
  templateUrl: './emp-add-edit.component.html',
  styleUrl: './emp-add-edit.component.css'
})
export class EmpAddEditComponent {

  empForm: FormGroup;

  constructor(private _fb: FormBuilder,
    private _empService: EmpService
  ) {
    this.empForm = this._fb.group({
      name: '',
      date: '',
      hour: '',
      email: '',
      tel: ''
    });
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      this._empService.addAgend(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Employee added sucessfully');
        }
      })
    }

  }
}
