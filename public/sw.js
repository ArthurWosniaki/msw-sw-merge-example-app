const url = new URL(location.href);

console.log({ url });
if (url.searchParams.get('enableApiMocking') === 'true') {
  console.log('IMPORTED SCRIPT');
  importScripts('/mockServiceWorker.js');
} else {
  console.log('NOT IMPORTED SCRIPT');
}

self.addEventListener('install', async (event) => {
  console.log('Installing worker...');
});

self.addEventListener('activate', (event) => {
  console.log('Activate worker.');
});
