import axios from 'axios';
import React, { useState } from 'react';
import { Button, CardGroup, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  let email = localStorage.getItem('email');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    axios
      .post('/auth/signup', {
        email: email,
        password: password
      })
      .then(response => {
        navigate('/signupSuccess');
      })
      .catch(error => {
        alert(error);
      });
  };
  return (
    <Container className="mt-5" style={{ width: '50%', height: '70%' }}>
      <Form onSubmit={handleSignup} style={{ padding: '30px' }}>
        <CardGroup controlId="email">
          <label style={{ color: "white", fontSize: '32px', marginBottom: '30px' }}>
            회원님, 반가워요 !<br />욱플릭스 가입 절차는 매우 간단해요 !
          </label>
          <label style={{ color: "white", fontSize: '20px', marginBottom: '30px' }}>
            아래 비밀번호를 입력하시면 바로 가입하실 수 있어요 !
          </label>
        </CardGroup>
        <br />
        <Form.Group >
          <div style={{ color: "white", fontSize: '13px' }}>이메일 주소</div>
          <Form.Label style={{ color: "white", fontSize: '15px', marginBottom: '30px', fontWeight: 'bold' }}>{email}</Form.Label>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Control
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ backgroundColor: 'rgb(60, 60, 60)', width: '100%', height: '50px', color: 'lightgray', borderColor: 'rgb(27, 27, 27)' }}
            required='비밀번호를 입력해주세요'
          />
        </Form.Group>
        <div style={{ color: 'white', textAlign: 'right', marginTop: '10px' }}>
          <Link to="/findPassword" style={{ color: 'white' }}>
            비밀번호를 까먹으셨나요?
          </Link>
        </div>
        <br /><br />
        <Button variant="outline-danger" type="submit" style={{ width: '100%', marginBottom: '10px', color: 'white' }}>
          회원 가입
        </Button>
        <br /><br />
      </Form>
    </Container>
  );
};

export default SignUp;