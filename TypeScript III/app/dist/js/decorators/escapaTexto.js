export function escapaTexto(target, propertyKey, descriptor) {
    const originalFunc = descriptor.value;
    descriptor.value = function (...args) {
        let methodReturn = originalFunc.apply(this, args);
        if (typeof methodReturn === 'string') {
            methodReturn = methodReturn.replace(/<script>.*?<\/script>/gi, "");
        }
        return methodReturn;
    };
    return descriptor;
}
