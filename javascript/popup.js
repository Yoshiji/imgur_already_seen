document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('reset_all_last_seen').addEventListener('click', function(e) {
        chrome.storage.local.clear();
        this.remove();
        document.getElementsByTagName('body')[0].innerText = 'All cleared!' + document.getElementsByTagName('body')[0].innerText;
    });
});

