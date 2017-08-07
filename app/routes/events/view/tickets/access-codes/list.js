import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  titleToken() {
    switch (this.get('params.access_status')) {
      case 'active':
        return this.l10n.t('Active');
      case 'inactive':
        return this.l10n.t('Inactive');
    }
  },
  controllerName: 'events.view.tickets.access-codes.index',
  model(params) {
    if (params.access_status === 'active') {
      return this.modelFor('events.view').query('accessCodes', {
        filter: [
          {
            name : 'is-active',
            op   : 'eq',
            val  : true
          }
        ],
        'page[size]': 1
      });
    } else if (params.access_status === 'inactive') {
      return this.modelFor('events.view').query('accessCodes', {
        filter: [
          {
            name : 'is-active',
            op   : 'eq',
            val  : false
          }
        ],
        'page[size]': 1
      });
    }
    else {
      return this.modelFor('events.view').query('accessCodes', {});
    }
  }
});
