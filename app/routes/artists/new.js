import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let local = localStorage['ember-code-challenge']
    let object = JSON.parse(local)
    let array = [];
    Object.keys(object.label.records).forEach(key => {
      array.push(object.label.records[key])
    })
    return array
  }
});
