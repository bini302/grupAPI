import React from 'react'
import CarouselPage from '../Carousel/CarouselPage';
import CrawlingStartPage from '../Crawling/CrawlingStartPage';
import CrawlingPage from '../Crawling/CrawlingPage';
function MainPage() {
  return (
    <div className="mainPageOption">
      <CarouselPage />
      <div className="leftColumn">
        <CrawlingStartPage />
      </div>
      <div className="rightColumn">
        <CrawlingPage />
      </div>
    </div>
  );
}


export default MainPage