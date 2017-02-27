import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('em-collapsible-header', 'Integration | Component | em collapsible header', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{em-collapsible-header}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#em-collapsible-header}}
      template block text
    {{/em-collapsible-header}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
