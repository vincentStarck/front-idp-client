import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { WindowRef } from './WindowRef';


function _window() : any {
  // return the global native browser window object
  return window;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private winRef: WindowRef){
  console.log("Estoy en constructor");
  }
  public ngOnInit() {
    var childWindow;
    $(document).ready(

      function () {
        var idpUrl = "http://localhost:9099/idp-login";

        $("#loginButton").on("click",
          function () {
            childWindow = popupCenter(idpUrl, "Autenticación Santander", 400, 600);
          });
        });
            this.winRef.nativeWindow.callParent =  function (algo) {
                 childWindow.close();
                 console.log("Estoy en funcion que cierra pagina login idp")
                 console.log("valor recibido: " + algo);


                }
        function popupCenter(url, title, w, h) {
          // Fixes dual-screen position                         Most browsers      Firefox
          var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
          var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;

          var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
          var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

          var left = ((width / 2) - (w / 2)) + dualScreenLeft;
          var top = ((height / 2) - (h / 2)) + dualScreenTop;
          var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

          // Puts focus on the newWindow
          if (window.focus) {
            newWindow.focus();
          }
          return newWindow;
        }


     

  }
}
