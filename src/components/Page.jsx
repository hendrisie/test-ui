/*
@startuml

!include ./NavBar.jsx

Page o-- NavBar

class Page << (C,red) Component>>{
  title: string
}

@enduml

 */
import * as React from 'react';
import './Page.css';
import NavBar from './NavBar';

class Page extends React.Component {
  render() {
    const { children, title } = this.props;
    return (
      <div className="Page">
        <NavBar title={title} />
        {children}
      </div>
    );
  }
}

export default Page;
