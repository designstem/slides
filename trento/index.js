import * as components from "https://designstem.github.io/fachwerk/components.js";
import * as utils from "https://designstem.github.io/fachwerk/utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

import FCard from "./FCard.js"
Vue.component('FCard', FCard)

new Vue({
  el: "#app",
  methods: { ...utils },
  template: `
  <div>
    <f-fetch-data url="./README.md">
      <f-theme slot-scope="data" theme="blue">
        <f-content-editor
          style="--emphasis: var(--yellow); height: 100vh;"
          :content="data.value"
        />
      </f-theme>
    </f-fetch-data>
  </div>
  `
});
