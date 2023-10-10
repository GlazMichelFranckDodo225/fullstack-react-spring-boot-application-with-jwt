// The Main Component
import './App.css';
import logo from '../logo.svg';
import Header from './Header';

import React from 'react'

export default function App() {
  return (
    <div>
        <Header pageTitle="Frontend Authenticated with JWT" logoSrc={logo}/>
    </div>
  )
}

