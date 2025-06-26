import { Component } from '@angular/core'

import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component'

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [SecondaryButtonComponent],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.scss'
})
export class CertificateComponent {}
