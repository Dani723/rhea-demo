"use strict";
import log from 'log';

import Ember from 'ember';
import * as mappings from './mappings';
import Rhea from 'rhea';
import { RheaRoute, RheaController } from 'rhea';

var RheaApp = Ember.Application.extend(mappings, { RheaRoute, RheaController }).create();

RheaApp.Router.map(function() {
  this.route('rhea', {path: '/*iri'});
});

// Initializes all rhea services
var rhea = Rhea.initialize('http://your-app-url', {
  baseClassURL: 'http://your-default-class-url'
});

// Expose some services to the window object for debugging
window.RheaApp = RheaApp;
window.rhea = rhea;
