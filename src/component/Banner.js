import React from 'react';
//popularMovies에 있는 1번째 애를 배너로 만들거다.
const Banner = () => {
  return (
    <div className='banner' style={{backgroundImage:"url(" + 'https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/tcYO8ay3A0liCWxHu2creU3Q9IB.jpg' + ")"}}>
      <div className='banner-info'>
        <h1>귀멸의 칼날: 상현집결, 그리고 도공 마을로 (2023)</h1><br/>
        <span>혈귀가 숨어있는 거리에 잠입한 탄지로 일행. 강력한 상현 6 혈귀 남매 규타로 & 다키와의 전투 끝에 탄지로 일행은 궁지에 몰린다. 
          <br />
          절체절명 위기의 순간에도 흔들리지 않는 곧은 의지로 규타로에 맞서는 탄지로, 젠이츠, 이노스케 그리고 음주 우즈이 텐겐. 환락의 거리 속 혈귀를 쓰러트리기 위한 그들의 치열한 전투가 시작된다. 
          <br />
          한편, 키부츠지 무잔은 무한성에 상현 혈귀들을 소집시키고 탄지로는 새로운 칼을 찾아 도공 마을로 향하는데...
        </span>
      </div>
    </div>
  );
};

export default Banner;