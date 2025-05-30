import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import {
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonCheckbox,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon,
    IonCheckbox,
  ],
})
export class LoginPage implements OnInit {
  public passwordVisible: boolean = false;
  public username: string = '';
  public password: string = '';
  public appVersion: string = '1.0.0';
  public currentYear: number = new Date().getFullYear();

  constructor(private navCtrl: NavController) { }

  ngOnInit(): void { }

  // Método para manejar la visibilidad de la contraseña
  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  // Método para limpiar el campo de usuario
  clearUsername(): void {
    this.username = '';
  }

  // Método para el formulario
  onSubmit(): void {
    console.log('Formulario enviado:', { username: this.username, password: this.password });
    // Aquí puedes agregar la lógica de autenticación
    this.navCtrl.navigateForward('/home'); // Ejemplo de redirección
  }

  // Método para navegar a la página de recuperación de contraseña
  goToForgotPassword(): void {
    this.navCtrl.navigateForward('/forgot-password');
  }
}