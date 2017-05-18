import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('settings/contact-info-section', 'Integration | Component | settings/contact info', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{settings/contact-info-section}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#settings/contact-info-section}}
      template block text
    {{/settings/contact-info-section}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
