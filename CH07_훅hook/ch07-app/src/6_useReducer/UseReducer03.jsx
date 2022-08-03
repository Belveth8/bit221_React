// 학생 현재인원보기 / 추가 / 삭제하기
import React from 'react'
import { useReducer } from 'react';
import { useState } from 'react'
import Student from './Student'

const reducer = ( state , action ) => {
  switch (action.type){
    case 'add-student' :
      const name = action.payload.name;
      const newStudent = {
        id : Date.now(),
        name : name,
        isHere : false,
      };
      return {
        count : state.count +1,
        students : [...state.students, newStudent]
      };

      case 'delete' :
        const oldId = action.payload.id;

        return {
          count : state.count -1,
          students : state.students.filter(student=>
            student.id !== oldId
            )  // filter => 배열을 순환하여 조건값이 true면 유지, false면 버리고 새로운 배열을 반환
        }

        case 'check-student' :
          return {
            count : state.count,
            students : state.students.map(student =>{
              if(student.id === action.payload.id ) {
                return {...student, isHere:!student.isHere}
                } return student;
              }
            )
          }
      default :
          return state;
  }
}

// utc 검색해보기 ( 1990......... )
const intitialState = {
  count : 1,
  students : [
    {
      id : Date.now(),
      name : 'Tom',
      isHere : false,
    }
  ],
}

function UseReducer03() {

  const [ name, setName ] = useState('');
  const [ studentInfo, dispatch ] = useReducer(reducer, intitialState);
  

  return (

    <div className='container'>
      <div className='alert alert-info'>
        <div>
        <i className="fa-solid fa-book"></i>
        &nbsp; 출석부
        </div>
        <hr />
        <p>총 학생수 :  { studentInfo.count } 명</p>

        <div>
          <input className='form-control'
              placeholder='이름을 입력해주세요.'
              spellCheck='false'
              onChange={ (e)=>{setName(e.target.value)} }
            />
            <button className='btn btn-success mt-1'
              onClick={ (e) =>{
                if (name === '') {
                  return alert ("이름을 입력해주세요");
                }

                dispatch( {type:'add-student', payload: {name}});
              }}
            >
              추가
            </button>
        </div>
      </div>

      {
        studentInfo.students.map( (student)=> {   {/* map 돌릴 때 추적할 수 있는 key 필수 */}
          return  <Student  key={student.id}
                        id = {student.id}
                        name = {student.name}
                        isHere = {student.isHere}
                        dispatch = {dispatch} />
        })
      }
    </div>

  )
}

export default UseReducer03