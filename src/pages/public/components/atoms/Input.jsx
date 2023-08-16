import React from "react";


export const Input = ({ containerClass, inputClass, children, ...rest }) => {
    return (
        <div className={containerClass}>
            <input className={inputClass} {...rest} />
            {children}
        </div>
    );
};
