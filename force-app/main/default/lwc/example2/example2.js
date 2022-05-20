import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class Example2 extends LightningElement {
   
    regContactForm = {};  
    
    regInpFormAction() {
        var isValidVal = true;
        var inputFields = this.template.querySelectorAll('.reqInpFld');
        inputFields.forEach(inputField => {
            if(!inputField.checkValidity()) {
                inputField.reportValidity();
                isValidVal = false;
            }
            this.regContactForm[inputField.name] = inputField.value;
        });
        return isValidVal;
    }
    

    submitRegAction() {
        if(this.regInpFormAction()) {            
            console.log(this.regContactForm);
            var inputFields = this.template.querySelectorAll('.reqInpFld');
            inputFields.forEach(inputField => {               
                inputField.value="";
            });
            const toastEvent = new ShowToastEvent({
                title:'Success!',
                message:'Record created successfully',
                variant:'success'
              });
              this.dispatchEvent(toastEvent); 
        }
    }
}