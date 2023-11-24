import { Component } from '@angular/core';

@Component({
  selector: 'app-input-forms',
  templateUrl: './input-forms.page.html',
  styleUrls: ['./input-forms.page.scss'],
})
export class InputFormsPage {
  nombre: string;
  email: string;
  telephone: string;
  birthdate: string;
  edad: number;

  calculateAge() {
    const birthYear = new Date(this.birthdate).getFullYear();
    const currentYear = new Date().getFullYear();
    this.edad = currentYear - birthYear;
  }
}