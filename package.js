Package.describe({
	summary: "Twix.js is a Moment.js plugin for working with time ranges. Use it to manipulate, interrogate, and intelligently format a block of time."
});

Package.on_use(function(api, where) {
	where = where || ['client', 'server'];
	api.use("moment", where);
	if (api.imply) {
		api.imply("moment", where);
	}
	api.add_files('lib/twix/bin/twix.js', where);
	api.add_files('lib/twix/bin/lang.js', where);
	api.add_files('moment-twix.js', where);
	if (api.export) {
		api.export('Twix');
	}
});