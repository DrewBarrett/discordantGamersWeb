// Get Uploads Playlist
$.get(
   "https://www.googleapis.com/youtube/v3/channels", {
       part: 'contentDetails',
       forUsername: 'xSCHORCHER999x',
       key: 'AIzaSyBehqGZcuf5LyAXbrZTghunvEZtFVIlNSQ'
   },
   function (data) {
       $.each(data.items, function (i, item) {
           pid = item.contentDetails.relatedPlaylists.uploads;
           getVids(pid);
       });
   }
);

//Get Videos
function getVids(pid) {
    $.get(
        "https://www.googleapis.com/youtube/v3/playlistItems", {
            part: 'snippet',
            maxResults: 50,
            playlistId: pid,
            key: 'AIzaSyBehqGZcuf5LyAXbrZTghunvEZtFVIlNSQ'
        },
        function (data) {
            var results;
            $.each(data.items, function (i, item) {
                results =
                    '<a href=\"' + item.snippet.resourceId.videoId + '\" class=\"videopane\">' +
                        '<div class=\"media panel-body videopane\">' +
                            '<div class=\"media-left col-md-6 col-xs-10\">' +
                                '<img class=\"media-object img-responsive\" src=\"' + item.snippet.thumbnails.medium.url + '" alt=\" ' + item.snippet.title + '\" height=\"180\" width=\"320\">' +
                            '</div>' +
                            '<div class=\"media-body videopane\">' +
                                '<h4 class=\"media-heading videopane\">' + item.snippet.title + '</h4>' + item.snippet.description +
                            '</div>' +
                        '</div>' +
                   ' </a>'
                $('#results').append(results);
            });
        }
    );
}
