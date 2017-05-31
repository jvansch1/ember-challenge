import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let object = JSON.parse(localStorage['ember-code-challenge'])
    let array = [];
    Object.keys(object.artist.records).forEach(key => {
      array.push(object.artist.records[key])
    })
    console.log(array);
    return array;



  }
})
