import { LightningElement,track} from 'lwc';

export default class LwcCustomModal extends LightningElement {
    @track customFormModal = false; 
    
    customShowModalPopup() {            
        this.customFormModal = true;
    }
 
    customHideModalPopup() {    
        
        this.customFormModal = false;
    }
   
}