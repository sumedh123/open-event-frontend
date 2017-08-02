import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  templateName: 'events/view/tickets/access-codes/list',
  model() {
    return this.modelFor('events.view').query('accessCodes', {});
  }
});
