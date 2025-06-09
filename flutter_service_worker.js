'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "f6d8b707ab6016a2e7b18a1cb04454f6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "05bf3ec7c47f187890b21a46a2d695e7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b62a27b501f3d1d634894632424ff154",
".git/logs/refs/heads/main": "652dc1c6918e14093402bd6c194ea487",
".git/logs/refs/remotes/origin/main": "41f70986ca9b2fa4a5b35a424ce00137",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/00/82c459f2289faf55e26c048196894aa743ae75": "1e1c1e747fc2dd592d532f81394487b3",
".git/objects/01/4a41db1d173b7dd236100450bac7cc397227c9": "2ed6f33baac711d9dfe03fee9bb9cb7a",
".git/objects/16/4a218a7ef6309d18f56b6fbc042bf8a8995cdc": "7b78469664b6f3dfdd96cbef0feb2c1d",
".git/objects/17/52b1d3cd74e76e5c116191da0eec8f30c6bd3d": "170a0d96eed2c6244437d274241d84c1",
".git/objects/17/58116030d57acfc02c0f56f02b56684c273d49": "22bb84cecabc1ca5cae127da64d7e0f9",
".git/objects/20/7f4bfce27ae1dd77283f874c28aece65285d02": "82c560f867f4f3ef97dea6ad5492b5bf",
".git/objects/23/ec2bfa9c18078d96e351d84554892c48470e64": "107b9b32d05ecae29f7224b38dbaddc7",
".git/objects/25/b6f2e89ee8d1897cc8b3b38218f668d1229c73": "d6d49b0f5c96a1437e00f2e585d86cd9",
".git/objects/33/6f8db957ec85fa31d24df48ff2e4b0d5eafc73": "a2bb6a75739220f86e283efa06813892",
".git/objects/34/27be90c6eeb9df43357df25fd399639f75a51e": "6e5d1e65bade61e78dd9c3e479671eb1",
".git/objects/37/b3409e06738d5dd4fa2c0b0d644ef40aec5ca8": "4420c61f3ddcb5671bcc427b103d7744",
".git/objects/3f/6449ee57499a18cb86a63ee772c06a69c96d17": "47bc5cd7d41c5d6b5242186ee59ddceb",
".git/objects/40/ddea80c3189bbdbee1f21dd3e5ba721268b70e": "75dc30d3102b65a8af48cfb285276026",
".git/objects/43/06fe03d255dccb99facb580d2d53bcdc651d94": "9a058f8f1e3471afbd97d81c01ffc203",
".git/objects/43/3aa1de6e21ccde86259d130d11eb41593f069d": "3bbbb2b627536b5cbb5ea137ef19860e",
".git/objects/44/8ef7e155eb29ce7db7293272e855e2136a35d1": "f9fe6d162c349d0a6c02de1329af919a",
".git/objects/46/d55d1440b2b2db85c0c9cdfe32b6488d11a773": "49e04db10a0622a32b0079b6d4bfaf34",
".git/objects/48/07d0c85e148b3d0a7a105b6f14e63f83511b0d": "19d04fefa673887e84a155356d9990b0",
".git/objects/4f/3d96ed6640f3047f83e5ec0657dc89dde3526d": "0e2f476a011a9e1e582242a4464f1937",
".git/objects/51/b1cf3738fd50f510a3d8d0b6df9d839ba73332": "0e8fed067ca742b7c98a47365e383e95",
".git/objects/54/8d1f5db71a877e28abd67b880d048d77bf90f2": "16df6c972ef5f227ba1eb3832094dedc",
".git/objects/57/6546ad07a4bdf8aff96a4b16676dbd89a994c7": "e8fb8ec1c0cd63a706248fff3957472a",
".git/objects/58/a814f78b505e6c6e17846be9222411cda5f339": "5d4cebefe9ac8d320054d627f295a250",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5c/5f7203e8debbe4f06acec4c9f19364891b10a5": "ed491b00f8b2310d194644b7da745950",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/60/945552bd06b85d105d518f010895ae6484df84": "da8e38cae534d3b7f2d9fe23f3f14c8e",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/86/2cb37e406218bb6ce81693378cdf14d0194e83": "59a9a7818911d070aed2876cf3d413f2",
".git/objects/8a/c6aa27c81364b1a95e2dbdab02b2139210bd7e": "4653b51c3c165952b2e6e4a6cc16bfe1",
".git/objects/8c/cdb32b120c2922564b3fce4c09d04fa440c344": "4fd203fb7415f3990b8da95d84df8ad9",
".git/objects/8d/2a930cb10d0853f44a9ad3f2814e5a7628da97": "13bee628881db00368d969511e5579e6",
".git/objects/93/ecc7a2089ee2e3c3b46ff6c74129682ea040c1": "0ebea87d66e09dc6b62bca9112ad6419",
".git/objects/94/c14566dafae7ddc633674234f577bb5353a32a": "de445afd15ea8a1f945a52dd5174359b",
".git/objects/94/ed4a7037b38f5ed6cd47722005811d7aa4369e": "778a6a6946f9e5b7d486062859cbc842",
".git/objects/96/dcd9913d2de0e9465cde30f2c2c8edc0c9482a": "d0b3ed3f1516bbe4d0aff726acc1f46a",
".git/objects/9a/a18970db197a3186632bd9c33144907a40ca68": "8928a6658cbf59bd9a8edb1f9ee99e71",
".git/objects/9b/79f4650360bc77efb4800006e71af5108fd4b6": "6e10b328bba8dca36f668ba64e1f597e",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/ae/f08254253cf3eae0cb8635ca1a348332903ea4": "fd80a86a2e23aba27f3101386d983a8e",
".git/objects/bf/2c2d3db3736584752c2c65636882edb48a4be7": "1327713fcbf9ff0fa9da5dd8fcc2c34f",
".git/objects/c3/0a52ec307942a39e588560b526256b1b50ec44": "07cde0ebb9b30cc7fb372159b048160f",
".git/objects/c7/fd7d86e171aa5a14bf2d5c21c1253b883bef89": "fe5a7e2c0c97b32cee59c0cfd5678d59",
".git/objects/c8/466c6242a3a737a1f0e62bb6c929f2de171ffc": "6c67e18230a57024e58898ee6391e838",
".git/objects/cc/625e6675eca6f6fbcd0d436c2bec301377c8c9": "f08eaab9329068b0b262562bca5e1257",
".git/objects/ce/8a0407af949b72ec28bc97f6e702c47be0e22b": "741c0973cfb90f73ec84b9b587b2014c",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d3/cd909664e2e8e7b3da6cf7a8a4bd6efa12b0d4": "727e374793e2dd3d1b52b8fe2a980ec0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/462313d5eec3153d3b91cf396a2c7a98c8eb41": "dfe6bc761c4ca704071c422fec16de5b",
".git/objects/f3/ebe8a1645659f049ad5b09c3a85dda3ab4cb10": "73e9f6a7e5aa79998299950dac551ee5",
".git/objects/f4/fab32f2cbf88efdd244dc9079f23f0c6556c40": "a8e4f77851d3b453af7d16c0b8c66d48",
".git/objects/f5/21bb6607c1c5567810f7c514ada933b2f872c4": "4bb994baa7347301f86c6fb783bb1bd5",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/dfa6100d3a86cda9816b90d2af1b13fcabddb3": "bd401c0b8ba4947ff7805cef9b63f7a7",
".git/objects/fa/79cf8f9107e5aad5bf985ac74890dcb27da207": "75bab0eae53bbd68fe1f48f5b617eeb5",
".git/refs/heads/main": "310f4e8eff07cc13aec60ad98d3feb2b",
".git/refs/remotes/origin/main": "310f4e8eff07cc13aec60ad98d3feb2b",
"assets/AssetManifest.bin": "594601979697f09d50f6cf116813f4aa",
"assets/AssetManifest.bin.json": "3b8afc0af374a25be0ade8e7c66ba3bf",
"assets/AssetManifest.json": "59a4e74fe8eee93575639b4a4f06b51d",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/images/android.svg": "0a04451ad3b5886234ef80268c803e46",
"assets/assets/images/dev_img.png": "b6b5ea00e11fb2b73aeb72f0293cc63f",
"assets/assets/images/portfolio_icon.png": "7cb8fcd768c7538bd9c9efd457a0df18",
"assets/assets/images/ruler.svg": "4791ae452335f1ba68a2787f872f3e5f",
"assets/assets/images/slider.svg": "a4fc3ee8b34de4bfab375880f4297c49",
"assets/FontManifest.json": "9079600dd6cc1457502d9273b45170aa",
"assets/fonts/MaterialIcons-Regular.otf": "918b8ba890976c883c1d5468e1f595da",
"assets/loading.gif": "602efadf1bcfb2d6b7ac7bf3c91430a2",
"assets/NOTICES": "e92121e4ad1f155d922388b766f6d592",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "6963f82c2db9e9700ebdecd036beecc2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "8cf6e87eff144e2453a9640bfa1a4ad0",
"canvaskit/canvaskit.js.symbols": "8d7b042615c3df3b6084a43f4cbab201",
"canvaskit/canvaskit.wasm": "f2bff9540242b13879d64cad2240f3d7",
"canvaskit/chromium/canvaskit.js": "9dc7a140b1f0755e6321e9c61b9bd4d9",
"canvaskit/chromium/canvaskit.js.symbols": "fb34b276adaa25a69526127d3eb90c16",
"canvaskit/chromium/canvaskit.wasm": "c03ca38cf9e6d7c428fb4002bc85f4e7",
"canvaskit/skwasm.js": "9c817487f9f24229450747c66b9374a6",
"canvaskit/skwasm.js.symbols": "7157d996c331b2a9e316b6ec288305ad",
"canvaskit/skwasm.wasm": "a789594257ac1bdad1f89ec1bb3a823d",
"canvaskit/skwasm_st.js": "7df9d8484fef4ca8fff6eb4f419a89f8",
"canvaskit/skwasm_st.js.symbols": "21bd5519d3b07c5c54daf3ce328fbf37",
"canvaskit/skwasm_st.wasm": "48287a212ba5f76ff8d45a852ee51441",
"favicon.png": "e3ba0936cce0ed61f1884210da59afbc",
"flutter.js": "1e28bc80be052b70b1e92d55bea86b2a",
"flutter_bootstrap.js": "1851b00674df7cf2d5e5a869664a0d83",
"icons/Icon-192.png": "45ccc3c17e417eb1ae5cf520c65d3f90",
"icons/Icon-512.png": "8e7d731479c8e7407e6cc7a4038518fb",
"icons/Icon-maskable-192.png": "45ccc3c17e417eb1ae5cf520c65d3f90",
"icons/Icon-maskable-512.png": "8e7d731479c8e7407e6cc7a4038518fb",
"index.html": "b548f52888c3e7ddfaf4c0171f3fc416",
"/": "b548f52888c3e7ddfaf4c0171f3fc416",
"main.dart.js": "19e91a75868930b4a4c19d0fa171dc75",
"manifest.json": "1fdfc04f6ec0173e569796c6db6f8342",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
