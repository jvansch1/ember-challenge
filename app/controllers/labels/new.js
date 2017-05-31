import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addLabel: function() {
      let name = this.get('name');
      // alert(name)
      let newTask = this.store.createRecord('label', {
        name: name
      })
      // alert(newTask)
      newTask.save()

    }
  }
})
