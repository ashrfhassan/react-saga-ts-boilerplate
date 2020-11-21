export function logClass(target: Function) {
    const original = target;
    function construct(constructor: any, args: any) {
        const c: any = function () {
           return constructor.apply(this, args);
        };
        c.prototype = constructor.prototype;
        return new c();
    }

    const f: any = function (...args: any) {
        console.log(`New: object is created`);
        return construct(original, args);
    };

    f.prototype = original.prototype;

    return f;
}