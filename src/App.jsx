import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import List from './components/List';

function App() {
  const [todo, setTodo] = useState([
    {id: 0, title:'제목 ', body:'내용', isDone : false},
    {id: 1, title:'리액트 ', body:'공부를 하자', isDone : true}
  ]);

  //던투두
  const [doneTodo, setDoneTodo] = useState([]);
  //제목
  const [title, setTitle] = useState('');
  //내용
  const [body, setBody] = useState('');
  //값초기화
  const [inputs, setInputs] = useState({
    title:'',
    body:'',
    isDone:false
  });

  //값바꼈을때
  const onCheckHandler = (event) => {
    const { name, value } = event.target; //event.target에서 name과 value 추출 
		console.log("name", name); // name은 input 태그의 name을 가져옴 
    console.log("value", value); // value는 input 태그에서 입력되고 있는 value 값을 가져옴
		console.log("name:" , name , " [name]:" , [name], " value:", value); //name: title  [name]: ['title']  value: "내가 입력하고 있는 값" 

    setInputs({
      ...inputs, // 기존 inputs 객체 복사 -> 새로운 객체 생성 
      [name]: value // name 키를 가진 값을 value로 변경 
    });
  };
 
  //추가하기 버튼
  const onSubmitHandler = () => {
    const newTodo = {
      id: todo.length + 1,
      title: title,
      body: body,
      isDone: false,
    };
   
    setTodo([...todo, newTodo]);
    setTitle('');
    setBody('');
  };

  //working에서삭제하기 버튼
  const removeButtonHandler = (id) => {
    const removeTodo = todo.filter((todo) => todo.id != id)
    setTodo(removeTodo);
  }

  //working에서완료기능, 여기서 true로 값 바꿔야함
  const onChangeHandler = (todoId) => {
    
    const newTodo = todo.map(todo => {
      if(todo.id === todoId){
        return {...todo, isDone: !todo.isDone} 
      } else{
        return {...todo}
      }})
      setTodo(newTodo);    
      }
  
  return (
    <div>
    {/* 상단 div */}
    <div>
    제목 <input value = {title}
    onChange={function(event){setTitle(event.target.value)}}/>
    내용 <input value = {body}
    onChange={function(event){setBody(event.target.value)}}/>
    <Button onSubmitHandler = {onSubmitHandler}/>
    </div>

    {/* Working div */}
   <h3> Working..🔥</h3>
    <div className='app-style'>
     {todo.map( (item) =>  { 
      if(!item.isDone){

      return ( <List
        key={item.id}
        item = {item} 
        removeButtonHandler = {removeButtonHandler}
        //working에서완료버튼
        onChangeHandler = {onChangeHandler}/>
      );
    }  
   })
  }
    </div>
    
   <h3> Done..!🔥</h3>
   <div className='app-style'>
    {todo.map((item) => {
      if(item.isDone){

        return ( <List  
          key={item.id}
          item = {item} 
          removeButtonHandler={removeButtonHandler}
          onChangeHandler = {onChangeHandler}/>       
        )
      }

    })}
   </div>
</div>
  );
  }
export default App;