'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6475ec09de0ca6a449a66c47452e6a13",
"assets/AssetManifest.bin.json": "4324b60f0c7a45f0c16e76053b0c1ab5",
"assets/AssetManifest.json": "0501d9fc49f5d47d6a70f21794169dd4",
"assets/assets/fonts/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/assets/images/announce.png": "d0363d20f6899566338d92dc6c517a74",
"assets/assets/images/application.png": "d4ced4503f989e7c874eceab36b5ebc9",
"assets/assets/images/calendar.png": "01d18998f62090ea86b73bafcfa7adb6",
"assets/assets/images/calendarr.png": "dc2a600cbac84cd76011733e6b81c7a5",
"assets/assets/images/degree.jpg": "4a7e730d200a5b3408fb5846d93ba93c",
"assets/assets/images/Documents.png": "826cf0b55d7e6a18b432f67a7c360139",
"assets/assets/images/doc_file.png": "14715a97e6ba848ca7c68c51b37693b1",
"assets/assets/images/drop_box.png": "b9007ac2faf5adcc79848f9c48f5f533",
"assets/assets/images/ET_logo.png": "eb90e02bcecc87a4b0c16e18a7017e33",
"assets/assets/images/excel_file.png": "2484f282b3535d83c993cc89e4e24625",
"assets/assets/images/favicon.png": "b035d1e23aa983a5e4bf7f4197526530",
"assets/assets/images/Figma_file.png": "c5ef4125db05388276681912f21e71e1",
"assets/assets/images/folder.png": "91d137bc4ee8352e4c1a604ddf9fac4a",
"assets/assets/images/google_drive.png": "732b0d788dca9fec72657c471568a93d",
"assets/assets/images/immi.png": "28bfa7067205ab68ac5e9fc6f0e971f2",
"assets/assets/images/lecture.jpg": "dbf2731c9f6c83815062293cf9e404c4",
"assets/assets/images/logo.png": "5315be9d0a7602fb12a0ad4c2e3006e9",
"assets/assets/images/media.png": "b7fbdaa8e2c52c85de20c74860345f55",
"assets/assets/images/media_file.png": "5a01323a1a8710b9bd619dd0416497e8",
"assets/assets/images/menu.png": "239c5994a9499e99545cef73f73796f4",
"assets/assets/images/menu_dashboard.png": "0d380230a7e40255bd9487984a156b6e",
"assets/assets/images/menu_doc.png": "5dbdeac2dde51e56fa0d96e21ef748f4",
"assets/assets/images/menu_notification.png": "74230c364073ca5d78dddd2a28cc047e",
"assets/assets/images/menu_profile.png": "8682cd4a8a248f070822e50694629433",
"assets/assets/images/menu_setting.png": "1b2a375dd175fe147fc247c8c91898ce",
"assets/assets/images/menu_store.png": "29e1ef756e6f70a9e68426baa0ba652c",
"assets/assets/images/menu_task.png": "f3aa03781528457f60391fd2a54b2177",
"assets/assets/images/menu_tran.png": "b3ff85f7d529512bbc2f86b32dc1b87f",
"assets/assets/images/one_drive.png": "e9d641b1ef8f485c6b12e86ec2cb6854",
"assets/assets/images/pdf_file.png": "a3cc36c92711537c401e04956f184c6f",
"assets/assets/images/pic1.jpg": "45ec507146f39176e159ce9db3f0fea8",
"assets/assets/images/pic2.jpg": "329ce586f4b4778eb72ed086fdbedd58",
"assets/assets/images/pic3.jpg": "acba9607fbe76a4cf98da8e8482c036e",
"assets/assets/images/pic4.jpg": "f7d1afa304dd470556e0caa241eca503",
"assets/assets/images/pin.png": "a826c7b7526eec88fb314a3c18678536",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/assets/images/QR_dummy.png": "06bb3a6e5775c70f169b45a64f589a13",
"assets/assets/images/reading.jpg": "be35072a80cd05e1f6979a6d9f5bfe54",
"assets/assets/images/right-arrow.png": "a8b68ccf99b3ccbebab6be425f72781e",
"assets/assets/images/schedule.png": "9285151ce01528c50ff90cad870d0220",
"assets/assets/images/Search.png": "036073218d2ba751738a5969ab5ef86a",
"assets/assets/images/slider1.jpg": "2360a4a54d88b669d2e90563364ecf09",
"assets/assets/images/slider2.jpg": "f5246f221c96c72c651b98c806721049",
"assets/assets/images/slider3.jpg": "b995297c78ade87ddc53e217fe1efde0",
"assets/assets/images/sound_file.png": "1a36e16ac74df48240a9ed820b0d982b",
"assets/assets/images/telephone.png": "91c5bf318e2109f33be1796a061f0d61",
"assets/assets/images/unknown.png": "c16fc070e9b177048e0702bae3c8d11b",
"assets/assets/images/user.png": "45000b334be5509e1a9d4ffef88b5b68",
"assets/assets/images/whatsapp.png": "084699860a79bb3aaed4c37da7870d4c",
"assets/assets/images/wifi.png": "764fe64b30dc6cbfd30eb53f3f566276",
"assets/assets/images/xd_file.png": "17bab2e7f3ce61a706af15cdcc213c88",
"assets/FontManifest.json": "f778dbdda9236fe632af962c33b547a0",
"assets/fonts/MaterialIcons-Regular.otf": "250ea1d7a846ec0251fbd15d2fed4f91",
"assets/NOTICES": "bc6b70fa00a6a687eb0ec474018b9266",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "b035d1e23aa983a5e4bf7f4197526530",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "01d6809cf3c8c6e1b80216ae4ba30b90",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7568ef367df157aa5147e8243c792498",
"/": "7568ef367df157aa5147e8243c792498",
"main.dart.js": "e130872c6e82fd9625c30c769f0c487f",
"manifest.json": "3ae35a369d9a2e0ba8c068e6d36871db",
"version.json": "1f6b3cba9196e01af17d6ab5c1e8b543"};
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
