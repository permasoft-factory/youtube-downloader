import { TextBox } from '@termifier/core';

import { centerContent } from '@termifier/utilities';

export const Menu = async (): Promise<TextBox> => {
	const textBox = new TextBox();

	textBox.addContent(centerContent(`Hello world !`));

	return textBox;
};
