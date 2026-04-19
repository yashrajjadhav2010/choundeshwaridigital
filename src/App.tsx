import './index.css';
import { useEffect } from 'react';
import './main_logic.js';
import rawHTML from './body_content.html?raw';

function App() {
  useEffect(() => {
    // We can put any initialization logic here if needed
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: rawHTML }} />
  );
}

export default App;
