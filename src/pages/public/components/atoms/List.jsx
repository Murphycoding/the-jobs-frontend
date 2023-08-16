import React from "react";

export const List = ({ className, children, ...rest }) => {
    return (
        <>
            <li className={className} {...rest}>{children}</li>
        </>
    );
};
