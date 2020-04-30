/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

// const watchFolders = [
//   path.resolve(appDir, '..', 'node_modules'),
//   ...workspaces.filter((workspaceDir) => !(workspaceDir === appDir)),
// ];

const path = require('path')

const blacklist = require('metro-config/src/defaults/blacklist')

module.exports = {
  resolver: {
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => {
          return path.join(__dirname, `node_modules/${name}`)
        },
      }
    ),
  },
  watchFolders: [path.resolve(__dirname, '../')],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
}
