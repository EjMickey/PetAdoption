import { LightningElement, api} from 'lwc';

export default class PetCardCmp extends LightningElement {
    @api animal

    adoptAnimal(){
        this.dispatchEvent(new CustomEvent('adoptanimal', {detail: this.animal.Id}))
    }

    get ownerName(){
        return this.animal.Owner__r.Name || 'Error with parsing owner';
    }
}