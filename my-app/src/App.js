import logo from './logo.svg';
import './App.css';
import Myheader from './components/Myheader';
import Nav from './components/Nav';
import Article from './components/Article';
import React, { Component } from 'react'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'read',
      subject:{
        title :{title : 'React',desc:'Single page Application'},
        welcome:{title:'Welcome',desc:'CSS for design'},
      },
      menus:[
        {id:1, title:'HTML', desc:'Hypertext Markup Language'},
        {id:2, title:'CSS', desc:'CSS for design'},
        {id:3, title:'Javascript', desc:'Javascript for interaction'}
      ]
    };
  }
  render() {
    console.log('APP 실행');
    let_title, desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.weclome.title;
      _desc = this.state.weclome.desc;
    }else if(this.state.mode === 'welcome' === 'read'){
      _title = this.state.menus.title;
      _desc = this.state.menus.desc;
    }
    return (
      <div className="App">
        {/* <Myheader title={this.state.subject.title} desc={this.state.subject.desc}></Myheader> */}
        <header>
          <h1 className="logo" onClick={function(){
            this.setState({
              mode:'welcome'
            })
          }}>{this.state.subject.title}</h1>
          <p>{this.state.subject.desc}</p>
        </header>  
        <Nav data={this.state.menus}></Nav>
        <Article title={_title} desc={_desc}></Article>
      </div>
    )
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>안녕</h1>
      </header>
    </div>
  );
}
*/
export default App;
