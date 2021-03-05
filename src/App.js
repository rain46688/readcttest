import './App.css';
import { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode:'m1',
      menus:[
        {id:1, title:'메뉴1',con:'실험용 사이트 본문1'},
        {id:2, title:'메뉴2',con:'실험용 사이트 본문2'},
        {id:3, title:'메뉴3',con:'실험용 사이트 본문3'},
        {id:4, title:'메뉴4',con:'실험용 사이트 본문4'}
      ]
    }
  }
  //랜더가 실행되기 전에 먼저 실행되는 constructor
  //props나 state가 바뀌면 해당되는 component의 render함수가 실행되서
  //다시 화면이 그려지게된다.
  //zzz
  render(){ 
    let _con = null;
    if(this.state.mode == 'm1'){
      _con = this.state.menus[0].con; 
    }else  if(this.state.mode == 'm2'){
      _con = this.state.menus[1].con; 
    }else  if(this.state.mode == 'm3'){
      _con = this.state.menus[2].con; 
    }else  if(this.state.mode == 'm4'){
      _con = this.state.menus[3].con; 
    }
//=========================================
    function menuClick(e) {
      //console.log(e.target.innerText);
      //alert(e.target.innerText);
      e.preventDefault();
      let menu = null;
      if(e.target.innerText == '메뉴1'){
        menu = 'm1'
      }else if(e.target.innerText == '메뉴2'){
        menu = 'm2'
      }else if(e.target.innerText == '메뉴3'){
        menu = 'm3'
      }else if(e.target.innerText == '메뉴4'){
        menu = 'm4'
      }
      this.setState({
        mode: menu
      });
    }
    let lists = [];
    //let data = this.props.data;
    let data = this.state.menus;
    let i = 0;
    while(i < data.length){
    lists.push(<li key={data[i].id}><a href="#" onClick={menuClick.bind(this)}>{data[i].title}</a></li>);
      i = i + 1;
    }
//=========================================
    return (
      <div className="App">
        {/* <Header data={this.state.menus}></Header> */}

        <header> 
          <div id="title"><h1>리액트 실험 사이트</h1></div>
          <div id="menu1">
          <ul>
              {lists}
              {/* App.js에서 메뉴 숫자를 변경하면 바로 메뉴의 숫자가 변경됨 */}
          </ul>
        </div>
        </header>

        <Content con={_con}></Content>
        //다른 파일에서 html을 가져와서 뿌려줌
    </div>
    );
  }
}

export default App;
 