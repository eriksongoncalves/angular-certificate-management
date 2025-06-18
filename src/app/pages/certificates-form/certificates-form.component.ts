import { Component } from '@angular/core'

import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component'
import { PrimaryButtonComponent } from '../../_components/primary-button/primary-button.component'

@Component({
  selector: 'app-certificates-form',
  standalone: true,
  imports: [PrimaryButtonComponent, SecondaryButtonComponent],
  templateUrl: './certificates-form.component.html',
  styleUrl: './certificates-form.component.scss'
})
export class CertificatesFormComponent {}
