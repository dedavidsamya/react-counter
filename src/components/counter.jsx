import React, { Component } from 'react';

class  Counter extends Component {
    state = {
        value: this.props.value
    };

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
              className="btn btn-secondary btn-sm m-2">
              Increment
              </button>
            {/* Here I am adding a button that triggers a Delete method on click. 
            The component that owns a piece of the state should be the one modifying it. In this particular case,
            the piece of the state that I want to delete is owned by the counters component, so Counters should be the component
            modifying the value (deleting it). To solve this problem and allow the state to be modified through the Counter component, it has to
            raise an event. onDelete (convention for naming events). So the Counter component raises the event, but the Counters component handles it 
            (therefore the method is implemented there, but passed to the Counter component via props). */}
              <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m2">Delete</button>
            </div>
        );
    }

    // For conditional rendering I have to defne methods with the if/else logic outside the render method and call them inside, when
    //rendering. So here I define the methods which will modify the style of the buttons displayed for each circumstance (change in value)
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