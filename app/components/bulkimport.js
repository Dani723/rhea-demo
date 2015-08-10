import Ember from 'ember';

import {registerComponent} from 'rhea';

import layout from './timezone.hbs!';

export var DemoTimezone = Ember.Component.extend({
  layout,
  tagName: '',
  response: null
});

registerComponent('demo-timezone', DemoTimezone);
