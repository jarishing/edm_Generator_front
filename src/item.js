import React from 'react';

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <div style={{display:'flex', marginBottom: '20px'}}>
        {console.log(this.props)}
        <div>title: <input/></div>
        <div style={{paddingLeft: '10px'}}>content: <input style={{width: '300px'}}/></div>
      </div>
    );
  }
}
export default Items;