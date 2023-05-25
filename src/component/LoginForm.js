import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 처리 로직을 구현하세요.
  };

  return (
    <Container className="mt-5" style={{ width: '40%', height: '70%' }}>
      <Form onSubmit={handleSubmit} style={{ padding: '30px' }}>
        <Form.Group controlId="email">
          <Form.Label style={{ color: "white", fontSize: '32px', marginBottom: '30px' }}>로그인</Form.Label>
          <Form.Control
            type="email"
            placeholder="이메일을 입력하세요"
            value={id}
            onChange={(e) => setId(e.target.value)}
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
            style={{ backgroundColor: 'rgb(60, 60, 60)', width: '100%', height: '50px', color: 'lightgray', borderColor: 'rgb(27, 27, 27)' }}
          />
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
        <br/><br/>
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="로그인 정보 저장"
            style={{ color: '#eee', marginLeft : '65%'}}
          />
        </Form>
        <div style={{ color: 'rgb(120, 120, 120)', textAlign: 'center', marginTop: '20px' }}>
          Wookflix 회원이 아닌가요?{' '}
          <Link to="/" style={{ color: 'white' }}>
            지금 가입하세요.
          </Link>
        </div>
      </Form>
    </Container>
  );
};

export default LoginForm;