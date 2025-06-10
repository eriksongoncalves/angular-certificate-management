import { Component } from '@angular/core'

import { SecondaryButtonComponent } from '../secondary-button/secondary-button.component'

@Component({
  selector: 'app-certificate-item',
  standalone: true,
  imports: [SecondaryButtonComponent],
  templateUrl: './certificate-item.component.html',
  styleUrl: './certificate-item.component.scss'
})
export class CertificateItemComponent {}
