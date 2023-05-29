import React, { useEffect, useState } from 'react';
import { Alert, Button, Container } from 'react-bootstrap';

const SignSuccess = () => {
  let email = localStorage.getItem('email');
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const videoElement = document.querySelector('.congratulations-video');
    videoElement.addEventListener('ended', handleVideoEnd);
    
    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  const handleVideoEnd = () => {
    setShowText(true);
  };

  return (
    <div className="text-center" style={{ position: 'relative' }}>
      <video
        className="congratulations-video"
        autoPlay
        muted
        style={{ width: '100%' }}
      >
        <source src="/video/congratulation.mp4" type="video/mp4" />
      </video>
      {showText && (
        <div
          className="congratulations-message"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',        
            backgroundColor: 'transparent', 
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            zIndex: 9999,
            opacity: 0, 
            animation: 'fadeIn 2s forwards', 
          }}
        >
          <span style={{ fontSize:'40px', fontWeight:'bold', color:'rgb(105, 135, 244)'}}>{`${email}`} </span>
          <span style={{ fontSize:'40px', fontWeight:'bold'}}>님</span>
          <p style={{ fontSize:'40px' }}>욱플릭스 가입을 축하합니다 !</p>
        </div>
      )}
    </div>
  );
};

export default SignSuccess;