import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class XsssanitizerService {

  constructor(sanitizer:DomSanitizer) {

  }

  allowSafeHtml(htmlContent:string){

    //return this.sanitizer.bypassSecurityTrustHtml(htmlContent);
    
  }


}
