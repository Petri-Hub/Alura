export function escapaTexto(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
){
    const originalFunc = descriptor.value
    
    descriptor.value = function(...args: any[]){

        let methodReturn = originalFunc.apply(this, args)

        if(typeof methodReturn === 'string'){
            methodReturn = methodReturn.replace(/<script>.*?<\/script>/gi, "")
        }

        return methodReturn
    }

    return descriptor
}