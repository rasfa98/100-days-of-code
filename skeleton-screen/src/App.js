import React, { useEffect, useState } from 'react';
import Card from './components/Card';

import './App.css';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    setTimeout(
      () =>
        setData({
          title: 'This is the title!',
          subtitle: 'Subtitle',
          content: 'This is the content of the card...',
        }),
      3000
    );
  });

  return (
    <div className="App">
      <Card
        title={data.title}
        content={data.content}
        subtitle={data.subtitle}
      />
    </div>
  );
}

export default App;
