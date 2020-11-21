if ('function' === typeof importScripts) {
    importScripts(
        'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
    );
    /* global workbox */
    if (workbox) {
        workbox.setConfig({
            debug: false
        });
        console.log('Workbox is loaded');

        /* injection point for manifest files.  */
        workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

        /* custom cache rules*/
        workbox.routing.registerNavigationRoute('/index.html', {
            blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
        });

        workbox.routing.registerRoute(
            /\.(?:png|gif|jpg|jpeg|svg)$/,
            new workbox.strategies.CacheFirst({
                cacheName: 'images',
                plugins: [
                    new workbox.expiration.Plugin({
                        maxEntries: 60,
                        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                    }),
                ],
            })
        );

        workbox.routing.registerRoute(
            new RegExp('/manifest.json'),
            new workbox.strategies.NetworkFirst(),
        );

        workbox.routing.registerRoute(
            new RegExp('/sw.js'),
            new workbox.strategies.NetworkFirst(),
        );

        workbox.routing.registerRoute(
            new RegExp('https://fonts\\.*'),
            new workbox.strategies.NetworkFirst(),
        );

    } else {
        console.log('Workbox could not be loaded. No Offline support');
    }
}