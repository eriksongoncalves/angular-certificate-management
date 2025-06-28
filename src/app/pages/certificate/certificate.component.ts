import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, RouterLink } from '@angular/router'

import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component'
import { CertificateService } from '../../_services/certificate.service'
import { Certificate } from '../../interfaces/certificate'

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [SecondaryButtonComponent, RouterLink],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.scss'
})
export class CertificateComponent implements OnInit {
  id: string | null = null
  certificate: Certificate | undefined

  constructor(
    private certificateService: CertificateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
      this.certificate = this.certificateService.certificates.find(item => item.id == this.id)
    })
  }
}
