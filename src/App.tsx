import React, { useState, useEffect } from 'react';

export const App: React.FC = () => {
  const [lastKey, setLastKey] = useState<string>('');

  const handleKeyUp = (event: KeyboardEvent) => {
    setLastKey(event.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="App">
      {lastKey.length > 0 ? (
        <p className="App__message">The last pressed key is [{lastKey}]</p>
      ) : (
        <p className="App__message">Nothing was pressed yet</p>
      )}
    </div>
  );
};
