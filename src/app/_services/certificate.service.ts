import { Injectable } from '@angular/core'

import { Certificate } from '../interfaces/certificate'

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  certificates: Certificate[] = []

  constructor() {}

  addCertificate(certificate: Certificate): void {
    this.certificates.push({ ...certificate })
    localStorage.setItem('certificados', JSON.stringify(this.certificates))
  }
}
