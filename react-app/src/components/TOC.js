import React, {Component} from "react";
class TOC extends Component{
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