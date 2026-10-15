import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['Engineering Inquiry'],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    const templateParams = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: `[Subject: ${this.contactForm.value.subject || 'Inquiry'}]\n\n${this.contactForm.value.message}`,
      title: 'New Message from Contact Page',
      time: new Date().toLocaleString()
    };

    emailjs.send('service_fjz59lt', 'template_muvvbzn', templateParams, 'mrOnINU4qNfEzcCCN')
      .then(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.contactForm.reset({
          name: '',
          email: '',
          subject: 'Engineering Inquiry',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        this.isSubmitting = false;
        this.submitError = true;
      });
  }
}
