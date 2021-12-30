export interface PasswordComparerProps{
    password : string ;
    setPassword(password: string):void;
    input : string;
    setInput(input:string):void
    userPassword : string;
    setUserPassword(userPassword:string):void
    match: boolean
    setMatch(match : boolean) : void
}