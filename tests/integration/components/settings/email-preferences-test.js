import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('settings/email-preferences-section', 'Integration | Component | settings/email preferences', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{settings/email-preferences-section}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#settings/email-preferences-section}}
      template block text
    {{/settings/email-preferences-section}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
