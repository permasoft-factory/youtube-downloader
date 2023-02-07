import { join as joinPaths } from 'node:path';

// Folders
export const rootDir = joinPaths(__dirname, '../');
export const assetsDir = joinPaths(rootDir, 'assets/');

// Files
export const asciiBanner = joinPaths(assetsDir, 'ascii-banner.txt');
