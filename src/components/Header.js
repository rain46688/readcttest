import { Component } from 'react';
import App from '../App';

class Header extends Component{
    render(){ 
      function menuClick2(e) {
        console.log('menuClick2 실행');
        //e.preventDefault();
        this.props.onChangePage(e.target.innerText);
      } 

      let lists = [];
      let data = this.props.data;
      let i = 0;
      while(i < data.length){
      lists.push(<li key={data[i].id}><a href="#" onClick={menuClick2.bind(this)}>{data[i].title}</a></li>);
        i = i + 1;
      }
      //아래 메뉴들의 클릭 이벤트 처리를 랜더 밖에서함
      return (
        <header>
          <div id="title"><h1>리액트 실험 사이트</h1></div>
          <div id="menu1">
          <ul>
              {lists}
              {/* App.js에서 메뉴 숫자를 변경하면 바로 메뉴의 숫자가 변경됨 */}
          </ul>
        </div>
        </header>
      ); 
    }
  }
  
export default Header;
