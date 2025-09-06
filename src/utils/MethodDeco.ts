// standalone Method decortor

export function Logger(target:Object,propkey:PropertyKey,descriptor:PropertyDescriptor):PropertyDescriptor{

    // console.log('target =>'+target.constructor)
    // console.log('key =>',propkey.toString())
    // console.log('descriptor =>'+descriptor.value)

    let originalDef = descriptor.value;

     descriptor.value = function(...args:any[]){

        console.log('you are not allowed to call this function')
    
    
            return originalDef.apply(this,args);
    }
         return descriptor
}

//Method decorator factory

export default function validate(message:string){

    return function(target:Object,propkey:PropertyKey,descriptor:PropertyDescriptor){

                // console.log('involing function directly =====>',descriptor.value())

        let orginalMethod = descriptor.value;
        
    descriptor.value = function(...args:any[]){

        // console.log('capturing arguments',args[0])
        args[0] = args[0].toUpperCase();
        if(message === "length"){
             let result = orginalMethod.apply(this, args);
             if(result.length < 5){
               // throw Error("Invalid Length for message")
                    return `Altered: by ${args[0]}-${result}`; 
             }
             return result; 
        }
        return descriptor; 
    }
}
}
