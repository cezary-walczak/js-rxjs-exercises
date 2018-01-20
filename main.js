window.onload = function() {
  var http = new XMLHttpRequest();

  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
      // console.log(JSON.parse(http.response));
    }
  }

  http.open('GET', 'posts.json', true);
  http.send();
}

$(document).ready(function() {
  function callback(data) {
    // console.log(data);
  }
  $.get('posts.json', callback);


  function handleError(jqXHR, textStatus, error) {
    // console.log(error);
  }

  $.ajax({
    type: 'GET',
    url: 'posts.json',
    success: callbackPosts,
    error: handleError
  });

  function callbackPosts(data) {
    // console.log(data);
    $.ajax({
      type: 'GET',
      url: 'tags.json',
      success: callbackTags,
      error: handleError
    });
  }

  function callbackTags(data) {
    // console.log(data);
    $.ajax({
      type: 'GET',
      url: 'users.json',
      success: function(data) {
        // console.log(data);
      },
      error: handleError
    });
  }
});


window.onload = function() {
  function get(url) {
    return new Promise(function(resolve, reject) {
      var xhttp = new XMLHttpRequest();
      xhttp.open('GET', url, true);
      xhttp.onload = function() {
        if(xhttp.status == 200) {
          resolve(JSON.parse(xhttp.response));
        } else {
          reject(xhttp.statusText);
        }
      };
      xhttp.onerror = function() {
        reject(xhttp.statusText);
      };
      xhttp.send();
    });
  }

  var promise = get('posts.json')
  .then(function(posts) {
    // console.log(posts);
    return get('tags.json');
  })
  .then(function(tags) {
    // console.log(tags);
    return get('users.json');
  })
  .then(function(users) {
    // console.log(users);
  })
  .catch(function(error) {
    // console.log(error);
  });
}

$(document).ready(function() {
  $.get('posts.json')
  .then(function(posts) {
    // console.log(posts);
    return $.get('tags.json');
  })
  .then(function(posts) {
    // console.log(posts);
    return $.get('users.json');
  })
  .then(function(posts) {
    // console.log(posts);
  });
});


window.onload = function() {
  genWrap(function* () {
    var posts = yield $.get('posts.json');
    console.log(posts);
    var tags = yield $.get('tags.json');
    console.log(tags);
    var users = yield $.get('users.json');
    console.log(users);
  });
  function genWrap(generator) {
    var gen = generator();
    function handle(yielded) {
      if(!yielded.done) {
        yielded.value.then(function(data) {
          return handle(gen.next(data));
        })
      }
    }
    return handle(gen.next());
  }
}