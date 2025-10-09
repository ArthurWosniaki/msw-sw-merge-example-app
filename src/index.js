import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const workerUrl = new URL('/sw.js', window.location.origin);
console.log({ workerUrl });

// In your application code, set the "enableApiMocking" search parameter
// on the worker script URL. This way the client lets the worker know
// whether it should import MSW's worker script based on the environment.
console.log({ nodeEnv: process.env.NODE_ENV });
if (process.env.NODE_ENV === 'development') {
  workerUrl.searchParams.set('enableApiMocking', 'true');
}

navigator.serviceWorker.register(workerUrl.href);

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return await worker.start({
    findWorker(scriptUrl) {
      return scriptUrl.includes('mockServiceWorker');
    },
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
