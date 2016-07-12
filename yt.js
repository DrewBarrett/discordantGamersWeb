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
                results = '<li>' + item.snippet.title + '</li>';
                $('#results').append(results);
            });
        }
    );
}
