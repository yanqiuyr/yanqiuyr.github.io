/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/26/hello-world/index.html","a4d78ef21dcb329e1f5b36c05dcd41cb"],["/2023/05/02/数字三角形（JAVA）/index.html","21b042fbbd36b0419fc28b676c02538f"],["/2023/05/05/k倍区间（JAVA）/index.html","c24cb45d896984ef25193022718f23e8"],["/2023/05/05/作物杂交（JAVA）/index.html","a21da61a76c80d221fe8ac00442dee11"],["/2023/05/05/包子凑数（JAVA）/index.html","902871a8c0ed0d32523a2567dd4ee42a"],["/2023/05/05/取球博弈（JAVA）/index.html","9c56ca090b0c12f0c58303e5d0591457"],["/2023/05/05/回文日期（JAVA）/index.html","0ba9e51f2993acdb2865672b1f95c7bf"],["/2023/05/05/砝码称重（JAVA）/index.html","1302ae684cf7ff87aea5a402febd0c60"],["/2023/05/05/等差数列（JAVA）/index.html","509eccba29dac1003ddbd1f0e231b193"],["/2023/05/05/质数拆分（JAVA）/index.html","1e926f81ce29a8026d162d83d28a59ba"],["/2023/05/07/GCD（JAVA）/index.html","ce65d395038787890d7acce954611e57"],["/2023/05/07/七段码（JAVA）/index.html","531ae90f09a13729f3650a4d6a95a1e0"],["/2023/05/07/全排列的价值（JAVA）/index.html","809e318ee354192ca9ab322bba31e1e7"],["/2023/05/07/双向排序（JAVA）/index.html","266901a0dcea216d0b3359f2ca35a3de"],["/2023/05/07/四平方和（JAVA）/index.html","e3c473322893d26442a27f80d6acaa17"],["/2023/05/07/回文日期（JAVA）-1/index.html","31ff19c19f6c770a326cbe239ae94d88"],["/2023/05/07/山（JAVA）/index.html","195707175b62875ceb08206b7dc89507"],["/2023/05/07/数位排序（JAVA）/index.html","4ea44ee54563af7d5d58116810e1f146"],["/2023/05/07/数组切分（JAVA）/index.html","96bdb17843e0b0cccc58c828cdfa3f41"],["/2023/05/07/最优清零方案（JAVA）/index.html","738ef7a46cb6bde960059baeed3e6ea7"],["/2023/05/07/最少刷题数（JAVA）/index.html","98d24836a2ad39e225eb5eb480f0e1d8"],["/2023/05/07/杨辉三角形（JAVA）/index.html","174a0cddce9500ef3ce8ce72c5b5cb66"],["/2023/05/07/求和（JAVA）/index.html","3a8f4de77e3751264d64120491cdb584"],["/2023/05/07/求阶乘（JAVA）/index.html","170be7bc66504d93bc602c4d413ce2a0"],["/2023/05/07/牌型种数（JAVA）/index.html","59bffe3182cdb7d2f39e4c3b31779f8e"],["/2023/05/07/猜字母（JAVA）/index.html","c8571e39e258bcb1850d5b9b6e4300f5"],["/2023/05/07/路径（JAVA）/index.html","b918a6cde9b135c7efb5829a767f1f0d"],["/2023/05/07/青蛙过河（JAVA）/index.html","bb1e4686cee0907b664b6d2a5f3d325e"],["/2023/05/16/重合次数（JAVA）/index.html","e46a5bdb87fb92a8f44fa3cb15c10d1e"],["/2023/05/22/左移右移（JAVA）/index.html","2247dadf00e1d387cf2d599af00453e3"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","877b4c8fe47e7a2eb6b640a742f9680e"],["/2023/05/28/本质上升序列（JAVA）/index.html","2df27611255fc320a59d340f1917220e"],["/2023/06/07/方格填数（JAVA）/index.html","7b27e363970be57e57985302aafe1989"],["/2023/06/09/合根植物（JAVA）/index.html","07a115db7139192eb16340afb3ac9859"],["/2023/07/06/蓝桥杯总结/index.html","8c004fdb3afc6f2eba7a08b5bafbcac8"],["/404.html","d1ce6ef7c0557328b3815beab2cb3abd"],["/about/index.html","9495db7283b1c5ca415041a4d3a15668"],["/archives/2023/04/index.html","4b32bb89168bc19222c93e274be9d16f"],["/archives/2023/05/index.html","3329b19305979c90833ce83343002052"],["/archives/2023/05/page/2/index.html","9bbe2255a3d79e7b238e96bad94d8594"],["/archives/2023/05/page/3/index.html","32f793dc11ebd86dedaa55f2e202ec16"],["/archives/2023/05/page/4/index.html","070841cd944176e521c6ef396fb90081"],["/archives/2023/06/index.html","85ee0898c99d36cc6a72a608f71b4139"],["/archives/2023/07/index.html","7b4af88d08b27129c6fd1110ce4cddc9"],["/archives/2023/index.html","29093d32d29b3a4a2888fc378b07507c"],["/archives/2023/page/2/index.html","ad8217bd0019d70a622ec9988a8d051a"],["/archives/2023/page/3/index.html","65c094bc92a819f9a94b7c566ddb7557"],["/archives/2023/page/4/index.html","362e4f82b030ceb7e2e22b49309a5405"],["/archives/index.html","a2842b8aa4a6cd429fb3cd3e2dacf1f0"],["/archives/page/2/index.html","b586217810af79f5a78e32f91925853c"],["/archives/page/3/index.html","4106323e373ca023010c671db6786eea"],["/archives/page/4/index.html","4d88c08267fd06c2f1346bd5e4ba8161"],["/categories/index.html","559fce12966d1f1d9aac75ed446d9646"],["/categories/日常练习/index.html","372aed92e192ba3c92ffe97cbb03611d"],["/categories/日常练习/page/2/index.html","065b910a69140b6598821f04e5db0cbf"],["/categories/日常练习/page/3/index.html","ebedc02b0c8b1932a7d378d08ceb746b"],["/categories/日常练习/page/4/index.html","66822efe504e5494011d1567c3bb0b0f"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/highlight-dark.css","be3af4b8abf2074e66acb737867c43dc"],["/css/highlight.css","fdd56de5edd1e833674574fdc74bbfe7"],["/css/main.css","c5afb0e463b5e9a284d2cf8aef11a1d2"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/chao.jpg","b82d7643a5eaa0d5027b46851208d212"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/dm01.jpg","db2381f4382bc742e7015737b4e6d2f1"],["/img/dm02.jpg","b8e3925e33e528bbb80a675ef333509d"],["/img/dm03.jpg","0f56fe4f83831cded7cc4023d131e3c2"],["/img/dm04.jpg","8f5371cd8581d8e60c21fd9f80ffc600"],["/img/dm05.jpg","2cebdb01c0190ef4e4554878cfc17b35"],["/img/dm06.jpg","15ba0373af7a42542e606bb771a55038"],["/img/dm07.jpg","b5dfba23012ebc3f3e48ecbf838b8f98"],["/img/dm08.jpg","38bc4d755fe6baf3ee432251b10923ec"],["/img/dm09.jpg","77b717fd128e6841dc4c7be8f6fcb03c"],["/img/dm10.jpg","465435e4e61a3a69673bd510f568d49c"],["/img/dm11.jpg","f19e43f229e6fe5db792b62223e7c6d7"],["/img/dm12.jpg","f4f455a77d88da0d24e29927cd7dfb13"],["/img/dm13.jpg","87b32182db2922c8b261ea2e3f49e60b"],["/img/dm14.jpg","9730bf00b41b66ba176671ff85b36cb5"],["/img/dm15.jpg","3f3d54baab018ca2ffa2836a7a9326b2"],["/img/dm16.jpg","994969249ed843b4e0d2d641c5b8f6d5"],["/img/dm17.jpg","2edc2ed20cb16c51c27e157cc0398388"],["/img/dm18.jpg","47d9ae45e7448ff7a2b4b3774f34a283"],["/img/dm19.jpg","96fb8072317c6966a229e9a1e1128734"],["/img/dm20.jpg","0ccd323ca2641303c9af72a02cca4b7b"],["/img/dongman.jpg","9ffb0c3787ecab0324a3f960c9528b5d"],["/img/dongman01.jpg","30034e3bb88d469f06d390bd2bed863c"],["/img/dongman02.jpg","da49f4c7b9f9790e60a5327a2736885d"],["/img/dongman03.jpg","220826cfa5f48e36e0c5062b29caafb1"],["/img/dongman04.jpg","2674874be506578691d60f37222fa459"],["/img/dongman05.jpg","032d75b42e7c8a1bed36f1540d0ec4c5"],["/img/dongman06.jpg","0b5df7a7d4ba0920b84fccb7d930833e"],["/img/dongman07.jpg","66fa9cf0735a7d5513f272bdc12c3c46"],["/img/erweima.jpg","e661a7b75a502a7141dd742a95dce8f0"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/meiqin.jpg","760ef9ecc61726ca26e61744000d399d"],["/img/nan.jpg","b1517604dd2fbd276a4681b8b003cdc7"],["/img/nv.jpg","09124d07393123cf9a8f11d2f95217be"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/tupian01.png","301f38a27eb23ab4f1919432919d46d3"],["/img/tupian02.png","b26c67a33a2698f7270bb1148aabf94e"],["/img/tupian03.png","5fbb931be6c540903f81bd38aff05a74"],["/img/tupian04.png","331404d6853a89b476e7eba7a9cfe10a"],["/img/tupian05.png","2d2904232445803ba33df540aba23158"],["/img/tupian06.png","a6d9d8a9b6ca310f211f696531171c03"],["/img/tupian07.png","d9c647317b0d28e90866ec3a165a679e"],["/img/tupian08.png","0265abc732cf3f3217e5940f3a3e20eb"],["/img/tupian09.png","0d427aeec51bf7aae9c3204116c18a90"],["/index.html","8a5194b74952ffc701766350aa3f9280"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","605f587be2ab3d36472bb03ac27ede65"],["/js/events.js","7fa076a71a5559d89af6b0c6dfd3a0d2"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","ad8b55840660267494fd4556b378c68b"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/utils.js","46155ec85282b5815b2607e8deb1edca"],["/links/index.html","30fbc1f80fffacc1b89c053b3542b86e"],["/page/2/index.html","04dd0c0c760e3f966511edb606fb7b1d"],["/page/3/index.html","f86f75041c89ab065dc9bcb043d8622d"],["/page/4/index.html","fba487ec7f41c8f1e4a15c03716a6965"],["/playlist/index.html","c5a86756aa992d76e0d6e47ab9e88174"],["/sw-register.js","a3ec0519c0cae387064794ae9896375b"],["/tags/JAVA/index.html","b98719490fc94c409f95fb52970db173"],["/tags/JAVA/page/2/index.html","a17052b41545630fc4466b7ff5df300d"],["/tags/JAVA/page/3/index.html","c86b3db2932ad879111c965c2c132cc1"],["/tags/JAVA/page/4/index.html","d7e6b3ea909a38c4dda69e818a15c8d5"],["/tags/index.html","45d229aba26a0dcb2f14f185b6079905"],["/tags/算法/index.html","d4889ca17f68b3ab0bae7f18d1ed4a5c"],["/tags/算法/page/2/index.html","a3581e4a223da1c73381b75718cbaf5c"],["/tags/算法/page/3/index.html","2a663a42d41a02da98c0e4f1621b0b6a"],["/tags/算法/page/4/index.html","ee988204c8178b9fe2c02cb0911cd9ce"],["/tags/蓝桥杯/index.html","87e9cd53d0bd0b70a4a722d87af11dc9"],["/tags/蓝桥杯/page/2/index.html","f50392fea6c83887c5b72fda207e5662"],["/tags/蓝桥杯/page/3/index.html","607dc48f2d0a62dae059792b1463b1b1"],["/tags/蓝桥杯/page/4/index.html","b0371418bbc89bbaef6af25fc2e56121"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
