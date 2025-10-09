const url = new URL(location.href);

self.addEventListener('install', async (event) => {
  console.log('Installing worker...');
});

self.addEventListener('activate', (event) => {
  console.log('Activate worker.');
});
