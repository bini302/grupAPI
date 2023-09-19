
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/views/Header/Header';
import CarouselPage from './components/views/Carousel/CarouselPage';
import Footer from './components/views/Footer/Footer';
import RecommendPage from './components/views/RecommendPage/RecommendPage';
import RecommendResultPage from './components/views/RecommendResultPage/RecommendResultPage';
import CrawlingPage from './components/views/Crawling/CrawlingPage';
import CrawlingResultPage from './components/views/CrawlingResult/CrawlingResultPage';
import CrawlingStartPage from './components/views/Crawling/CrawlingStartPage';
import IntroducePage from './components/views/Introduce/IntroducePage';
import MainPage from './components/views/Main/MainPage';
function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <div className="App">
        <BrowserRouter>
          <div id="wrapper" className="flex flex-col h-screen">
            <Header/>

            <div id="main-content" className="flex-1">
              <Routes>
                <Route path='/' element={<MainPage/>}></Route>
                <Route path='/RecommendPage' element={<RecommendPage/>}></Route>
                <Route path='/RecommendResultPage' element={<RecommendResultPage/>}></Route>
                <Route path='/CrawlingPage' element={<CrawlingPage/>}></Route>
                <Route path='/CrawlingStartPage' element={<CrawlingStartPage/>}></Route>
                <Route path='/CrawlingResultPage' element={<CrawlingResultPage/>}></Route>
                <Route path='/CarouselPage' element={<CarouselPage/>}></Route>
                <Route path='/IntroducePage' element={<IntroducePage/>}></Route>
                <Route path='/MainPage' element={<MainPage/>}></Route>
              </Routes>
            </div>
            <Footer/>
          </div>
        </BrowserRouter>

      </div>
    </Suspense>
    
  );
}

export default App;
