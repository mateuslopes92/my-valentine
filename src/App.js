import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';

import { useEffect, useState } from "react";

import { Carousel } from "react-responsive-carousel";
import TimeCounter from "./Timer";
import image1 from "./assets/image1.JPG";
import image6 from "./assets/image6.png";
import video1 from "./assets/video1.mp4";
import video3 from "./assets/video3.mp4";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const namorando = "2025-06-07T00:00:00";
  const queNosFalamos = "2025-03-16T00:00:00";
  const beijo = "2025-03-22T00:00:00";
  const password = "velhote";

  const [poster1, setPoster1] = useState(null);
  const [poster3, setPoster3] = useState(null);

  const generatePoster = (videoSrc, setPoster) => {
    const video = document.createElement("video");
    video.src = videoSrc;
    video.crossOrigin = "anonymous";
    video.muted = true;
    video.currentTime = 1;

    video.addEventListener("loadeddata", () => {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataURL = canvas.toDataURL("image/png");
        setPoster(dataURL);
      }
    });
  };

  useEffect(() => {
    generatePoster(video1, setPoster1);
    generatePoster(video3, setPoster3);
  }, []);

  const handleLogin = () => {
    if (inputPassword.toLocaleLowerCase() === password.toLocaleLowerCase()) {
      setIsAuthenticated(true);
    } else {
      alert("Nao vai rolar!");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className='App'>
        <div style={{ textAlign: 'center', marginTop: '20vh' }}>
          <h2>Voce e minha novinha e eu sou seu:</h2>
          <input
            type="password"
            value={inputPassword}
            onChange={e => setInputPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Ok</button>
        </div>
      </div>
    );
  }

  return (
    <div className='App'>
      <div  style={{ height: 100 }} />
      <div className="Polaroid">
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
             <video controls width="100%" poster={poster3 || undefined}>
                <source src={video3} type="video/mp4" />
                Your browser does not support the video tag.
             </video>
            </div>
            <div>
              <img height={500}  src={image1} alt="Slide 1" />
            </div>
            <div>
              <video controls width="100%" poster={poster1 || undefined}>
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Carousel>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: -60 }}>
        <TimeCounter label="Juntos há:" targetDate={namorando} />
        <TimeCounter label="Nos falamos há:" targetDate={queNosFalamos} />
        <TimeCounter label="Nosso primeiro beijo foi há:" targetDate={beijo} />
        <div style={{ backgroundColor: 'white', width: 200, height: 2, marginTop: 20  }} />
      </div>

      <div style={{padding: 20, marginBottom: 20}}>
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
