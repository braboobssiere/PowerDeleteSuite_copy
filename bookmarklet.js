javascript: (function() {
  window.bookmarkver = '1.4';
  var isReddit = document.location.hostname.split('.').slice(-2).join('.') === 'reddit.com';
  var isOverview = !!document.location.href.match(/\/overview\b/i);

  if (isReddit && isOverview) {
    var cacheBustUrl = 'https://raw.githubusercontent.com/braboobssiere/PowerDeleteSuite_copy/master/powerdeletesuite.js?' + (new Date().getDate());

    fetch(cacheBustUrl)
      .then(function(response) {
        return response.text();
      })
      .then(function(data) {
        var script = document.createElement('script');
        script.id = 'pd-script';
        script.innerHTML = data;
        document.getElementsByTagName('head')[0].appendChild(script);
      })
      .catch(function() {
        alert('Error retrieving PowerDeleteSuite from GitHub');
      });
  } else if (confirm('This script can only be run from your own user profile on Reddit. Would you like to go there now?')) {
    document.location = 'https://old.reddit.com/user/me/overview';
  } else {
    alert('Please go to your Reddit profile before running this script');
  }
})();


