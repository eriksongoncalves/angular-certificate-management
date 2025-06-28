import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-secondary-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secondary-button.component.html',
  styleUrl: './secondary-button.component.scss'
})
export class SecondaryButtonComponent {
  @Input() disabled: boolean = false
}
