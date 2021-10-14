import React, { Component } from 'react';

class  Counter extends Component {
    state = {
        value: this.props.value
    };
    
    // CONDITIONAL RENDERING: 
    // renderTags() {
        //I want to display one of the properties of my
        //counter which is an array, and if the array is empty I display a message.
        // As I can't use if/else in jsx, I have to create a method outside of the render and put my if/else logic here.
        // and as I cannot use loops in .jsx, I'll display it
        // through mapping each element of the array to a <li>.
        // All elements of my array will be printed in separate lines as a list.
        // I am adding a key to my <li> elements because React requires each element 
        // of a list to be unique, so by giving the dynamic {tag} as a key, each <li>
        // element has as a key the one element which it is being mapped to it.
        // If the tags had ids, I could use {tag.id} to be more specific.
        // if (this.state.tags.length === 0) return <p>'There are no tags.'</p>
        
        // return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>
    // }

    // I am using an arrow function here because I want the handleincrement function
    // to inherit this and reference the current object as this.
    //this function is incrementing the count property each time I click
    // the button (see button in the render method)
    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 })
    };

    
 //props is a javascript object that contains all the properties
 //of a given object. In this case if I say this.props, I want to retrieve all the properties of the current object
    render() {
        console.log(this.props);
        //Here is what I want my render method to return. As I can only return 
        //one element, I wrap everything into a div. 
        return (
            <div>
                {/* Inside the object props I can access children, which is the data I pass to a component inside its
                closing tags. For example in my Counters element I inserted a "Counter number" as data inside the closing tags.
                this data is accessible here in the children property */}
              {this.props.children}
              <span className={this.getBtnClasses()}>{this.formatCount()}</span>
              {/* Here I want the click on the button to trigger an event, incrementing the value of the counter
              so I call the function handleIncrement which does exactly the incrementation of the 'value' property of 
              my counter */}
              <button 
              onClick={this.handleIncrement} 
              className="btn btn-secondary btn-sm">
              Increment
              </button>
            </div>
        );
    }

    getBtnClasses() {
        let classes = "btn m-2 btn-sm btn-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;