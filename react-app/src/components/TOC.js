import React, {Component} from "react";
class TOC extends Component{
  // render가 실행될지 아닐지를 결정하는 것은 성능에 영향을 끼친다
  // updating의 라이프 사이클 shouldComponentUpdate 후에
  // componentWillUpdate -> render
    shouldComponentUpdate(newProps, newState){
      if(this.props.data === newProps.data){
        return false;
      }
      return true;
    }
    render(){
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while( i< data.length){
        lists.push(
        <li key={data[i].id}>
          <a
           href={"/content/"+data[i].id}
           data-id = {data[i].id}
           onClick = {function(id,e){
             e.preventDefault();
             this.props.onChangePage(e.target.dataset.id);
           }.bind(this,data[i].id)}>
            {/* bind함수는 두번째 인자값을  */}
            {/* 함수의 첫번째 매개변수 값으로 넣어준다 TOC.js에서 */}

        
          {data[i].title}</a>
        </li>)
        i += 1;
      }
      return(
        <nav>
          <ul>
            {lists}
          </ul>    
        </nav>
      );
    }
}

export default TOC;