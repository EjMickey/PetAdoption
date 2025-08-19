import { LightningElement, api} from 'lwc';

export default class PetCardCmp extends LightningElement {
    @api animal

    adoptAnimal(){
        this.dispatchEvent(new CustomEvent('adoptAnimal', {detail: this.animal.Id}))
    }
}