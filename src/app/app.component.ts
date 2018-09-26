import { Component } from '@angular/core';
import { WindowRef } from './WindowRef';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private winRef: WindowRef) {

  }


  redirectSignIngIdp() {

    var idpUrl = "http://localhost:9099/idp-login";
    var w = 1000;
    var h = 500;
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    var idpWindow = window.open(idpUrl, "IDP", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
    this.winRef.nativeWindow.callParent = function (algo) {
      idpWindow.close();
      console.log("token opaco: " + algo);
    }


  }
}
