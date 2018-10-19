import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const generateOptions = () => {
    let counter = 1;
    let options = [];
    while(counter <= 7) {
        options.push({text: ` ${counter} ${counter === 1 ? 'día' : 'días'}`, value: counter});
        counter++;
    }
    return options;
}

const DayPicker = ({selectedDays, onChange}) => {
    const options = generateOptions();
    return (
        <span>
            Valores desde &nbsp; 
            <Dropdown 
            inline 
            options={options} 
            defaultValue={selectedDays}
            onChange={onChange}
             />
        </span>
    );
}

export default DayPicker;