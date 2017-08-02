import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  columns: [
    {
      propertyName : 'code',
      title        : 'Access Code'
    },
    {
      propertyName : 'accessUrl',
      title        : 'Access Code URL'
    },
    {
      propertyName : 'validTill',
      template     : 'components/ui-table/cell/cell-validity',
      title        : 'Validity'
    },
    {
      propertyName : 'isActive',
      template     : 'components/ui-table/cell/cell-label',
      title        : 'Status'
    },
    {
      title            : 'Action',
      template         : 'components/ui-table/cell/cell-code-buttons',
      disableSorting   : true,
      disableFiltering : true
    }
  ]
});
