import { TextBox } from '@termifier/core';

import { link } from 'ansi-escapes';

import { addColor } from '@termifier/logger';
import { centerContent, readFileAsync } from '@termifier/utilities';

import { asciiBanner } from '../utils';

export const Header = async (): Promise<TextBox> => {
	const textBox = new TextBox();

	textBox.addContent(centerContent(await readFileAsync(asciiBanner)));
	textBox.addContent(
		centerContent(
			`\nPowered by ${addColor(
				link('Termifier', 'https://github.com/permasoft-factory/termifier'),
				'blue.underline'
			)} >- v1.0.0`
		)
	);

	return textBox;
};
