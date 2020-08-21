import React, { Component } from 'react';
import {connect} from 'react-redux'
import increaseAction from './actions/increaseAction'
import decreaseAction from './actions/decreaseAction'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'counter reducer',
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                {this.props.counter}
                <button onClick={this.props.onIncreaseClick}>increase</button>
                <button onClick={this.props.onDecreaseClick}>decrease</button>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        counter: state.count,
    };
};

let mapDispatchToProps = (dispatch) => {
  return{
    onIncreaseClick: ()=> dispatch(increaseAction()),
    onDecreaseClick: ()=> dispatch(decreaseAction())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
