| theme: dark
| 1 1
| 2 3
| 4 4
| gap: 30px

<center>
  <f-scene width="200" height="200">
    <f-rotation>
      <f-circle-pattern :r="0.5 - (get('r') / 2)">
        <f-circle-pattern :r="get('r')">
          <f-hexagon stroke="var(--red)" />
        </f-circle-pattern>
      </f-circle-pattern>
    </f-rotation>
  </f-scene>
</center>

-

## DesignSTEM

Education initiative teaching STEM topics for design students  around Europe

-

<f-animation set="r" value="0.5" from="0" to="1" alternate />

## Fachwerk

Web framework for creating interactive learning experiences

-

<var>engagement = {{ round(get('r'),3) }}</var>

<f-slider from="0" to="1" :value="get('r')" />

<br>

Explore over ***100+*** components for 2D/3D graphics, user interaction, comprehensive layouts, beautiful math and more.

https://designstem.github.io/fachwerk