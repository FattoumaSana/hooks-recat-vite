import React from "react";

const Input = (props) => {
    return <input {...props} className={`border p-2 rounded ${props.className}`} />;
};

export default Input;
