import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-validate-token',
  templateUrl: './validate-token.component.html',
  styleUrls: ['./validate-token.component.css']
})
export class ValidateTokenComponent implements OnInit {

  constructor(){

    

    console.log("Estoy en componente validate-token")
   // alert("");
    $(document).ready(
   //Extraer el toke opaco
     console.log("Estoy en componente validate token, recupero token opaco");
			var idSessionCDPYNE = "vakor que mando por ejemplo el toke opaco";             
			opener.callParent(idSessionCDPYNE);   
    
    );
  
  }


  ngOnInit() {

   
  }

}
