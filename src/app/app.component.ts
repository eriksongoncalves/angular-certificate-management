import { Component } from '@angular/core'

import { NavbarComponent } from './_components/navbar/navbar.component'
import { PrimaryButtonComponent } from './_components/primary-button/primary-button.component'
import { SecondaryButtonComponent } from './_components/secondary-button/secondary-button.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, PrimaryButtonComponent, SecondaryButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'certificate-management'
}
