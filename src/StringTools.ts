export class StringTools
{
    static  format = (str: string, ...args: string[]) => str.replace(/{(\d+)}/g, (match, index) => args[index] || '');  
    
    public static isNullOrEmpty (str : string):boolean
    {
        return (!str || 0 === str.length);
    }
}

