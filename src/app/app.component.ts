import { Component } from '@angular/core';
import {store} from '@cirrusit/flux';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'showProject';
  name = '';
  constructor(){
    this.name = '';
    store.addListener(this.notifyChanged.bind(this));

  }
  notifyChanged() {
    this.name = store.getSelectedItem();
    console.log('El nombre recibido desde otro componente es:', this.name);
  }
}
