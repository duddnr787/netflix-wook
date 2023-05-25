import { fontSize, height } from '@mui/system';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
//popularMovies에 있는 1번째 애를 배너로 만들거다.
const Banner = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 이메일 등록 또는 재시작 처리
    // ...

    // 폼 제출 후 입력값 초기화
    setEmail('');
  };
  return (
    <div className='banner' style={{ backgroundImage: "url(" + 'https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/tcYO8ay3A0liCWxHu2creU3Q9IB.jpg' + ")" }}>
      <div className='banner-info' >
        <h1>귀멸의 칼날: 상현집결, 그리고 도공 마을로 (2023)</h1><br />
        <br />
        절체절명 위기의 순간에도 흔들리지 않는 곧은 의지로 규타로에 맞서는 탄지로, 젠이츠, 이노스케 그리고 음주 우즈이 텐겐. 환락의 거리 속 혈귀를 쓰러트리기 위한 그들의 치열한 전투가 시작된다.
        <br />
        한편, 키부츠지 무잔은 무한성에 상현 혈귀들을 소집시키고 탄지로는 새로운 칼을 찾아 도공 마을로 향하는데...

        <div style={{marginTop:'30px', fontSize:'30px'}}>시청할 준비가 되셨나요? 가입을 하기 위해 아래 이메일 주소를 입력해주세요.</div>
        <Container className="banner-container" style={{marginTop:'30px'}}>
          <Form onSubmit={handleSubmit} style={{display:'flex'}}>
            <Form.Group controlId="email" style={{marginRight:'10px'}}>
              <Form.Control style={{backgroundColor: 'rgba(60, 60, 60, 0.5)', color:'white', width:'400px', height:'50px'}}
                type="email"
                placeholder="이메일 주소를 입력하세요."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="danger" type="submit">
              시작하기 &gt;
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Banner;