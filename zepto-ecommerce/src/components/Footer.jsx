import React from 'react';

const Footer = () => {
  return (
    <div style={footerWrapperStyle}>
      <footer style={footerStyle}>
        <div style={contentStyle}>
          <p>&copy; 2025 Your Company. All Rights Reserved.</p>
          <p>Thank you for visiting our website. We hope you found what you're looking for!</p>
          <p>Stay connected with us on social media:</p>
          <div style={socialLinksStyle}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const footerWrapperStyle = {
  marginTop: 'auto', 
  width: '100%',    
};

const footerStyle = {
  backgroundColor: '#282c34',
  color: '#fff',
  padding: '20px 0',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
};

const contentStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
};

const socialLinksStyle = {
  marginTop: '10px',
};

export default Footer;
