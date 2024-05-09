export function inspecionarFuncao(){
    return function(
        target: any,
        key: string, 
        descriptor: PropertyDescriptor
    ){
        const originalMehthod = descriptor.value

        descriptor.value = function(...args: any[]){
            const methodReturn = originalMehthod.apply(this, args)

            console.log("Método " + key)
            console.log("Parâmetros " + JSON.stringify(args))
            console.log("Retorno " + JSON.stringify(methodReturn))

            return methodReturn
        }

        return descriptor
    }
}