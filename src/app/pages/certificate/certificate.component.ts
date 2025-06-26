import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component'

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [SecondaryButtonComponent, RouterLink],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.scss'
})
export class CertificateComponent {}
