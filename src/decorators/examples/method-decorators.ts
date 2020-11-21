export function logMethod(
    target: Object,
    propertyName: string,
    propertyDesciptor: PropertyDescriptor): PropertyDescriptor {
    const method = propertyDesciptor.value;

    propertyDesciptor.value = function (...args: any[]) {

        const result = method.apply(this, args);

        const r = JSON.stringify(result);

        console.log(r);
        
        return result;
    }
    return propertyDesciptor;
};