// import React, { Component } from "react";
// import Slider from "react-slick";
// import './CarouselPage.css'
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { Container } from 'react-bootstrap';


// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: false,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows: true,
//       centerMode: true,
//       //autoplay: true, // 자동 캐러셀
//       autoplaySpeed: 2000, // 자동 캐러셀 속도
//       pauseOnFocus: true,
//     };
//     return (
//       <div>
//         <Container>
//           <h2> Single Item</h2>
//           <Slider {...settings}>
//             <div>
//                 <img className="carouselImg" src={"image/국화.jpg"} alt={"사진"} />
//             </div>
//             <div>
//                 <img className="carouselImg" src={"image/GRUP로고.png"} alt={"사진"} />
//             </div>
//             <div>
//                 <img className="carouselImg" src={"image/중부대로고.jpg"} alt={"사진"} />
//             </div>
//             <div>
//                 <img className="carouselImg" src={"image/GRUP로고.png"} alt={"사진"} />
//             </div>
//           </Slider>
//         </Container>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import Slider from "react-slick";
import './CarouselPage.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from 'react-bootstrap';

class CarouselPage extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      autoplay: true, // 자동 캐러셀
      autoplaySpeed: 1500, // 자동 캐러셀 속도
      pauseOnFocus: true,
    };
    return (
      <div>
        <Container className='carouselContainer'>
          <Slider {...settings}>
            <div>
                <img className="carouselImg" src={"image/국화.jpg"} alt={"사진"} />
            </div>

            <div>
                <img className="carouselImg" src={"image/중부대로고.jpg"} alt={"사진"} />
            </div>
            <div>
                <img className="carouselImg" src={"image/GRUP로고.png"} alt={"사진"} />
            </div>
          </Slider>
        </Container>
      </div>
    );
  }
}

export default CarouselPage;
