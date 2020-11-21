export const isAuth = (store: any) => (next: any) => {
    return (action: any) => {

        return next(action);
    }
};



