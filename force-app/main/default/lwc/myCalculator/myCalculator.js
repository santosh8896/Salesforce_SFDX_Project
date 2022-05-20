import { LightningElement, track } from 'lwc';
//import heySfLogo from '@salesforce/resourceUrl/heySfLogo';
export default class MyCalculator extends LightningElement {
@track outputNumber;
@track allOutputResult = [];
@track showOldResult = false;
input1;
input2;
//@track SfLogo;
//SfLogo = heySfLogo ;
inputChange(event)
{

if(event.target.name === 'input1')
{
// eslint-disable-next-line radix
this.input1 = parseInt(event.target.value );
}
else if(event.target.name === 'input2')
{
// eslint-disable-next-line radix
this.input2 = parseInt(event.target.value) ;
}
}
calculate(event)
{
if(event.target.name === 'add')
{
this.outputNumber = `${this.input1} + ${this.input2} = ${(this.input1 + this.input2)}` ;
this.allOutputResult.push(this.outputNumber);
}
if(event.target.name === 'subtract')
{
this.outputNumber = `${this.input1} - ${this.input2} = ${(this.input1 - this.input2)}` ;
this.allOutputResult.push(this.outputNumber);
}
if(event.target.name === 'multiply')
{
this.outputNumber = `${this.input1} x ${this.input2} = ${(this.input1 * this.input2)}` ;
this.allOutputResult.push(this.outputNumber);
}
if(event.target.name === 'divide')
{
this.outputNumber = `${this.input1} / ${this.input2} = ${(this.input1 / this.input2)}` ;
this.allOutputResult.push(this.outputNumber);
}
if(event.target.name === 'checkbox1')
{
    if(this.showOldResult === false)
    {
        this.showOldResult = true;
    }
    else if(this.showOldResult === true)
    {
        this.showOldResult = false;
    }
   
        
}
}
}