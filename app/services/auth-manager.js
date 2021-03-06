import Ember from 'ember';

const { Service, computed, observer, inject: { service } } = Ember;

export default Service.extend({

  session : service(),
  metrics : service(),
  store   : service(),

  currentUser: computed('session.data.currentUserFallback.id', 'currentUserModel', function() {
    if (this.get('currentUserModel')) {
      return this.get('currentUserModel');
    }
    if (this.get('session.data.currentUserFallback')) {
      let userModel = this.get('store').peekRecord('user', this.get('session.data.currentUserFallback.id'));
      if (!userModel) {
        userModel = this.get('store').createRecord('user', this.get('session.data.currentUserFallback'));
        userModel.set('id', this.get('session.data.currentUserFallback.id'));
      }
      return userModel;
    }
    return null;
  }),

  userAuthenticatedStatusChange: observer('session.isAuthenticated', function() {
    if (!this.get('session.isAuthenticated')) {
      this.identifyStranger();
    }
  }),

  currentUserChangeListener: observer('currentUser', function() {
    if (this.get('currentUser') && this.get('session.isAuthenticated')) {
      this.identify();
    }
  }),

  getTokenPayload() {
    const token = this.get('session.session.content.authenticated.access_token');
    if (token && token !== '') {
      return JSON.parse(atob(token.split('.')[1]));
    }
    return null;
  },

  logout() {
    this.get('session').invalidate();
    this.set('currentUserModel', null);
    this.get('session').set('data.currentUserFallback', null);
  },

  identify() {
    let currentUser = this.get('currentUser');
    if (currentUser) {
      this.get('metrics').identify({
        distinctId : currentUser.id,
        email      : currentUser.email
      });
    }
  },

  identifyStranger() {
    this.get('metrics').identify(null);
  },

  initialize() {
    if (this.get('session.isAuthenticated')) {
      this.identify();
      if (this.get('session.data.currentUserFallback.id')) {
        this.get('store')
          .findRecord('user', this.get('session.data.currentUserFallback.id'))
          .then(user => this.set('currentUserModel', user));
      }
    } else {
      this.identifyStranger();
    }
  }
});
