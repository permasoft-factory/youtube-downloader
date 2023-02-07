import { createTsupConfig } from './scripts/tsup.config';
import { relative, resolve as resolvePath } from 'node:path';

export default createTsupConfig({ globalName: 'YoutubeDownloader', target: 'es2020', tsconfig: relative(__dirname, resolvePath(process.cwd(), 'tsconfig.json')) });
