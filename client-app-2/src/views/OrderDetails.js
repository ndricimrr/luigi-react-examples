import React, { Component } from 'react';
import {
  addInitListener,
  removeInitListener
} from '@luigi-project/client';

export default class OrderDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.initListener = null;
    this.contextUpdateListener = null;
  }

  componentDidMount() {
    this.initListener = addInitListener(initialContext => {
      this.setState({
        message: 'Luigi Client initialized.' 
      });
    });
  }

  componentWillUnmount() {
    removeInitListener(this.initListener);
  }

  render() {
    return (
      <div>
        <h1>Order Details</h1>
          <div >{this.state.message}</div>
          <div>
            Order ID = {this.props.match.params.orderId}
        </div>
      </div>
    );
  }
}
