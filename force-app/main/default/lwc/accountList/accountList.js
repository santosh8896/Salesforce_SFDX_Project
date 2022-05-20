import{ LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountApex.getAccountList';
export default class AccountList extends LightningElement {
@wire(getAccountList) accounts;
}