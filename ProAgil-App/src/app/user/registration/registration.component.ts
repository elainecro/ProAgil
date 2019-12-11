import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;

  constructor(public fb: FormBuilder,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.validation();
  }

  validation() {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(4)]],
        confirmPassword: ['', Validators.required]
      }, { validator: this.comparePass })
    });
  }

  comparePass(fb: FormGroup){
    const confirmPassCtrl = fb.get('confirmPassword');
    if (confirmPassCtrl.errors == null || 'mismatch' in confirmPassCtrl.errors) {
      if (fb.get('password').value !== confirmPassCtrl.value) {
        confirmPassCtrl.setErrors({ mismatch: true });
      } else {
        confirmPassCtrl.setErrors(null);
      }
    }
  }


  cadastrarUsuario() {
    console.log('cadastrar usuário');
  }

}
