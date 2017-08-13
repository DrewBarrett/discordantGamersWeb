﻿// Get Uploads Playlist
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
            var results = "";
            $.each(data.items, function (i, item) {
                results +=
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
            });
            function template(data) {
                var html = '<ul>';
                $.each(data, function(index, item){
                    html += '<li>'+ item +'</li>';
                });
                html += '</ul>';
                return html;
            }
            $('#pagination-container').pagination({
                dataSource: [1, 2, 3, 4, 5, 6, 7, 195],
                callback: function(data, pagination) {
                    var html = template(data);
                    $('#results').html(html);
                }
            })
        }
    );
}
