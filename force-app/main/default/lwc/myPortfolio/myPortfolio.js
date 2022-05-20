import { LightningElement, track } from 'lwc';
export default class MyPortfolioNavBar extends LightningElement {
  @track defaultThemeLight = true;
   @track showHomePage = true;
   @track showSkillsPage = false;
   @track showContactMePage = false;
   @track showWorkExperience = false;
  
get themeClass(){
     let darkTheme = 'dark slds-p-left_xx-large slds-grid slds-align_absolute-center';
     let lightTheme = 'light slds-p-left_xx-large slds-grid slds-align_absolute-center';
     if(this.defaultThemeLight){
         return lightTheme;
     }else{
         return darkTheme;
     }
     
 }

 changeTheme(){
     console.log('clicked');
     if(this.defaultThemeLight){
         this.defaultThemeLight = false;
     }else{
         this.defaultThemeLight = true;
     }
 }

 handleHomeClick(){
       console.log('handleHomeClick');
     this.showSkillsPage = false;
     this.showContactMePage = false;
     this.showWorkExperience = false;
     this.showHomePage = true;
      console.log('this.showHomePage'+this.showHomePage);
     console.log('this.showSkillsPage'+this.showSkillsPage);
 }

 handleSkillsClick(){
     console.log('handleSkillsClick');
     this.showHomePage = false;
     this.showContactMePage = false;
     this.showWorkExperience = false;
     this.showSkillsPage = true;
     console.log('this.showHomePage'+this.showHomePage);
     console.log('this.showSkillsPage'+this.showSkillsPage);
 }

 handleWorkExperienceClick(){
    console.log('handleWorkExperienceClick');
    this.showHomePage = false;
    this.showContactMePage = false;
    this.showWorkExperience = true;
    this.showSkillsPage = false;
    console.log('this.showHomePage'+this.showHomePage);
    console.log('this.showWorkExperience'+this.showWorkExperience);
}

 handleContactMeClick(){
       this.showHomePage = false;
     this.showSkillsPage = false;
     this.showWorkExperience = false;
     this.showContactMePage = true;
 }

 


}