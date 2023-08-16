import React from "react";

export const Button = ({ className, children, ...rest }) => {
    return (
        <button {...rest} className={className}>{children}</button>
    );
};
