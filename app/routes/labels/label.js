import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    let local = localStorage['ember-code-challenge'];
    let object = JSON.parse(local)
    // console.log(object.label.records[params['label_id']])
    let label = this.store.peekAll('label')
    console.log(label)
    console.log(label.content)
    return object.label.records[params['label_id']]

  }
})
