// Get Uploads Playlist
//Get Videos
function getVids(e){$.get("https://www.googleapis.com/youtube/v3/playlistItems",{part:"snippet",maxResults:50,playlistId:e,key:"AIzaSyBehqGZcuf5LyAXbrZTghunvEZtFVIlNSQ"},function(e){function t(e){var t=""
return $.each(e,function(e,a){t+=""+a}),t+=""}var a=[]
$.each(e.items,function(e,t){var i='<div class="panel panel-default videopane social-footer"><a href="https://www.youtube.com/watch?v='+t.snippet.resourceId.videoId+'" class="videopane"><div class="media panel-body videopane"><div class="media-left col-md-6 col-xs-10"><img class="media-object img-responsive" src="'+t.snippet.thumbnails.medium.url+'" alt=" '+t.snippet.title+'" height="180" width="320"></div><div class="media-body videopane"><h4 class="media-heading videopane">'+t.snippet.title+"</h4>"+t.snippet.description+"</div></div> </a></div>"
a.push(i)}),$("#pagination-container").pagination({dataSource:a,pageSize:4,callback:function(e,a){var i=t(e)
$("#results").html(i),document.getElementById("pagination-container").getElementsByTagName("ul")[0].className+="pagination"}})})}$.get("https://www.googleapis.com/youtube/v3/channels",{part:"contentDetails",forUsername:"xSCHORCHER999x",key:"AIzaSyBehqGZcuf5LyAXbrZTghunvEZtFVIlNSQ"},function(e){$.each(e.items,function(e,t){pid=t.contentDetails.relatedPlaylists.uploads,getVids(pid)})})
