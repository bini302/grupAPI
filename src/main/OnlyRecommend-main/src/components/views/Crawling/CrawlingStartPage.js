import React, { useState ,useEffect} from 'react';
import { useNavigate  } from 'react-router-dom';
import './CrawlingStartPage.css';

function CrawlingStartPage() {
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    navigate('/CrawlingPage');
  }
        
  return(
    <div className='crawlingStart'>
      <button className='crawlingStartButton' onClick={onSubmit}>
        크롤링시작하기
      </button>
    </div>
  )
}

export default CrawlingStartPage;

