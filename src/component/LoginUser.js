import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const LoginUser = () => {
  const { email } = useContext(AuthContext);
  return (
    <div style={{marginTop : '40px', fontSize:'40px'}}>
      <strong className='email'>{email}</strong> 님 반가워요 ! 
    </div>
  );
};

export default LoginUser;