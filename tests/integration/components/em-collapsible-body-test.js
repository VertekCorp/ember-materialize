import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('em-collapsible-body', 'Integration | Component | em collapsible body', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{em-collapsible-body}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#em-collapsible-body}}
      template block text
    {{/em-collapsible-body}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
