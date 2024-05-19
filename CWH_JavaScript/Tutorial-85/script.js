class Password{
    
    constructor(){
        this.pass = ""
        console.log("Wellcome to Password Generator")
    }
    verystrongpass(len){
        let chars = "abcdefghijklmnopqrstuvwxyz"
        let numbers = "1234567890"
        let spacial = "!@#$%&*"
        if(len<3){
            console.log("Your Password must be atleast 3 Characters")
        }
        else{
            let i = 0;
            while(i<len){
                this.pass += chars[Math.floor(Math.random()*chars.length)]
                this.pass += numbers[Math.floor(Math.random()*numbers.length)]
                this.pass += spacial[Math.floor(Math.random()*spacial.length)]
                i+=3;
            }
            this.pass = this.pass.substring(0,len)
            return this.pass
        }
    }
    strongpass(){

    }
    weakpass(){

    }
    funnypass(){

    }
}

let p = new Password()
console.log(p.verystrongpass(7))
