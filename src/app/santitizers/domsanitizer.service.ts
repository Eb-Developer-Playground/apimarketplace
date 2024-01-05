import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class DomsanitizerService {

  CSFRHeader:Headers = new Headers({
    'content-type':'application-json',
    
  })

  constructor(private sanitizer: DomSanitizer) {

  }

  getSafeHtml(html: string) {

    return this.sanitizer.bypassSecurityTrustHtml(html);

  }

  sanitizeSafeScript(value:string){

    // bypassSecurityTrustScript
  
  }
  
  sanitizeSafeStyle(){
  
    // bypassSecurityTrustStyle
    // bypassSecurityTrustUrl
  }
  
}






