import { useState } from "react";


function App() {

  
  const images = [
    "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
    "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
    "https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg",
    "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg",
    "https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg"
  ]
  
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);

  const next = () => setIndex((index + 1) % images.length);

  return (
    <>
      <div className="img-slider">
        <h1>Image Slider</h1>
        <img src={images[index]} alt="image-here" />
        <div className="slider-btn">
            <button onClick={prev}>left</button>
            <button onClick={next}>right</button>
        </div>
      </div>
    </>
  )
}

export default App
