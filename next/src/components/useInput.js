import React, { useState } from 'react'

export const useInput = () => {

    const [field, setField] = useState();

    const input = ({ field, initialState }) => {
        let created = document.createElement(field);
        setField(initialState);
        return created;
    }

    return {
        input,
    }
}
