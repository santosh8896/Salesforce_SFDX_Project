import { LightningElement } from 'lwc';
import getNews from '@salesforce/apex/getLatestNewsClass.fetchLatestNewsCallout';

export default class GetLatestNesLWC extends LightningElement {

newsList;
errorMsg;

connectedCallback(){

    getNews({})
    .then(result => {
    this.newsList = result.articles;
})
    .catch(error => {
        this.errorMsg = error;
    }); 
}

}