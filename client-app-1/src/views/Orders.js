import React from 'react';
import {
  addInitListener,
  removeInitListener,
  linkManager
} from '@luigi-project/client';

export default class Orders extends React.Component {
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
        <h1>List Of Orders</h1>
            {["1","2","3"].map((order) => 
              <React.Fragment key={order}>
                  <button onClick={()=>linkManager().fromContext('root').navigate(order)}>Go To Order NO:{order}</button>
                  <br/>
              </React.Fragment>
            )}
      </div>
    );
  }
}
