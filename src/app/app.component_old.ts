import { Component } from '@angular/core';
import axios, {Axios, AxiosResponse} from "axios";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Hello, this is our first app in Angular. Be Welcome</h1>
      <div>
        <h3>{{retourHello}}</h3>
        <button (click)='hello()'>Appel hello</button>
      </div>
      
      <br/>

      <div>
        <h3>{{retourCalcul}}</h3>
        <form #form="ngForm" (ngSubmit)="somme(form)">
          <input name="but1" ngModel id="but1" /> 
          <br/><input ngModel name="but2" id="but2" />
<br/>
          <button >Appel hello</button>
        </form>
        
        
      </div>
    </div>
  `
})
export class AppComponent {
  /*urlApi = 'http://127.0.0.1:8080/calcul';
  retourHello = "";
  retourCalcul = "";
  input1 = "";
  input2 = "";

  hello() {
    axios.get(this.urlApi).then((response: AxiosResponse<string>) => {
      this.retourHello = response.data;
    },
      (error : AxiosResponse<string>) => {
        this.retourHello = error.data;
      });
  }

  somme(form: NgForm) {
    console.log(form.value)
    axios.post(this.urlApi+"/divide/"+form.value.but1+"/"+form.value.but2).then((response: AxiosResponse<string>) => {
      this.retourCalcul = response.data;
    },
      (error : AxiosResponse<string>) => {
        this.retourCalcul = error.data;
      });

  }*/


}
