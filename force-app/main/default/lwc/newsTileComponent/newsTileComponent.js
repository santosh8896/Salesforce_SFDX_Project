import { LightningElement,api } from 'lwc';

export default class NewsTileComponent extends LightningElement {

@api newsRec;


openSelectedArticle(event){
    event.preventDefault();
    const selectedArticle = this.newsRec.url;
    window.open(selectedArticle,"_blank");    
}

}