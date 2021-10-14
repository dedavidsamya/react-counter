import React, { PureComponent } from 'react';
import Counter from './counter'

class  Counters extends React.Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    }
    
    render() { 
        return <div>
            {/* As I defined a counters component that aims to display many different counters, each one with
            independent state, I map one Counter component to each "counter value" of my Counters component
            So I select one key-value pair of my counters property and I map it to one independent Counter component defined in Counter.jsx*/}
            { this.state.counters.map(counter => 
            <Counter key={counter.id} value={counter.value}>
                {/* Here I want to pass data to my Counters component. This data will be accessible
                in the Children property of the object. I am giving the counter a number which is dinamically 
                rendered using the id of each counter */}
            <h4> Counter #{counter.id} </h4>    
            </Counter>) }
        </div>;
    }
}
 
export default Counters ;
