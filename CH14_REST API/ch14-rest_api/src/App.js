import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

/**  JS 에서 비동기 HTTP 통신
 *  * ajax, fetch, axios
 * 
 * 
 *  REST API ?
 *  ( Reprezentational State Transfer )
 *  두 컴퓨터 시스템이 웹을 통해
 *  정보를 교환하기 위해 사용하는 인터페이스
 *  
 *  HTTP Method : GET POST, PUT, DELETE
 *  
 *  dummy data => Postman
 *  API TEST 플랫폼
 * Postman은 개발한 API를 테스트하고, 테스트 결과를 공유하여 API 개발의 생산성을 높여주는 플랫폼
 * 
 * axios 가 갖는 매개변수 configs들에 대한 내용
 * https://grepper.tistory.com/72
 */

const MyImg = styled.img`
  width : 50px;
  border-radius : 50%;
`

function App() {

  const [ posts, setPosts ] = useState([]);

  useEffect (e=> {
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(res => {
      setPosts(res.data);
    })
    .catch (error => {
      alert(error);
    })
  },[posts]);


  return (
    <div className="App">
      <header className="App-header">
        <div className='d-flex' style={{ alignItems:'center' }}>
          <img src='https://cdn.pixabay.com/photo/2017/08/25/18/48/watercolor-2681039__340.jpg'
                  alt='' style={{ width:100, height:100, borderRadius:100 }}
          />
          <div className='d-flex'>
            <input className='form-control ml-5' />
            <button className='btn btn-danger ml-2'>Search</button>
          </div>
        </div>

        <div className='container'>
          <span style={{ color:'#eee' }}>Total : {posts.length}</span>
          <table className='table text-light' style={{ fontSize:'1rem' }}>
            <thead>
              <tr>
                <th scope='col'>No</th>
                <th scope='col'>ID</th>
                <th scope='col'>TITLE</th>
                <th scope='col'>URL</th>
              </tr>
            </thead>
            <tbody>
            {posts.map((post)=>{
              return (
              <tr key={post.id}>
                <th scope='row'>{post.id}</th>
                <td><MyImg src={post.thumbnailUrl} alt='thumnail' /></td>
                <td>{post.title}</td>
                <td>{post.url}</td>
              </tr>
               )
               })
             }
            </tbody>
          </table>
        </div>

      </header>
    </div>
  );
}

export default App;
