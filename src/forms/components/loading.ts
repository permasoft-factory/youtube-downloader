import { TextBox } from "@termifier/core";

import { centerContent } from "@termifier/utilities";

export const Loading = async (): Promise<TextBox> => {
    const textBox = new TextBox();

    textBox.addContent(centerContent(`Loading\n`));

    return textBox;
};