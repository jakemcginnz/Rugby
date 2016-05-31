function makeApiCall() {
  var apiQuery = gapi.client.analytics.data.ga.get({
    'ids': TABLE_ID,
    'start-date': '2010-01-01',
    'end-date': '2010-01-15',
    'metrics': 'ga:sessions',
    'dimensions': 'ga:source,ga:keyword',
    'sort': '-ga:sessions,ga:source',
    'filters': 'ga:medium==organic',
    'max-results': 25
  });
  // ...
var status
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/plus.login');
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("signed in");
    document.getElementById("signInStatus").innerHTML = "Signed in";
  } else {
    console.log("not signed in");
    document.getElementById("signInStatus").innerHTML = "Not signed in";
  }
});
