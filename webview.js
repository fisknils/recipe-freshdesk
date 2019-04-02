'use strict';

module.exports = Franz => {
	const getMessages = function getMessages() {
		$.get('/api/_/tickets?filter=unresolved',(data)=> {
			Franz.setBadge(data.tickets.length);
		});
	};

	Franz.loop(getMessages);


/* block popups (prevents freshconnect from opening in a new window) */
	window.open = (function(url, name) {
		console.log(`blocked window.open(${url}, ${name})`);
	});
};