
import * as converter from 'xml-js';

import {Component} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SIS-RFE';
  public searchText!: string;
  public menu = 0;
  public FacturasElectronicas:any=[];
  public FacturasCreditos:any=[];
  public FacturasDebitos:any=[];
  heroes = [
    { id: 11, name: 'Mr. Nice', country: 'India' },
    { id: 12, name: 'Narco' , country: 'USA'},
    { id: 13, name: 'Bombasto' , country: 'UK'},
    { id: 14, name: 'Celeritas' , country: 'Canada' },
    { id: 15, name: 'Magneta' , country: 'Russia'},
    { id: 16, name: 'RubberMan' , country: 'China'},
    { id: 17, name: 'Dynama' , country: 'Germany'},
    { id: 18, name: 'Dr IQ' , country: 'Hong Kong'},
    { id: 19, name: 'Magma' , country: 'South Africa'},
    { id: 20, name: 'Tornado' , country: 'Sri Lanka'}
  ];

  ConvertirArchivo(tipo:number){

  }
  
  inputXml : any;
  selectFile(event:any){
    // console.log(event.currentTarget.files.length);
    for (let index = 0; index < event.currentTarget.files.length; index++) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        let xml = e.target.result;
        this.inputXml = xml;
        let result1 = converter.xml2json(xml, {compact: true, spaces: 2});
  
        let JSONData:JSON = JSON.parse(result1);
        console.log(JSONData);
        
        if(Object.keys(JSONData)[1] == 'FacturaElectronica'){
          
          Object.values(JSONData)[1].Clave = 'FacturaElectronica';
          this.FacturasElectronicas.push(Object.values(JSONData)[1]);
        }
        if(Object.keys(JSONData)[1] == 'NotaDebitoElectronica'){
          this.FacturasDebitos.push(Object.values(JSONData)[1]);
        }
        if(Object.keys(JSONData)[1] == 'NotaCreditoElectronica'){
          this.FacturasCreditos.push(Object.values(JSONData)[1]);
        }
      }
      reader.readAsText(event.currentTarget.files[index]);
      
    }
      
  }
 
  direccionar(tipo:number){
    this.menu = tipo;
  }
 
}

