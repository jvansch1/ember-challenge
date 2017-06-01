import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    let local = localStorage['ember-code-challenge'];
    let object = JSON.parse(local)
    console.log(object.artist.records[params['artist_id']])
    return object.artist.records[params['artist_id']]

  }
})
