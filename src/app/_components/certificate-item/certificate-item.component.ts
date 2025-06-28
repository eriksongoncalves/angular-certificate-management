import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'

import { SecondaryButtonComponent } from '../secondary-button/secondary-button.component'

@Component({
  selector: 'app-certificate-item',
  standalone: true,
  imports: [SecondaryButtonComponent],
  templateUrl: './certificate-item.component.html',
  styleUrl: './certificate-item.component.scss'
})
export class CertificateItemComponent {
  @Input() id: string = ''
  @Input() studentName: string = ''
  @Input() date_issue: string = ''

  constructor(private router: Router) {}

  redirectToCertificate(): void {
    this.router.navigate(['/certificados', this.id])
  }
}
