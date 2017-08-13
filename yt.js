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
            var resultArray = [];
            $.each(data.items, function (i, item) {
                var results =
                    '<div class=\"panel panel-default videopane social-footer\">' +
                        '<a href=\"https://www.youtube.com/watch?v=' + item.snippet.resourceId.videoId + '\" class=\"videopane\">' +
                            '<div class=\"media panel-body videopane\">' +
                                '<div class=\"media-left col-md-6 col-xs-10\">' +
                                    '<img class=\"media-object img-responsive\" src=\"' + item.snippet.thumbnails.medium.url + '" alt=\" ' + item.snippet.title + '\" height=\"180\" width=\"320\">' +
                                '</div>' +
                                '<div class=\"media-body videopane\">' +
                                    '<h4 class=\"media-heading videopane\">' + item.snippet.title + '</h4>' + item.snippet.description +
                                '</div>' +
                            '</div>' +
                       ' </a>' +
                '</div>'
                resultArray.push(results);
            });
            function template(data) {
                var html = '';
                $.each(data, function(index, item){
                    html += ''+ item +'';
                });
                html += '';
                return html;
            }
            $('#pagination-container').pagination({
                dataSource: resultArray,
                callback: function(data, pagination) {
                    var html = template(data);
                    $('#results').html(html);
                }
            })
            $('#pagination-container').getElementsByTagName('ul')[0].addClass('pagination')
        }
    );
}
