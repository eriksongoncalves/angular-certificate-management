import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { NavbarComponent } from './_components/navbar/navbar.component'
import { BaseUiComponent } from './_components/base-ui/base-ui.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, BaseUiComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'certificate-management'
}
