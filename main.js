window.onload = function() {
  var http = new XMLHttpRequest();

  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
      console.log(JSON.parse(http.response));
    }
  }

  http.open('GET', 'posts.json', true);
  http.send();
}

$(document).ready(function() {
  function callback(data) {
    console.log(data);
  }
  $.get('posts.json', callback);


  function handleError(jqXHR, textStatus, error) {
    console.log(error);
  }

  $.ajax({
    type: 'GET',
    url: 'posts.json',
    success: callbackPosts,
    error: handleError
  });

  function callbackPosts(data) {
    console.log(data);
    $.ajax({
      type: 'GET',
      url: 'tags.json',
      success: callbackTags,
      error: handleError
    });
  }

  function callbackTags(data) {
    console.log(data);
    $.ajax({
      type: 'GET',
      url: 'users.json',
      success: function(data) {
        console.log(data);
      },
      error: handleError
    });
  }
});