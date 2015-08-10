import Ember from 'ember';
import {registerComponent} from 'rhea';
import layout from './bulkimport.hbs!';

export var DemoBulkimport = Ember.Component.extend({
  layout,
  tagName: '',
  response: null
});

registerComponent('demo-bulkimport', DemoBulkimport);
