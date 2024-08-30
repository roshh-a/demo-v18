import { Component, computed, Signal, signal } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public dataForm: any = FormGroup;
  public username = signal('name');
  // firstValue: number = 0;
  // secondValue: number = 0;
  // public value1 = signal(0);
  // total: number = 0;

  constructor(private formBuilder: FormBuilder) {
    this.dataForm = this.formBuilder.group({
      // firstVal: ['', Validators.required],
      // secondVal: ['', Validators.required]
      name: ['', Validators.required]
    });
  }
  onSubmit($event: any) {
    // $event.preventDefaults();
    if (this.dataForm.valid) {
      this.username.update(() => this.dataForm.value.name);
      // this.firstValue = parseInt(this.dataForm.value.firstVal);
      // this.secondValue = parseInt(this.dataForm.value.secondVal);
      // let value1 = signal(this.firstValue);
      // let value2 = signal(this.secondValue);
      // this.total = value1() + value2();
      // console.log(this.total);
      // this.total = this.finalVal.update(this.total => this.total + 3);
      // window.alert(this.finalVal);
    }
  }
}
