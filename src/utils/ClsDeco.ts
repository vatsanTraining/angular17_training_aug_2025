export function LogClass(constructor:Function){

    console.log('initialized ===>',constructor.name)
}


export function LogFactory(message:string){

    return function(constructor:Function){

        console.log(message)
    }
}
//TODO
