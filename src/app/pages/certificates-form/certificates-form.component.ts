import { Component, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, NgForm, NgModel } from '@angular/forms'
import { Router } from '@angular/router'
import { v4 as uuidv4 } from 'uuid'

import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component'
import { PrimaryButtonComponent } from '../../_components/primary-button/primary-button.component'
import { Certificate } from '../../interfaces/certificate'
import { CertificateService } from '../../_services/certificate.service'

@Component({
  selector: 'app-certificates-form',
  standalone: true,
  imports: [PrimaryButtonComponent, SecondaryButtonComponent, CommonModule, FormsModule],
  templateUrl: './certificates-form.component.html',
  styleUrl: './certificates-form.component.scss'
})
export class CertificatesFormComponent {
  @ViewChild('form') form!: NgForm

  constructor(
    private certificateService: CertificateService,
    private router: Router
  ) {}

  certificateForm: Certificate = {
    id: '',
    actitivies: [],
    name: '',
    date_issue: ''
  }

  activity: string = ''

  isInvalidField(control: NgModel): boolean {
    return !!(control.invalid && control.touched)
  }

  isFormValid(): boolean {
    return this.certificateForm.actitivies.length > 0 && this.certificateForm.name.length > 0
  }

  addActivityItem(): void {
    if (this.activity.length == 0) {
      return
    }

    this.certificateForm.actitivies.push(this.activity)
    this.activity = ''
  }

  removeActivityItem(idx: number): void {
    this.certificateForm.actitivies.splice(idx, 1)
  }

  submit(): void {
    if (!this.isFormValid()) {
      return
    }

    this.certificateForm.id = uuidv4()
    this.certificateForm.date_issue = this.getCurrentDateFormatted()

    this.certificateService.addCertificate(this.certificateForm)

    this.certificateForm = this.getInitialState()
    this.form.resetForm()

    this.router.navigate(['/certificados', this.certificateForm.id])
  }

  private getInitialState(): Certificate {
    return {
      id: '',
      actitivies: [],
      name: '',
      date_issue: ''
    }
  }

  private getCurrentDateFormatted(): string {
    const currentDate = new Date()
    const day = String(currentDate.getDate()).padStart(2, '0')
    const month = String(currentDate.getMonth() + 1).padStart(2, '0')
    const year = currentDate.getFullYear()

    return `${day}/${month}/${year}`
  }
}
