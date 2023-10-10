import * as React from 'react';

export default function Header(props) {
  return (
    <Header className="App-header">
        <img src={props.logoSrc} className='App-logo' alt="Logo" />
        <h1 className='App-title'>{props.pageTitle}</h1>
    </Header>
  )
}
