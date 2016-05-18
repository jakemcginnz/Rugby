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
