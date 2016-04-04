'use strict'


const plugin = {
    name: 'markdownit',
    docpadReady: (opts, next) => {
        const config = opts.docpad.config.markdownitOptions || {}
        config.preset = config.preset ? config.preset : "default"
        this.md = require('markdown-it')(config.preset, config.opts)
        next()
    },
    render: (opts, next) => {
        if (opts.inExtension != 'md' &&
            opts.inExtension != 'markdown')
           return next()
        if (opts.outExtention != null &&
            opts.outExtention != 'html')
           return next()
        opts.content = this.md.render(opts.content)
        next()
    }

}

module.exports = function (BasePlugin) {
    return BasePlugin.extend(plugin);
};
