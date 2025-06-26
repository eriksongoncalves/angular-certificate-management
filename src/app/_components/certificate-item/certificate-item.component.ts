import { Component } from '@angular/core'
import { Router, RouterLink } from '@angular/router'

import { SecondaryButtonComponent } from '../secondary-button/secondary-button.component'

@Component({
  selector: 'app-certificate-item',
  standalone: true,
  imports: [SecondaryButtonComponent, RouterLink],
  templateUrl: './certificate-item.component.html',
  styleUrl: './certificate-item.component.scss'
})
export class CertificateItemComponent {
  constructor(private router: Router) {}

  redirectToCertificate(): void {
    this.router.navigate(['/certificados', '123'])
  }
}
