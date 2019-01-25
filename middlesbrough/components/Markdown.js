const renderer = new marked.Renderer()
renderer.image = (href, title, text) => {
    return `
        <div class="image">
            <img src="${href}"/>
        </div>
    `
}

export default {
    props: ['source'],
    computed: {
        target() {
            return marked(this.source, {
                renderer,
                breaks: true,
                highlight: code => hljs.highlightAuto(code).value
            })
        }
    },
    template: `
        <div v-html="target"></div>
    `
}