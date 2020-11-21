export function logProperty(target: Object | any, propertyName: string) {

    let _val = target[propertyName];

    const getter = () => {
        console.log(`Get: ${propertyName} => ${_val}`);
        return _val;
    };

    const setter = (newVal: any) => {
        console.log(`Set: ${propertyName} => ${newVal}`);
        _val = newVal;
    };

    if (delete target[propertyName]) {

        Object.defineProperty(target, propertyName, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}