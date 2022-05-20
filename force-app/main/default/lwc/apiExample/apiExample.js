import { api, LightningElement, track, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountApex.getAccountList';

import {NavigationMixin} from 'lightning/navigation';

export default class ApiExample extends NavigationMixin (LightningElement) {
  @api title;
  @api greetings;
  @track greeting;
   

    @track accData;
    @track errorAccData;     

    @track columnTable =[
        {label:'Name',fieldName:'Name',type:'text'},
        {label:'Phone',fieldName:'Phone',type:'text'},
        {label:'Industry',fieldName:'Industry',type:'text'},
    ];

    @wire(getAccountList)
    
    dataTableAcc({data, error}){
         if(data){
           this.accData = data;
        }
        else if(error){
          this.errorAccData = error;  
        }

    }

}