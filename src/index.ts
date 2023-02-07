import { MenuForm } from './forms';

import { App, clearTerminal } from '@termifier/core';

const app = new App({ name: 'Youtube Downloader' });

(async () => {
	const menuForm = await MenuForm();
	app.setForm(menuForm);

	clearTerminal();
	app.run();
})();
