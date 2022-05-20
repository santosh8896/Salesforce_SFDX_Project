import { api, LightningElement } from 'lwc';
import contactFirstName from '@salesforce/schema/Contact.FirstName';
import contactLastName from '@salesforce/schema/Contact.LastName';
import contactEmail from '@salesforce/schema/Contact.Email';
import contactPhone from '@salesforce/schema/Contact.Phone';
import contactAccount from '@salesforce/schema/Contact.AccountId';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class updateRecordLwc extends LightningElement {
    @api ContactObjectApiName='Contact';
    @api recordId;
    ContactFieldList = [contactFirstName,contactLastName,contactEmail,contactPhone,contactAccount];

    contactHandleUpdate(event){
        const evt = new ShowToastEvent({
            title:'Record Updated',
            message:'Contact record: ' + event.detail.fields.LastName.value + 'is successfully updated',
            variant:'success',
          })
          this.dispatchEvent(evt);
    }
}