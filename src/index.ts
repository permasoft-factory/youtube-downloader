import { MenuForm } from './forms';

import { clearTerminal } from '@termifier/core';

(async () => {
    const updaterForm = await MenuForm();

    clearTerminal();
    updaterForm.render();
})();