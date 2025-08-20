import { LightningElement, api} from 'lwc';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import STREET_FIELD from '@salesforce/schema/Contact.MailingStreet';
import POSTALCODE_FIELD from '@salesforce/schema/Contact.MailingPostalCode';
import CITY_FIELD from '@salesforce/schema/Contact.MailingCity';

export default class PetAdoptionFormCmp extends LightningElement {
    @api recordId;
}