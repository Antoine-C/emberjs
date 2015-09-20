import DS from 'ember-data';

var Dribbles = DS.Model.extend({
    isAsctive: DS.attr('boolean'),
    picture: DS.attr('string'),
    name: DS.attr('string'),
    gender: DS.attr('string'),
    company: DS.attr('string'),
    email: DS.attr('string'),
    address: DS.attr('string')
});

Dribbles.reopenClass({
   FIXTURES: [
       {
           "id": "1",
           "isActive": false,
           "picture": "http://placehold.it/64x64",
           "name": "Adeline Murphy",
           "gender": "female",
           "company": "MEDALERT",
           "email": "adelinemurphy@medalert.com",
           "address": "441 Coleridge Street, Greenock, Texas, 9116"
       },
       {
           "id": "2",
           "isActive": true,
           "picture": "http://placehold.it/64x64",
           "name": "Evangelina Knapp",
           "gender": "female",
           "company": "BUZZNESS",
           "email": "evangelinaknapp@buzzness.com",
           "address": "531 Louise Terrace, Draper, California, 2493"
       },
       {
           "id": "3",
           "isActive": true,
           "picture": "http://placehold.it/64x64",
           "name": "Kelly Parker",
           "gender": "male",
           "company": "EXOSPEED",
           "email": "kellyparker@exospeed.com",
           "address": "902 Manhattan Court, Beechmont, Kentucky, 5937"
       },
       {
           "id": "4",
           "isActive": true,
           "picture": "http://placehold.it/64x64",
           "name": "Mccall Yang",
           "gender": "male",
           "company": "PETICULAR",
           "email": "mccallyang@peticular.com",
           "address": "477 Oliver Street, Boomer, Alaska, 7389"
       },
       {
           "id": "5 ",
           "isActive": false,
           "picture": "http://placehold.it/64x64",
           "name": "Barlow Dean",
           "gender": "male",
           "company": "BULLJUICE",
           "email": "barlowdean@bulljuice.com",
           "address": "478 Huntington Street, Faxon, Idaho, 7595"
       }
       ]
    });

export default Dribbles;