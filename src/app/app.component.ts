import { Component } from '@angular/core'

import { NavbarComponent } from './_components/navbar/navbar.component'
import { BaseUiComponent } from './_components/base-ui/base-ui.component'
import { CertificatesComponent } from './pages/certificates/certificates.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, BaseUiComponent, CertificatesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'certificate-management'
}
