import React, {useState} from 'react';
import Accordion from './Components/Accordion';
import List from './Components/List';
import DropDown from './Components/Dropdown';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'why use React?',
        content: 'React is a favorite JS library amoung engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components.'
    }
];

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'A shade of blue',
        value: 'blue'
    }
];
export default () =>{
    const [selected,setSelected] = useState(options[0]);
    return <div className="ui container">
        {/* <Accordion items={items}></Accordion> */}
        {/* <List></List> */}
        <DropDown options= {options} selected={selected} onSelectChange={setSelected}></DropDown>
    </div>;
};