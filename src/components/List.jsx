import React from 'react';
import '../App.jsx';


const List = ({item, removeButtonHandler, onChangeHandler}) => {
    return (
    <div key = {item.id} className='component-style'>
    {item.title}<br/>{item.body}
    <button className='inner-style' onClick={() => removeButtonHandler(item.id)}>삭제하기</button>
    <button className='inner-style' onClick={() => onChangeHandler(item.id)}>
      {item.isDone ? '취소' : '완료'}</button>
  </div>);
  };

  export default List;