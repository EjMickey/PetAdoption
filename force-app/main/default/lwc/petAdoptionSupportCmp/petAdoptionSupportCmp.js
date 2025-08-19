import { LightningElement} from 'lwc';
import getAllPets from '@salesforce/apex/AdoptionHandler.getAllPets';
import getAdoptedPets from '@salesforce/apex/AdoptionHandler.getAdoptedPets';
import getNotAdoptedPets from '@salesforce/apex/AdoptionHandler.getNotAdoptedPets';

export default class PetAdoptionSupportCmp extends LightningElement {
    result;

    queryall() {
        getAllPets()
            .then((result) => {
                this.result = result;
                console.log(this.result.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    queryadopted() {
        getAdoptedPets()
            .then((result) => {
                this.result = result;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    querynotadopted() {
        getNotAdoptedPets()
            .then((result) => {
                this.result = result;
            })
            .catch((error) => {
                console.error(error);
            });
    }
}