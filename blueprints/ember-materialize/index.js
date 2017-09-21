/*jshint node:true*/
module.exports = {
    description: 'ember-materialize installation blueprint',
    normalizeEntityName: function() {},
    beforeInstall: function() {
      var that = this;
      return that.addBowerPackageToProject('materialize', '0.98.0').then(function() {
          return that.addAddonsToProject({
              packages: [
                  { name: 'ember-cli-sass', target: '6.1.1' },
                  { name: 'ember-inputmask', target: '0.4.0-beta.5' }
              ]
          });
      });
    }
};
