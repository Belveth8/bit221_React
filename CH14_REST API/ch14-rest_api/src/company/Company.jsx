import axios from 'axios';
import React, { useEffect, useState } from 'react'

// same origin policy
 // 웹 보안 정책


function Company() {

  const [data, setData] = useState({
    "name" : "",
    "address" : ""
  });


  const SERVER_URL = 'http://localhost:8080/company';

  const onSubmit = (e) => {
    e.preventDefault();

    axios.post (SERVER_URL, data)
    .then(res => {
      console.log(res.data);
      window.location.reload();
    })
    .catch(error=> {
      console.log(error);
    })
  }


  return (

    <div className='container mt-5'>
      <h3>Company</h3>
      <form onSubmit={onSubmit}>
        <input className='form-control w-25 mb-2'
                  type="text"
                  placeholder='name'
                  name='name'
                  onChange={ (e) => {setData({...data, name:e.target.value})} }
        />

                <input className='form-control w-25 mb-2'
                  type="text"
                  placeholder='address'
                  name='address'
                  onChange={ (e) => {setData({...data, address:e.target.value})} }
        />
        <button type='submit' className='btn btn-info'>등록</button>
      </form>
    </div>

  )

}

export default Company