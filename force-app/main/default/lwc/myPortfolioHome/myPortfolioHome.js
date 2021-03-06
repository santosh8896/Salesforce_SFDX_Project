import { LightningElement, track, api } from 'lwc';
import codeImage from '@salesforce/resourceUrl/code';
import FontAwesome from '@salesforce/resourceUrl/FontAwesome';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class MyPortfolioHome extends LightningElement {
@api themeClass;
 codeImageUrl= codeImage;

renderedCallback() {
        Promise.all([
            loadStyle(this, FontAwesome + '/font-awesome-master/font-awesome-master/css/font-awesome.css')
        ]).catch(error => {
             // eslint-disable-next-line no-console
             console.log(error);
             
        });
    }

 get myName(){
     return 'Santosh Sharma';
 }
 get myProfessionField(){
     return 'Salesforce';
 }
 get myProfession(){
     return 'Developer';
 }
 get myBio(){
     let bio = 'I specialize in developing and deploying responsive web applications';
     return bio;
 }

 
}