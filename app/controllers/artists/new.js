import Ember from 'ember'

export default Ember.Controller.extend({
  actions: {
    addArtist: function() {
      let name = this.get("name");
      let label = document.getElementById('label-dropdown')
      let labelId = label.options[label.options.selectedIndex].value
      let labelObject = JSON.parse(localStorage['ember-code-challenge']).label.records[labelId]
      console.log(labelObject)
      let newArtist = this.store.createRecord('artist', {
        name: name,
        label: labelObject
      })

      newArtist.save().then((artist) => {
        this.transitionToRoute('artists')
      })
    }
  }
})
