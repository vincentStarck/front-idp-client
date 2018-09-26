import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-validate-token',
  templateUrl: './validate-token.component.html',
  styleUrls: ['./validate-token.component.css']
})
export class ValidateTokenComponent {

  constructor(private route: ActivatedRoute) {
    //Extraer el toke opaco de query stringy como respuesta en la redirecccion de IDPS
    const tokenOpaco: string = this.route.snapshot.queryParamMap.get('ot');
    console.log(tokenOpaco);
    opener.callParent(tokenOpaco);
  }
}
