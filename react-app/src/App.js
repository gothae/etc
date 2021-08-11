import './App.css';
import React,{ Component } from 'react';
import TOC from "./components/TOC.js";
import Content from './components/Content.js';
import Subject from './components/Subject.js';
import Comment from './components/Comment';

const comment = {
  date : new Date(),
  text : "I hope you enjoy learning React!",
  author : {
      name : "Hello Kitty",
      avatarUrl : 'https://placekitten.com/g/64/64'
  }
};
class App extends Component{
  // 어떠한 component가 실행될 때 constructor가 가장 먼저 실행
  // 초기화를 담당한다.
  constructor(props){
    super(props);
    this.state = {
      mode : "read",
      selected_content_id : 3,
      welcome : {title:"Welcome", desc:"Hellod,React!!"},
      subject:{title : "WEB", sub : "world wide web!"},
      contents : [
        {id:1, title:'HTML', desc: 'HTML is for information'},
        {id:2, title:'CSS', desc: 'CSS is for Design...'},
        {id:3, title:'JavaScript', desc: 'JavaScript is for interactive'}
      ]
    }
  }
  // props / state 값이 바뀌면 해당되는 component의 render()호출
  render(){
    var _title, _desc = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === "read"){
      var i = 0;
      while(i< this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i += 1;
      }
    }
    return (
      <div className="App">
        <Subject 
          title = {this.state.subject.title} 
          sub = {this.state.subject.sub}
          onChangePage = {function(){
            this.setState({mode:"welcome"});
          }.bind(this)}
          >
        </Subject>
        <TOC onChangePage = {function(id){
          this.setState({
            mode:"read",
            selected_content_id : Number(id)});
        }.bind(this)}
         data={this.state.contents}>
        </TOC>
        <Content title={_title} desc={_desc}></Content>
        <Comment author = {comment.author}
        text = {comment.text}
        date = {comment.date}>  
        </Comment>
      </div>
    );
  }
}

export default App;
