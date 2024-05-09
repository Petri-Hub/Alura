export function logarTempoExecucao(emSegundos: boolean = false){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        //Guardando o método original
        const originalMethod = descriptor.value
        
        //Sobreescrevendo o método
        descriptor.value = function(args: any[]){
            //A função sobnreescrita NÃO pode ser uma arrow function
            //A palavra chave this dentro da função é a classe/prototype
            //Tem que ser feito um .apply() no método original, .bind() ou arrow function não funcionam

            const timeStamp1 = performance.now()
            const methodReturn = originalMethod.apply(this, args)
            const timeStamp2 = performance.now()

            emSegundos
                ? console.log(`A função ${propertyKey}, demorou ${(timeStamp2 - timeStamp1)/1000} segundos.`)
                : console.log(`A função ${propertyKey}, demorou ${timeStamp2 - timeStamp1} milisegundos.`)
            
            return methodReturn
        }

        return descriptor
    }
}
