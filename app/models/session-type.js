import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { hasMany, belongsTo } from 'ember-data/relationships';

export default Model.extend({
  name   : attr('string'),
  length : attr('string', { defaultValue: '00:30' }),

  event    : belongsTo('event'),
  sessions : hasMany('session')
});
