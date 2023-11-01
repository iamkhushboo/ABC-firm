import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllFiles = () => {

  const navigate = useNavigate();

    const Home=()=>{
        navigate('/');
    }

  return (
    <div className='d-flex p-5'>
      <p>All Files</p> &nbsp;
      <p style={{color:'blue', cursor:'pointer'}} onClick={Home}>Go To Home &nbsp;<i className='bi bi-arrow-right'></i></p>
    </div>
  )
}

export default AllFiles
