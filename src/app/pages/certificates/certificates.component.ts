import { Component, OnInit } from '@angular/core'
import { RouterLink } from '@angular/router'

import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component'
import { CertificateItemComponent } from '../../_components/certificate-item/certificate-item.component'
import { Certificate } from '../../interfaces/certificate'
import { CertificateService } from '../../_services/certificate.service'

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [SecondaryButtonComponent, CertificateItemComponent, RouterLink],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent implements OnInit {
  certificates: Certificate[] = []

  constructor(private certificateService: CertificateService) {}

  ngOnInit(): void {
    this.certificates = this.certificateService.certificates
  }
}
