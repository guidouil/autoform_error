if (Meteor.isClient) {
  Template.hello.helpers({
    quizId: function(){
      return 'bogusId';
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

TheCollection = new Meteor.Collection('theCollection');

TheCollection.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});

TheCollection.deny({
  update: function (userId, doc, fields, modifier) {
    return true;
  }
});

var Schemas = {};

Schemas.TheCollection = new SimpleSchema({
   level1: {
      type: Array,
      optional: true
   },
   "level1.$": {
      type: Object
   },
   "level1.$.level2a": {
      type: String
   },
   "level1.$.level2b": {
      type: Array,
      optional: true
   },
   "level1.$.level2b.$": {
      type: Object
   },
   "level1.$.level2b.$.level3a": {
      type: String
   },
   "level1.$.level2b.$.level3b": {
      type: String
   }
});

TheCollection.attachSchema(Schemas.TheCollection);
