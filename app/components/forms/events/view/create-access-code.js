import Ember from 'ember';
import FormMixin from 'open-event-frontend/mixins/form';

const { Component, computed } = Ember;

export default Component.extend(FormMixin, {
  getValidationRules() {
    return {
      inline : true,
      delay  : false,
      on     : 'blur',

      fields: {
        accessCode: {
          identifier : 'access_code',
          rules      : [
            {
              type   : 'empty',
              prompt : this.l10n.t('Please enter access code')
            }
          ]
        },
        numberOfAccessTickets: {
          identifier : 'number_of_access_tickets',
          rules      : [
            {
              type   : 'empty',
              prompt : this.l10n.t('Please enter number of tickets')
            },
            {
              type   : 'number',
              prompt : this.l10n.t('Please enter proper number of tickets')
            }
          ]
        },
        allTicketTypes: {
          identifier : 'all_ticket_types',
          rules      : [
            {
              type   : 'checked',
              propmt : this.l10n.t('Please select the appropriate choices')
            }
          ]
        },
        min: {
          identifier : 'min',
          optional   : true,
          rules      : [
            {
              type   : 'number',
              propmt : this.l10n.t('Please enter the proper number')
            }
          ]
        },
        max: {
          identifier : 'max',
          optional   : true,
          rules      : [
            {
              type   : 'number',
              propmt : this.l10n.t('Please enter the proper number')
            }
          ]
        },
        accessLink: {
          identifier : 'access_link',
          optional   : true,
          rules      : [
            {
              type   : 'url',
              propmt : this.l10n.t('Please enter a valid url')
            }
          ]
        }
      }
    };
  },
  accessCode : '',
  accessUrl  : computed('access_code', function() {
    const params = this.get('routing.router.router.state.params');
    // console.log(this.get('routing.router').generate('public', params['events.view'].event_id, { queryParams: { access_code: this.get('access_code') } }));
    const access_url = (location.origin + this.get('routing.router').generate('public', params['events.view'].event_id, { queryParams: { access_code: this.get('access_code') } }) || ' ');
    if (access_url !== undefined) {
      return access_url;
    }
  }),
  actions: {
    submit() {
      this.onValid(() => {
      });
    }
  }
});
