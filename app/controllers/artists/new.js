import Ember from 'ember'

export default Ember.Controller.extend({
  actions: {
    addArtist: function() {
      let name = this.get("name");
      let newArtist = this.store.createRecord('artist', {
        name: name
      })

      newArtist.save().then(() => {
        this.transitionToRoute('artists')
      })
    }
  }
})
