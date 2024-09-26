import React from 'react';
import ReactDOM from 'react-dom';
import { initializeIcons } from '@fluentui/react';
import { TextField, PrimaryButton } from '@fluentui/react';

initializeIcons();

const App = () => {
  const [url, setUrl] = React.useState('');

  const handleProxy = () => {
    window.location.href = `/proxy?url=${encodeURIComponent(url)}`;
  };

  return (
    <div style={{ padding: '20px' }}>
      <TextField
        label="URL"
        value={url}
        onChange={(e, newValue) => setUrl(newValue || '')}
        styles={{ root: { marginBottom: '20px' } }}
      />
      <PrimaryButton text="Proxy" onClick={handleProxy} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
