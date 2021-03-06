import Markdown from "./Markdown.js";

const style = {
    slide: {
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
    },
    col: {
        flex: 1,
        overflow: 'hidden'
    }
};

export default {
    components: { Markdown },
    template: `
        <div :style="slideStyle()">
            <div v-for="(col, i) in slide" :style="colStyle(i)">
                <markdown :source="col"></markdown>
            </div>
        </div>
    `,
    props: ["slide", "values"],
    methods: {
        slideStyle() {
            return [
                style.slide,
                {
                    background: `hsl(201, 90%, ${this.values.Brightness / 2}%)`,
                    fontSize: 0.8 + this.values.Size * 0.005 + "rem",
                    padding: (3 + this.values.Padding * 0.05) + "vw"
                }
            ]
        },
        colStyle(i) {
            return [
                style.col,
                {
                    marginRight: i < this.slide.length - 1 && '1.5rem',
                }
            ]
        }
    }
}