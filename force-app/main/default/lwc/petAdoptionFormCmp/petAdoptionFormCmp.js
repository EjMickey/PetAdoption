import { LightningElement, api} from 'lwc';
import adoptPet from '@salesforce/apex/AdoptionHandler.adoptPet';
export default class PetAdoptionFormCmp extends LightningElement {
    @api recordId;
    
    adoptPet(){
        const inputs = this.template.querySelectorAll('lightning-input[data-field]');
        let isValid = true;
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
            console.log('error with validation occured:'+input);
        }

        console.log('Contact is being inserted');
        console.log(this.recordId);
        adoptPet({contactInfo: contactData, petId: this.recordId})
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
    }
}