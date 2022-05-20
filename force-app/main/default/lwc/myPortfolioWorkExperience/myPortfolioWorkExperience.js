import { LightningElement, api } from 'lwc';
import coderSkillImage from '@salesforce/resourceUrl/skillCoder';

export default class MyPortfolioWorkExperience extends LightningElement {
    @api themeClass;
    codeImageUrl = coderSkillImage;
}