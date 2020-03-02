
export class Person
{
    
    private _displayName : string;
    public get displayName() : string {
        return this._displayName;
    }
    public set displayName(v : string) {
        this._displayName = v;
    }
    
    
    private _accountId : string;
    public get accountId() : string {
        return this._accountId;
    }
    public set accountId(v : string) {
        this._accountId = v;
    }

    
    private _accountType : string;
    public get accountType() : string {
        return this._accountType;
    }
    public set accountType(v : string) {
        this._accountType = v;
    }
    
    
    private _email : string;
    public get email() : string {
        return this._email;
    }
    public set email(v : string) {
        this._email = v;
    }
    
    
    constructor()
    {
        this._displayName="";
        this._accountId="";
        this._accountType="";
        this._email="";
    }
}