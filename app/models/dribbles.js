import DS from 'ember-data';

var Dribbles = DS.Model.extend({
    isNew: DS.attr('boolean'),
    picture: DS.attr('string'),
    user: DS.belongsTo('user', { async: true })
});

Dribbles.reopenClass({
   FIXTURES: [
       {
           "id": "1",
           "isNew": false,
           "picture": "http://placehold.it/250x150",
           "user": 1
       },
       {
           "id": "2",
           "isNew": true,
           "picture": "http://placehold.it/250x150",
           "user": 2           
       },
       {
           "id": "3",
           "isNew": true,
           "picture": "http://placehold.it/250x150",
           "user": 2
       },
       {
           "id": "4",
           "isNew": true,
           "picture": "http://placehold.it/250x150",
           "user": 3
       },
       {
           "id": "5 ",
           "isNew": false,
           "picture": "http://placehold.it/250x150",
           "user": 4
       }
       ]
    });

export default Dribbles;