import Ember from 'ember'

export default Ember.Controller.extend({
  actions: {
    addAlbum: function() {
      let name = this.get("name");
      let newAlbum = this.store.createRecord('album', {
        name: name
      })

      newAlbum.save().then(() => {
        this.transitionToRoute('albums')
      })
    }
  }
})
