function refreshImageLastSeen(image_id) {
    $('.post-container .post-title-container .last_seen_datetime').remove();

    getImageLastSeenFromImageId(image_id, function (timestamp) {
        var span = generateSpanForLastSeen();
        span.html("Last seen: " + formatTimestamp(timestamp));
        $('.post-container .post-title-container').first().append(span);
    });
}