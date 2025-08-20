public with sharing class AdoptionHandler {
    @AuraEnabled (cacheable=true)
    public static List<Pet__c> getAllPets(){
        return [SELECT Type__c, Birthday__c, Color__c, Description__c, For_Adoption__c, Owner__c FROM Pet__c LIMIT 200];
    }
    
    @AuraEnabled (cacheable=true)
    public static List<Pet__c> getAdoptedPets(){
        return [SELECT Type__c, Birthday__c, Color__c, Description__c, For_Adoption__c, Owner__c  FROM Pet__c WHERE For_Adoption__c = false AND Owner__c != NULL LIMIT 200];
    }
    
    @AuraEnabled (cacheable=true)
    public static List<Pet__c> getNotAdoptedPets(){
        return [SELECT Type__c, Birthday__c, Color__c, Description__c, For_Adoption__c, Owner__c  FROM Pet__c WHERE For_Adoption__c = true LIMIT 200];
    }
    
    @AuraEnabled(cacheable=true)
    public static void adoptPet(Map<String, Object> contactInfo, Id petId){
        Contact c = new Contact();
        c.FirstName = (String)contactInfo.get('FirstName');
        c.LastName = (String)contactInfo.get('LastName');
        c.Phone = (String)contactInfo.get('Phone');
        c.Email = (String)contactInfo.get('Email');
        c.MailingStreet = (String)contactInfo.get('MailingStreet');
        c.MailingPostalCode = (String)contactInfo.get('MailingPostalCode');
        c.MailingCity = (String)contactInfo.get('MailingCity');
        insert c;
        
        Pet__c p = [SELECT Owner__c, For_Adoption__c FROM Pet__c WHERE Id =:petId LIMIT 1];
        p.Owner__c = c.Id;
        p.For_Adoption__c = false;
        update p;
    }
}