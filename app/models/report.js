import DS from 'ember-data';

var Report = DS.Model.extend({
	name: DS.attr(),
  	description: DS.attr()
});

Report.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: "Report 1",
            description: "blah"
        }
    ]
});

export default Report;
