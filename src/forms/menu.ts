import { Form, SpacerBox } from '@termifier/core';

import { Header, Loading } from './components';

export const MenuForm = async (): Promise<Form> => {
	const form = new Form();

	form.addBox(await Header());
	form.addBox(new SpacerBox({ space: 3 }));
	form.addBox(await Loading());

	return form;
};
