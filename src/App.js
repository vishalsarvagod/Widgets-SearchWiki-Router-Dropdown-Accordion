import React from 'react';
import Accordion from './Components/Accordion';
import List from './Components/List';


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

export default () =>{
    return <div className="ui container">
        {/* <Accordion items={items}></Accordion> */}
        <List></List>
    </div>;
};