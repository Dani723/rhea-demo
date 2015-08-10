import Ember from 'ember';
import {registerComponent, RheaCollection} from 'rhea';
import layout from './userlist.hbs!';

export var DemoUserlist = RheaCollection.extend({
  layout,
  tagName: ''
});

registerComponent('demo-userlist', DemoUserlist);
