import React, { useState } from 'react';
import './changethemes.css'; 
import DefaultImage from "./default.jpg";
import ChristmasImage from "./christmas.jpg";
import HalloweenImage from "./halloween.jpg";
import TechnoImage from "./techno.jpg";

const ChangeThemes = ({ currentTheme, themeChange }) => {
  // State to control dropdown and theme
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(DefaultImage); // Replace with a default background

  // Theme options with corresponding background images
  const themes = {
    Default: DefaultImage,
    Christmas: ChristmasImage,
    Halloween: HalloweenImage,
    Techno: TechnoImage,
  };

  // Handle theme selection
  const handleThemeChange = (theme) => {
    setBackgroundImage(themes[theme]);
    setDropdownOpen(false); // Close dropdown after selection
    themeChange(theme);
  };

  return (
    <div
      className="ChangeThemes"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '150vh',
      }}
    >
      <div style={{ padding: '20px' }}>
        {/* Button to toggle dropdown */}
        <button onClick={() => setDropdownOpen(!dropdownOpen)} style={styles.button}>
          Choose Theme
        </button>

        {/* Dropdown menu */}
        {dropdownOpen && (
          <ul style={styles.dropdown}>
            {Object.keys(themes).map((theme) => (
              <li
                key={theme}
                onClick={() => handleThemeChange(theme)}
                style={styles.dropdownItem}
              >
                {theme}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  button: {
    marginTop: "80vh",
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    fontSize: '16px', 
    fontWeight: 'bold', 
    border: 'none', 
    borderRadius: '25px', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer', 
    transition: 'all 0.3s ease-in-out',
  },
  dropdown: {
    listStyleType: 'none',
    marginLeft: '15px',
    padding: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    position: 'absolute',
  },
  dropdownItem: {
    padding: '10px 15px',
    cursor: 'pointer',
    borderBottom: '1px solid #ddd',
  },
};

// Export App component
export default ChangeThemes;