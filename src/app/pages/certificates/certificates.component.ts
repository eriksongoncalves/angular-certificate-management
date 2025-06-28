import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component'
import { CertificateItemComponent } from '../../_components/certificate-item/certificate-item.component'

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [SecondaryButtonComponent, CertificateItemComponent, RouterLink],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent {}
