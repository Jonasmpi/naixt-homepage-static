import React, { useEffect, useState } from 'react';

const PrivacyPolicy = () => {
  const [englishContent, setEnglishContent] = useState('');
  const [germanContent, setGermanContent] = useState('');

  useEffect(() => {
    // Fetch English privacy policy
    fetch('/assets/privacy_english.txt')
      .then(response => response.text())
      .then(text => setEnglishContent(text))
      .catch(err => console.error('Error loading English privacy policy:', err));

    // Fetch German privacy policy
    fetch('/assets/privacy_german.txt')
      .then(response => response.text())
      .then(text => setGermanContent(text))
      .catch(err => console.error('Error loading German privacy policy:', err));
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '200px' }}>
      <div style={{ flex: 1, padding: '10px', borderRight: '1px solid #ddd' }}>
        <h4>Privacy Policy (English)</h4>
        <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
          {englishContent}
        </pre>
      </div>
      <div style={{ flex: 1, padding: '10px' }}>
        <h4>Datenschutzerklärung (Deutsch)</h4>
        <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
          {germanContent}
        </pre>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
