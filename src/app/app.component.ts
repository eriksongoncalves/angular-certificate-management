import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { NavbarComponent } from './_components/navbar/navbar.component'
import { BaseUiComponent } from './_components/base-ui/base-ui.component'
import { CertificateService } from './_services/certificate.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, BaseUiComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private certificateService: CertificateService) {}

  ngOnInit(): void {
    const certificates = localStorage.getItem('certificados')

    this.certificateService.certificates = certificates ? JSON.parse(certificates) : []
  }
}
