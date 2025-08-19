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
}