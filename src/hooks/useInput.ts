import { useState } from 'react';

const useInput = (initialValue: any) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return {
        value,
        setValue,
        onChange: handleChange,
    };
};

export default useInput;
