import { Component, OnInit, ElementRef, ViewChild } from '@angular/core'
import { ActivatedRoute, RouterLink } from '@angular/router'
import html2canvas from 'html2canvas'

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
  @ViewChild('certificateContainer') certificateElement!: ElementRef

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

  download(): void {
    if (this.certificate == undefined) {
      return
    }

    html2canvas(this.certificateElement.nativeElement, { scale: 2 }).then(canvas => {
      const link = document.createElement('a')
      link.href = canvas.toDataURL('image/png')
      link.download = 'certificado_' + this.certificate?.name.replaceAll(' ', '_') + '.png'
      link.click()
    })
  }
}
