function parseImageIdFromUrl() {
    return window.location.pathname.match(/gallery\/(\w+)/)[1];
}

function generateSpanForLastSeen() {
    var span = $('<span />');
    span.attr('class', 'last_seen_datetime');
    span.attr('style', 'color: orange;');
    return span
}

function formatTimestamp(timestamp) {
    return new Date(timestamp).format("mmm d, yyyy HH:MM")
}

function deployImageChangeObserver() {
    var current_location = window.location.href;

    var observer_target = document.querySelector('title');
    var observer = new MutationObserver(function (mutations) {
        if (current_location != window.location.href) {
            current_location = window.location.href;
            imgurAlreadySeenExecute();
        }
    });
    observer.observe(observer_target, {childList: true});
}

function imgurAlreadySeenExecute() {
    var current_image_id = parseImageIdFromUrl();
    if (current_image_id) {
        refreshImageLastSeen(current_image_id);
        storeImageLastSeen(current_image_id);
        updateNextImagesLastSeen();
    }
}

$(document).ready(function () {
    if (window.location.href.match(/imgur\.com\/gallery\/\w+/)) {
        imgurAlreadySeenExecute();
        deployImageChangeObserver();
    }
});