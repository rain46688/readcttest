import { Component } from 'react';
//리액트 사용 기본 코드

class Content extends Component{
    render(){ 
      return (
       <div id="contents">
         {this.props.con}
       </div>
        );
    }
  }

  export default Content;
  //기본적으로 사용할 컴포넌트