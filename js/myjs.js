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
}
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/plus.login');
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("status").innerHTML = "Signed in";
  } else {
    document.getElementById("status").innerHTML = "Not signed in";
  }
});
function SignUp() {
  var email = $("#InputEmail").val();
  var name = $("#InputName").val();
  var pw = $("#InputPassword").val();
  firebase.auth().createUserWithEmailAndPassword(email, pw).then(function(user){
    var profile = {
      displayName: name
    };
    user.updateProfile(profile);
    });
  };
 function LogIn() {
   var email = $("#LoginEmail").val();
   var email = $("#LoginEmail").val();
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode, errorMessage);
});
};
function SignOut() {
firebase.auth().signOut()
}
