import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addLabel: function() {
      let name = this.get('name');
      let newLabel = this.store.createRecord('label', {
        name: name
      })
      this.setProperties({
        name: ''
      })
      newLabel.save().then(() => {
        this.transitionToRoute('labels')
      })
    }
  }
})
