import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';

import { Carousel } from "react-responsive-carousel";
import TimeCounter from "./Timer";
import image1 from "./assets/image1.JPG";
import image6 from "./assets/image6.png";
import video1 from "./assets/video1.mp4";
import video3 from "./assets/video3.mp4";

function App() {
  const namorando = "2025-06-07T00:00:00"
  const queNosFalamos = "2025-03-16T00:00:00"
  const beijo = "2025-03-22T00:00:00"

  return (
    <div className='App'>
      <div  style={{ height: 100 }} />
      <div className="Carousel">
        <Carousel
          showThumbs={false}
          autoPlay={false}
          infiniteLoop={true}
          showStatus={false}
          dynamicHeight
        >
          <div>
            <img height={500}  src={image6} alt="Slide 6" />
          </div>
          <div>
            <video controls width="100%">
              <source src={video3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div>
            <img height={500}  src={image1} alt="Slide 1" />
          </div>
          <div>
            <video controls width="100%">
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Carousel>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <TimeCounter label="Juntos há:" targetDate={namorando} />
        <TimeCounter label="Nos falamos há:" targetDate={queNosFalamos} />
        <TimeCounter label="Nosso primeiro beijo foi há:" targetDate={beijo} />
        <div style={{ backgroundColor: 'white', width: 200, height: 2, marginTop: 20  }} />
      </div>

      <div style={{padding: 20}}>
        <div
          style={{
            fontSize: 14,
            fontStyle: 'italic',
            textAlign: 'center',
          }}
        >
          Pra voce lembrar de quantos dias se passaram da minha melhor decisao... E que a gente possa voltar aqui e ver que os dias so aumentaram, viraram meses, anos, pra sempre... Eu te amo tanto, Kessily Moreira (um dia Kessily Moreira Lopes) ❤️
        </div>
      </div>
    </div>
  );
}

export default App;
