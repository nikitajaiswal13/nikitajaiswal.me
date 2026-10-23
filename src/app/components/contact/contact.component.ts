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
      subject: ['', [Validators.required, Validators.minLength(2)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {}

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit(): void {
    if (this.isSubmitting) {
      return;
    }

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    const formValues = this.contactForm.value;
    const templateParams = {
      name: formValues.name,
      email: formValues.email,
      message: `[Subject: ${formValues.subject}]\n\n${formValues.message}`,
      title: formValues.subject || 'New Message from Portfolio Contact Page',
      time: new Date().toLocaleString()
    };

    emailjs.send('service_fjz59lt', 'template_muvvbzn', templateParams, 'mrOnINU4qNfEzcCCN')
      .then(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.contactForm.reset();
      })
      .catch((error: unknown) => {
        console.error('Error sending email:', error);
        this.isSubmitting = false;
        this.submitError = true;
      });
  }
}
