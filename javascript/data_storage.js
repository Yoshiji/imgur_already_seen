function storeImageLastSeen(image_id) {
    var obj = {};
    obj[image_id] = Date.now();
    chrome.storage.local.set(obj);
}

function getImageLastSeenFromImageId(image_id, callback) {
    chrome.storage.local.get(image_id, function (hash) {
        if (hash[image_id]) {
            callback(hash[image_id]);
        }
    });
}
