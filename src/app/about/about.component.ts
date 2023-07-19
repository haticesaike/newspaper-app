import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  downloadPDF(): void {
    const pdfURL = '../../assets/document/haticesaike.pdf';

    // Yeni bir a etiketi oluşturun
    const link = document.createElement('a');
    link.href = pdfURL;

    // İndirme dosyasının adını belirtin (isteğe bağlı)
    link.download = 'haticesaikeCV.pdf';

    // A etiketini tıklama işlemini yapın
    link.click();

    // A etiketini kaldırın (isteğe bağlı)
    link.remove();
  }

 
  
  constructor() { }

  ngOnInit() {
    
  

  }

}
