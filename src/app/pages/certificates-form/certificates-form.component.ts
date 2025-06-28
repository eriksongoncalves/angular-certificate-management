import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, NgModel } from '@angular/forms'

import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component'
import { PrimaryButtonComponent } from '../../_components/primary-button/primary-button.component'
import { Certificate } from '../../interfaces/certificate'

@Component({
  selector: 'app-certificates-form',
  standalone: true,
  imports: [PrimaryButtonComponent, SecondaryButtonComponent, CommonModule, FormsModule],
  templateUrl: './certificates-form.component.html',
  styleUrl: './certificates-form.component.scss'
})
export class CertificatesFormComponent {
  certificateForm: Certificate = {
    actitivies: [],
    name: ''
  }

  activity: string = ''
  name: string = ''

  isInvalidField(control: NgModel): boolean {
    return !!(control.invalid && control.touched)
  }

  isFormValid(): boolean {
    return this.certificateForm.actitivies.length > 0 && this.name.length > 0
  }

  addActivityItem(): void {
    this.certificateForm.actitivies.push(this.activity)
    this.activity = ''
  }

  removeActivityItem(idx: number): void {
    this.certificateForm.actitivies.splice(idx, 1)
  }
}
