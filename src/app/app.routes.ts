import { Routes } from '@angular/router'

import { CertificatesComponent } from './pages/certificates/certificates.component'
import { CertificatesFormComponent } from './pages/certificates-form/certificates-form.component'
import { CertificateComponent } from './pages/certificate/certificate.component'

export const routes: Routes = [
  {
    path: '',
    component: CertificatesComponent
  },
  {
    path: 'certificados/novo',
    component: CertificatesFormComponent
  },
  {
    path: 'certificados/:id',
    component: CertificateComponent
  }
]
