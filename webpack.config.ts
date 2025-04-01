import path from 'path';
import type { WebpackConfig, WebpackBuildMode } from '@/config/webpack/types';
import { fileURLToPath } from 'node:url';
import { Configuration } from 'webpack';
import { buildPlugins } from './src/config/webpack/buildPlugins';
import { buildLoaders } from './src/config/webpack//buildLoaders';
import { buildResolvers } from './src/config/webpack/buildResolvers';

const DEV_SERVER_PORT = 8000;
const projectDirname = path.dirname(fileURLToPath(import.meta.url));
const TRANSPILATION_TARGET = 'es2015';

const getConfig = (mode: WebpackBuildMode, port: number): WebpackConfig => {
    return {
        mode,
        transpilationTarget: TRANSPILATION_TARGET,

        devServerPort: port,
        paths: {
            faviconPath: path.join(projectDirname, 'src', 'assets', 'favicon.svg'),
            templatePath: path.join(projectDirname, 'src', 'index.html'),
            tsConfigPath: path.join(projectDirname, 'tsconfig.json'),
        },
    };
};

export default (env: Record<string, string | boolean>, argv: Record<string, string | boolean>): Configuration => {
    const mode = argv.mode === 'development' ? 'development' : 'production';
    const devServerPort = Number(DEV_SERVER_PORT);
    const isDev = mode === 'development';

    const config = getConfig(mode, devServerPort);

    const webpackConfig: Configuration = {
        mode: config.mode,
        context: path.join(projectDirname, 'src'),
        entry: {
            bundle: './index',
        },
        output: {
            filename: '[name].[contenthash].js',
            clean: true,
        },
        devtool: isDev && 'eval-cheap-module-source-map',
        plugins: buildPlugins(config),
        module: {
            rules: buildLoaders(config),
        },
        resolve: buildResolvers(),
    };
    return webpackConfig;
};
