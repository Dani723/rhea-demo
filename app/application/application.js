import Ember from 'ember';
import log from 'log';
import application from './application.hbs!';

Ember.TEMPLATES.application = application;

export var ApplicationRoute =  Ember.Route.extend({
  rhea: Ember.inject.service(),
  model: function(params, transaction) {
    return this.get('rhea').loadResources();
  }
});

export var ApplicationController =  Ember.Controller.extend({
  layers: Ember.inject.service('rhea-layers'),
  rhea: Ember.inject.service('rhea'),
  authN: Ember.inject.service('rhea-authN'),

  rheaIRIChanged: function() {
    this.set('iri', this.get('rheaIRI'));
  }.observes('rheaIRI'),

  actions: {
    goto(iri) {
      iri = iri || this.get('iri');

      if(iri) {
        this.transitionToRoute('rhea', iri);
      } else {
        this.transitionToRoute('index');
      }
    }
  }
});

export var ApplicationView = Ember.Component.extend({
  classNames: ['vclViewport']
});
