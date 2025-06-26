import { Component } from '@angular/core'

import { NavbarComponent } from './_components/navbar/navbar.component'
import { BaseUiComponent } from './_components/base-ui/base-ui.component'
import { CertificateComponent } from './pages/certificate/certificate.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, BaseUiComponent, CertificateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'certificate-management'
}
