export function logarTempoExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (args) {
            const timeStamp1 = performance.now();
            const methodReturn = originalMethod.apply(this, args);
            const timeStamp2 = performance.now();
            emSegundos
                ? console.log(`A função ${propertyKey}, demorou ${(timeStamp2 - timeStamp1) / 1000} segundos.`)
                : console.log(`A função ${propertyKey}, demorou ${timeStamp2 - timeStamp1} milisegundos.`);
            return methodReturn;
        };
        return descriptor;
    };
}
