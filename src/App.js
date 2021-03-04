import './App.css';
import { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode:'m3',
      m1:{con:'실험용 사이트 본문1'},
      m2:{con:'실험용 사이트 본문2'},
      m3:{con:'실험용 사이트 본문3'},
      menus:[
        {id:1, title:'메뉴1'},
        {id:2, title:'메뉴2'},
        {id:3, title:'메뉴3'},
        {id:4, title:'메뉴4'}
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
      _con = this.state.m1.con; 
    }else  if(this.state.mode == 'm2'){
      _con = this.state.m2.con; 
    }else  if(this.state.mode == 'm3'){
      _con = this.state.m3.con; 
    }else  if(this.state.mode == 'm4'){
      _con = this.state.m4.con; 
    }

    return (
      <div className="App">
        <Header data={this.state.menus}></Header>
        <Content con={_con}></Content>

        //다른 파일에서 html을 가져와서 뿌려줌
    </div>
    );
  }
}

export default App;
 