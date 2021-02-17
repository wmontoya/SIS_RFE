import { Component } from '@angular/core';
import * as converter from 'xml-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SIS-RFE';
  


  ConvertirArchivo(tipo:number){

  }
  
  inputXml : any;
  selectFile(event:any){
    const reader = new FileReader();
    reader.onload = (e: any) => {
      let xml = e.target.result;
      this.inputXml = xml;
      let result1 = converter.xml2json(xml, {compact: true, spaces: 2});

      const JSONData = JSON.parse(result1);
      console.log(JSONData);
      
		}
    reader.readAsText(event.target.files[0]);
  }
 
 



}
