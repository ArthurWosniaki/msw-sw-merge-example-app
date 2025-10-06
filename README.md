# MSW MERGED SERVICE WORKER EXAMPLE APP

To run app, just run `yarn` and `yarn start`.

This example is following the [official docs](https://mswjs.io/docs/recipes/merging-service-workers).
Unless i missed something, app is crashing because service worker is not being imported due a reload of the URL without the searchParams.

This app was created with `npx create-react-app`, and the only lib i added was `msw`, so i guess this URL reload is a default behavior,
invalidating the docs'approach to conditionally merge the script.

### Evidence 
As shown in the image, after the first `url.searchParams` check, the mockServiceWorker script is imported. But then, the URL gets reloaded without the searchParams,
and the script is not imported, failing the `worker.start()` initialization.

<img width="649" height="784" alt="image" src="https://github.com/user-attachments/assets/a9ed0e50-29b7-40df-9f2d-a6e9aea55c5f" />
