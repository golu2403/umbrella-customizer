import React, { useState } from 'react';
import './App.css';

function App() {
  const [umbrellaColor, setUmbrellaColor] = useState('#ff69b4'); // Default to pink
  const [logo, setLogo] = useState(null); // Holds the uploaded logo

  // Handle umbrella color change
  const handleColorChange = (color) => {
    setUmbrellaColor(color);
  };

  // Handle logo upload
  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const logoUrl = URL.createObjectURL(file);
      setLogo(logoUrl);
    }
  };

  return (
    <div className="customizer-container">
      <h1>Umbrella Customizer</h1>

      {/* Logo Upload Section */}
      <div className="upload-section">
        <h3>Upload Your Logo:</h3>
        <input type="file" accept="image/*" onChange={handleLogoUpload} />
      </div>

      {/* Color Swatch Section */}
      <div className="swatches">
        <h3>Select Umbrella Color:</h3>
        <button
          className="swatch"
          style={{ backgroundColor: '#ff69b4' }} // Pink
          onClick={() => handleColorChange('#ff69b4')}
        ></button>
        <button
          className="swatch"
          style={{ backgroundColor: '#00bfff' }} // Blue
          onClick={() => handleColorChange('#00bfff')}
        ></button>
        <button
          className="swatch"
          style={{ backgroundColor: '#ffd700' }} // Yellow
          onClick={() => handleColorChange('#ffd700')}
        ></button>
      </div>

      {/* Umbrella Preview */}
      <div className="preview">
        <div className="umbrella" style={{ backgroundColor: umbrellaColor }}>
          <div className="umbrella-section"></div>
          {logo && <img src={logo} alt="logo" className="logo" />}
        </div>
      </div>
    </div>
  );
}

export default App;
