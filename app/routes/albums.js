import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let object = JSON.parse(localStorage['ember-code-challenge'])
    let array = [];
    Object.keys(object.album.records).forEach(key => {
      array.push(object.album.records[key])
    })
    return array;



  }
})
