import { moduleForModel, test } from 'ember-qunit';

moduleForModel('event', 'Unit | Model | event', {
  needs: [
    'model:event-type',
    'model:event-topic',
    'model:event-sub-topic',
    'model:session',
    'model:sponsor',
    'model:microlocation',
    'model:track',
    'model:ticket',
    'model:social-link',
    'model:speakers-call',
    'model:tax',
    'model:event-copyright',
    'model:session-type',
    'model:user',
    'model:discount-code'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
