"use strict";
import log from 'log';

import Ember from 'ember';
import * as mappings from './mappings';
import Rhea from 'rhea';
import { RheaRoute, RheaController } from 'rhea';

import 'components/timezone';
import 'components/bulkimport';
import 'components/userlist';

var RheaApp = Ember.Application.extend(mappings, { RheaRoute, RheaController }).create();

RheaApp.Router.map(function() {
  this.route('rhea', {path: '/*iri'});
});

// Initializes all rhea services
var rhea = Rhea.initialize('https://egstuttgart.invend.eu', {
  baseClassURL: 'http://egstuttgart.invend.eu'
});

// Expose some services to the window object for debugging
window.RheaApp = RheaApp;
window.rhea = rhea;

// Basic ops:
// RetrieveResourceOperation
// AppendResourceOperation
// CreateOrReplaceOperation
// UpdateResourceOperation
// DeleteResourceOperation

Rhea.operations.override({
  override: 'RetrieveResourceOperation',
  op: 'RetrieveResourceOperationTimezone',
  component: 'demo-timezone',
  targetType: 'http://www.w3.org/2006/timezone#TimeZone',
  fetch: true
});

Rhea.operations.add({
  op: 'BulkImportOperation',
  component: 'demo-bulkimport',
  label: 'Bulk import',
  icon: 'fa-cloud-upload'
});

Rhea.operations.override({
  override: 'RetrieveResourceOperation',
  op: 'RetrieveResourceOperationUserlist',
  component: 'demo-userlist',
  fetch: req=>req.afterSuccess(Rhea.collection()),
  targetType: 'http://www.w3.org/ns/hydra/core#PagedCollection',
  prioritize: (resInfo, rhea) => rhea.compareType(resInfo.member.targetType, '/classes/User')
});
