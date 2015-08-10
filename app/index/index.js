import Ember from 'ember';
import log from 'log';
import index from './index.hbs!';

Ember.TEMPLATES.index = Ember.HTMLBars.template(index);

export var IndexRoute = Ember.Route.extend({
  rhea: Ember.inject.service(),
  setupController: function(controller, model) {
    controller.set('iri', this.get('rhea').apiDoc.mainURL);
  }
});

export var IndexController = Ember.Controller.extend({
  application: Ember.inject.controller(),
  iriChanged: function() {
    this.set('application.iri', this.get('iri'));
  }.observes('iri')
});
