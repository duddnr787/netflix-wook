import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';



const LoginForm = () => {
  //아디 비번 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //체크 validation
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const authContext = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    axios
      .post('/auth/login', {
        email: email,
        password: password
      })
      .then(response => {
        navigate('/');
        authContext.setIsLoggedIn(true);
        authContext.setEmail(email);
      })
      .catch(response => {
        setIsDuplicate(true);
        setMessage('이메일 혹은 비밀번호가 맞지 않아요 !');
      });
  };

  return (
    <AuthContext.Provider value={authContext}>
      <Container  style={{ width: '40%', height: '75%', backgroundColor:'black' , opacity:'0.9', borderRadius:'15px'}}>
        <Form onSubmit={handleLogin} style={{ padding: '19px' }}>
          <Form.Group controlId="email">
            <Form.Label style={{ color: "white", fontSize: '32px', marginBottom: '30px' }}>로그인</Form.Label>
            <Form.Control
              type="email"
              placeholder="이메일을 입력하세요"
              value={email}
              required isInvalid={isDuplicate}
              onChange={(e) => setEmail(e.target.value)}
              style={{ backgroundColor: 'rgb(60, 60, 60)', width: '100%', height: '50px', color: 'lightgray', borderColor: 'rgb(27, 27, 27)' }}
            />
          </Form.Group>
          <br />
          <Form.Group controlId="password">
            <Form.Control
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required isInvalid={isDuplicate}
              style={{ backgroundColor: 'rgb(60, 60, 60)', width: '100%', height: '50px', color: 'lightgray', borderColor: 'rgb(27, 27, 27)' }}
            />
            {isDuplicate && (
              <Form.Control.Feedback type="invalid" style={{ fontSize: '15px' }}>
                {message}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <div style={{ color: 'white', textAlign: 'right', marginTop: '10px' }}>
            <Link to="/findPassword" style={{ color: 'white' }}>
              비밀번호를 까먹으셨나요?
            </Link>
          </div>
          <br /><br />
          <Button variant="outline-danger" type="submit" style={{ width: '100%', marginBottom: '10px' }}>
            로그인
          </Button>
          <br /><br />
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="로그인 정보 저장"
              style={{ color: '#eee', marginLeft: '65%' }}
            />
          </Form>
          <div style={{ color: 'rgb(120, 120, 120)', textAlign: 'center', marginTop: '20px', marginBottom:'20px' }}>
            Wookflix 회원이 아닌가요?{' '}
            <Link to="/" style={{ color: 'white' }}>
              지금 가입하세요.
            </Link>
          </div>
        </Form>
      </Container>
    </AuthContext.Provider>
  );
};

export default LoginForm;