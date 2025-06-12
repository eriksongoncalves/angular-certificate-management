import { Component } from '@angular/core'

import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component'

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [SecondaryButtonComponent],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent {}
