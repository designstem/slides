import { fachwerk, Css } from "https://designstem.github.io/fachwerk/fachwerk.js";
// import { fachwerk } from "//127.0.0.1:5502/fachwerk.js";

const FLogo = {
    mixins: [Css],
    template: `
      <h1 class="ds-logo">
        <span style="color: var(--red); letter-spacing: -0.06ch;">Design</span><sup style="letter-spacing: -0.05ch; font-size: 0.5em">STEM</sup>
      </h1>
    `,
    css: `
    .ds-logo {
      --base: 18px;
      margin-bottom:2vh;
    }
    @media (max-width: 800px) {
      .ds-logo {
        --base: 2vw;
      }
    }
    `
  };

fachwerk({
    components: { FLogo },
    type: "slides",
    typebutton: "none",
    edit: "none"
});