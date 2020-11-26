import React from 'react';
import './index.scss'

interface ILoaderProps {
    children: any
    isLoading: boolean
    errorMessage: string | undefined
}

const Loader = (props: ILoaderProps) => {
    if(!props.isLoading && props.errorMessage === undefined)
        return props.children;
    if(!props.isLoading && props.errorMessage !== undefined)
    return (<>
        {props.errorMessage}
    </>)
    return (<>
        <div className="loadingio-spinner-ellipsis-0yial3r2g3t">
            <div className="ldio-riyhi3durel">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </>)
}

export default Loader;
