/* For class variables no need to use let, const, var keywords. 
We can directly use the variable name in the class body. 
# is used to make the variable private and public variables are 
declared without #.
*/
class Credentials{
    #apiKey; // private variable
    
    constructor(user,key){
        this.user = user; // public variable
        this.#apiKey = key;
    }
    getAPI(){
        return this.#apiKey;
    }
}

let cred = new Credentials("admin", "#scret_key_1234");
console.log(cred.user);
console.log(cred.getAPI());