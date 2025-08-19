import { LightningElement } from 'lwc';
import getAllPets from '@salesforce/apex/AdoptionHandler.getAllPets';
import getAdoptedPets from '@salesforce/apex/AdoptionHandler.getAdoptedPets';
import getNotAdoptedPets from '@salesforce/apex/AdoptionHandler.getNotAdoptedPets';

export default class PetAdoptionSupportCmp extends LightningElement {
    result;
    error;

    queryPets(event) {
        const query_type = event.target.dataset.querytype;
        let promise;

        switch (query_type) {
            case 'all':
                promise = getAllPets();
            case 'adopted':
                promise = getAdoptedPets();
            case 'notadopted':
                promise = getNotAdoptedPets();
        }
        
        promise
            .then((result) => {
                this.result = result;
                this.error = null;
                console.log(result);
            })
            .catch((error) => {
                this.result = null;
                this.error = error;
                console.error(error);
            });
    }
}