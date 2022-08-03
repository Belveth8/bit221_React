import React from 'react';

class Hello extends React.Component  {


  render () {

    return <h1>Hello,  { this. props.nickname }</h1>
  }

}

ReactDom.render (

<Hello nickname= '우영우' />,
 document.getElementById('root')
);