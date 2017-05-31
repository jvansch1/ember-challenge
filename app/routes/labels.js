import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let local = localStorage['ember-code-challenge']
    let object = JSON.parse(local)
    let array = []
    // console.log(object.label.records)
    Object.keys(object.label.records).forEach(key => {
      array.push(object.label.records[key])
    })
    // console.log(array)
    // console.log(object)
    // console.log(localStorage['ember-code-challenge'])
    return array;

  }
});
