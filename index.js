'use strict'

const plugin = {
    name: 'markdownit',
}

module.exports = function (BasePlugin) {
    return BasePlugin.extend(plugin);
};
