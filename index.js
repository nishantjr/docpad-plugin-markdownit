'use strict'

const md = require('markdown-it')()

const plugin = {
    name: 'markdownit',
    render: (opts, next) => {
        if (opts.inExtension != 'md' &&
            opts.inExtension != 'markdown')
           return next()
        if (opts.outExtention != null &&
            opts.outExtention != 'html')
           return next()
        opts.content = md.render(opts.content)
        next()
    }

}

module.exports = function (BasePlugin) {
    return BasePlugin.extend(plugin);
};
