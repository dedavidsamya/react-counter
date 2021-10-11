import React, { Component } from 'react';

class  Counter extends React.Component {
    state = {
        count: 0,
    };

    render() {

        return (
            <div>
              <span className={this.getBtnClasses()}>{this.formatCount()}</span>
              <button className="btn btn-secondary btn-sm">Increment</button>
             </div>
        );
    }

    getBtnClasses() {
        let classes = "button m-2 btn-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;