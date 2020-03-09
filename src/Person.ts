import { f } from "@marcj/marshal";

export class Person
{
    
    @f
    public displayName : string; 
        
    @f
    public accountId : string; 
    
    @f
    public accountType : string;
        
    @f
    public email : string;
    
    
    constructor()
    {
        this.displayName="";
        this.accountId="";
        this.accountType="";
        this.email="";
    }
}