import { LightningElement } from 'lwc';
export default class Hello extends LightningElement {
  greeting = 'World';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}