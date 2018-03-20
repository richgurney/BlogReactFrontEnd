import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {

  render() {
    let letterStyle = {
      padding: 10,
      height: 90,
      width: '100%',
      backgroundColor: "#bfc0c0a1",
      position: 'fixed',
      top: 0,
      color: 'white',
      fontSize: 32,
      fontWeight: 100,
      textTransform: 'uppercase',
      borderBottom: '#4f5d75 3px solid',
    }

    let logoBase = {
      fontSize: '20px',
      fontWeight: 800,
      textTransform: 'uppercase',
      position: 'absolute',
      top: '45px',
    }

    let gurneyLogo = {
      color: '#2D3142',
    }

    return (
      <nav style={ letterStyle }>
        <div style={ gurneyLogo }>
          Gurney
        </div>
        <div style={logoBase}>
          Tech Blog
        </div>
      </nav>
    );
  }
}
