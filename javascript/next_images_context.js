function updateNextImagesLastSeen() {
    var $current_image_link = $('.items.list a.selected');
    var next_images_count = 50;
    var prev_images_count = 10;

    $current_image_link.prevAll("*:lt(" + prev_images_count + ")").each(function (i, element) {
        refreshImageThumbnailLastSeen(element);
    });
    refreshImageThumbnailLastSeen($current_image_link[0]);
    $current_image_link.nextAll("*:lt(" + next_images_count + ")").each(function (i, element) {
        refreshImageThumbnailLastSeen(element);
    });
}

function refreshImageThumbnailLastSeen(html_element) {
    var image_id = html_element.id.replace('item-', '');
    getImageLastSeenFromImageId(image_id, function (timestamp) {
        var span = generateSpanForLastSeen();
        span.html('[' + formatTimestamp(timestamp) + ']');
        $('.sg-list-metadata .last_seen_datetime', html_element).remove();
        $('.sg-list-metadata', html_element).prepend(span)
    })
}