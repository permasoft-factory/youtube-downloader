import { Form, SpacerBox } from '@termifier/core';

import { Header, Menu } from '../components';

export const MenuForm = async (): Promise<Form> => {
	const form = new Form();

	form.addBox(new SpacerBox({ space: 2 }));
	form.addBox(await Header());
	form.addBox(new SpacerBox({ space: 2 }));
	form.addBox(await Menu());

	return form;
};
