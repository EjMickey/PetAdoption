import { LightningElement, api} from 'lwc';
import adoptPet from '@salesforce/apex/AdoptionHandler.adoptPet';
s
export default class PetAdoptionFormCmp extends LightningElement {
    @api recordId;
    
    adoptPet(){
        const inputs = this.template.querySelectorAll('lightning-input[data-field]');
        isValid = true;
        let contactData = {};

        inputs.forEach(input => {
            if(!input.checkValidity()){
                input.reportValidity();
                isValid = false;
            }
            contactData[input.dataset.field] = input.value;
        });

        if(!isValid){
            return;
        }

        adoptPet(contactData, this.recordId);
    }
}