import { fachwerk, Css } from "https://designstem.github.io/fachwerk/fachwerk.js";

const FLogo = {
  mixins: [Css],
  template: `
    <h1 class="ds-logo">
      <span style="color: var(--red); letter-spacing: -0.06ch;">Design</span><sup style="letter-spacing: -0.05ch; font-size: 0.5em">STEM</sup>
    </h1>
  `,
  css: `
  .ds-logo {
    --base: 24px;
    margin-bottom:3vh;
  }
  @media (max-width: 800px) {
    .ds-logo {
      --base: 2vw;
    }
  }
  `
};

fachwerk({
  title: "Projects",
  components: { FLogo },
  editor: "none",
  style: { "--content-editor-scale": 1.3 }
});
