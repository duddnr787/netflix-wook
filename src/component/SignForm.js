import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const SignForm = () => {
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [message, setMessage] = useState('');

  // const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const changeEmail = (e) => {
    setEmail(e.target.value);
    setIsDuplicate(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: `/auth/DupCheck.do?email=${email}`, // 통신할 웹문서`;
      method: 'get', // 통신할 방식
    }).then((res) => {
      if (res.data === false) {
        setIsDuplicate(false);
        if (!email.endsWith('.com')) {
          setMessage('이메일 형식에 맞게 작성을 해주세요 !');
          setIsDuplicate(true);
        } else {
          sessionStorage.setItem('email', email);
          navigate('/signup');
        }
      } else {
        setMessage('해당 이메일은 누군가가 사용하고 있어요 !');
        setIsDuplicate(true);
      }
    });
  };
  return (
    <div>
      <div style={{ marginTop: '30px', fontSize: '30px' }}>시청할 준비가 되셨나요 ? <br />가입을 하기 위해 아래 이메일 주소를 입력해주세요.</div>
      <Container className="banner-container" style={{ marginTop: '30px' }}>
        <Form onSubmit={handleSubmit} style={{ display: 'flex' }} >
          <Form.Group controlId="email" style={{ marginRight: '10px' }}>
            <Form.Control style={{ backgroundColor: 'rgba(60, 60, 60, 0.5)', color: 'white', width: '400px', height: '50px' }}
              type="email"
              placeholder="이메일 주소를 입력하세요."
              value={email}
              onChange={changeEmail}
              required isInvalid={isDuplicate}
            />
            {isDuplicate && (
              <Form.Control.Feedback type="invalid" style={{ fontSize: '15px' }}>
                {message}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Button variant="danger" type="submit" style={{ height: '50px' }}>
            시작하기 &gt;
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default SignForm;