const CACHE_NAME='dark-stain-v4';
const FILES=['./','./index.html','./manifest.json','./cover.png','./icon-192.png','./icon-512.png','./The_Dark_Stain_on_Todays_Society_Laymans_Language.pdf'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(FILES)).catch(()=>{}));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(list=>{for(const c of list)if('focus'in c)return c.focus();if(clients.openWindow)return clients.openWindow('./')}))});
