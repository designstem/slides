import Slide from './components/Slide.js'
import Settings from './components/Settings.js'
import Pager from './components/Pager.js'

import settings from './settings.js'

new Vue({
    el: '#app',
    components: { Slide, Settings, Pager },
    template: `
        <div>
            <settings></settings>
            <slide
                v-for="(slide, index) in slides"
                :key="index"
                v-show="currentSlide === index"
                :values="settings.values"
                :slide="slide"
            >
            </slide>
            <pager @click.native="prev" style="left: 0" />
            <pager @click.native="next" style="right: 0" />
        </div>
    `,
    data: { slides: [], currentSlide: 0, settings },
    methods: {
        parseSlides(slides) {
            return slides.split('\n---\n').map(slide => slide.split('\n--\n'))
        },
        prev() {
            this.currentSlide > 0 && this.currentSlide--
        },
        next() {
            this.currentSlide < this.slides.length - 1 && this.currentSlide++
        }
    },
    mounted() {
        this.currentSlide = parseInt(localStorage.getItem('currentSlide')) || 0
        axios.get('./README.md').then(res => {
            this.slides = this.parseSlides(res.data)
        })
        document.addEventListener('keydown', e => {
            if (e.keyCode == 37) { this.prev() }
            if (e.keyCode == 39) { this.next() }
        })
        hljs.initHighlightingOnLoad();
    },
    watch: {
        currentSlide(value) {
            localStorage.setItem('currentSlide', value)
        }
    }
})
