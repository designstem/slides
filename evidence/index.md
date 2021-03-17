| chapter: Fachwerk
| section: What is it?
| padding: 0
| cols: 1fr 2fr


<section class="vertical-center">

## Fachwerk

an open source, no-sign-in, free <var>web platform</var>

<small style="font-size:120%;">
<i>Designed and coded specifically for creating interactive, user friendly, attractive e-learning objects, e.g dynamic mathematics, 3D models, generative design, VR-experiences and many other code-based interactive elements etc that can easily be changed, adapted and shared online</i>
</small>

<f-next />

</section>

-

<f-image src="https://www.dropbox.com/s/4716b3who8d2jpp/fachwerk-screenshot.jpg?raw=1" style="--image-min-height:80vh; --image-position:40% 0%; " />


<img src="https://designstem.github.io/fachwerk/images/erasmus_logo.svg" style="position:fixed;right:0; bottom: 4vh; width:12vw; min-width:200px; max-width:320px; background:white; margin:2em 0" />

---






| section: Evidence
| cols: 1fr 2fr 1fr


<div class="vertical-center">

## Interactive

<var>play with content</var> and see what happens

<f-next />

</div>

-

<div class="vertical-center" style="align-items:stretch;">
  <div style="display:grid; grid-template-columns: repeat(3, 1fr);">
    <f-scene responsive >
        <f-text y="-0.5" :scale="get('e1_s')*5" :rotation="get('e1_r')*-1" :fill="color('blue')">E</f-text>
    </f-scene>
    <f-scene responsive >
          <f-text y="-0.5" :scale="get('e1_s')*5" :rotation="get('e1_r')*2" :fill="color('blue')">V</f-text>
    </f-scene>
    <f-scene responsive >
          <f-text y="-0.5" :scale="get('e1_s')*5" :rotation="get('e1_r')*-1" :fill="color('blue')">I</f-text>
    </f-scene>
    <f-scene responsive >
          <f-text y="-0.5" :scale="get('e1_s')*5" :rotation="get('e1_r')*1" :fill="color('blue')">D</f-text>
    </f-scene>
    <f-scene responsive >
          <f-text y="-0.5" :scale="get('e1_s')*5" :rotation="get('e1_r')*-6" :fill="color('blue')">E</f-text>
    </f-scene>
    <f-scene responsive >
          <f-text y="-0.5" :scale="get('e1_s')*5" :rotation="get('e1_r')*1" :fill="color('blue')">N</f-text>
    </f-scene>
    <f-scene responsive >
          <f-text y="-0.5" :scale="get('e1_s')*5" :rotation="get('e1_r')*-1" :fill="color('blue')">C</f-text>
    </f-scene>
    <f-scene responsive >
          <f-text y="-0.5" :scale="get('e1_s')*5" :rotation="get('e1_r')*-1" :fill="color('blue')">E</f-text>
    </f-scene>
    <f-scene responsive >
          <f-text y="-0.5" :scale="get('e1_s')*5" :rotation="get('e1_r')*1" :fill="color('blue')">!</f-text>
    </f-scene>
  </div>
</div>

-

<div class="vertical-center" style="align-items:stretch;">
  
  ##### Do

  <f-slider set="e1_s" from="0.5" to="3" value="1.5" />

  ##### something

  <f-slider set="e1_r" from="0" to="360" value="0" />

</div>

---






| section: Components
| cols: 1fr 2fr 1fr


<div class="vertical-center">

## Components

over 100 <var>interactive components</var> to build custom-made projects

<f-next />

</div>

-

<div class="vertical-center" style="align-items:stretch;">
  <div style="display:grid; grid-template-columns: repeat(3, 1fr);">
    <f-scene responsive >
        <f-group :rotation="get('e1_r')*1">
        <f-circle :r="get('e1_s')" />
        <f-circle position="0.5 0.5" :r="get('e1_s')*0.3" :fill="color('blue')" />
        </f-group>
    </f-scene>
    <f-scene responsive >
        <f-regularpolygon :r="get('e1_s')" :rotation="get('e1_r')*1" />
    </f-scene>
    <f-scene responsive >
        <f-box :r="get('e1_s')*1.75" :rotation="get('e1_r')*1" :fill="color('yellow')" />
    </f-scene>
    <f-scene3 isometric responsive >
      <f-polyhedron3
        hedron="Icosahedron"
        position="0 0 0"
        :rotation="[15, 15, get('e1_r')*1]"
        :scale="get('e1_s')*1"
      />
    </f-scene3>
    <f-scene responsive >
        <f-group position="0 -0.5">
          <f-text y="-0.5" :scale="get('e1_s')*5" :rotation="get('e1_r')*-1" :fill="color('blue')">ABC</f-text>
        </f-group>
    </f-scene>
    <f-scene responsive >
        <f-triangle :r="get('e1_s')" :rotation="get('e1_r')*1" />
    </f-scene>
    <f-scene  v-slot="{ ex1 }" responsive >
      <f-triangle :r="get('e1_s')" :rotation="get('e1_r')*1" />
    </f-scene>
    <f-scene3 step="1" isometric responsive>
    <f-group3 :rotation="[get('e1_r')*1, 15, get('e1_r')*1]" :scale="[1,0.52,1]">
      <f-point3
        :points="
          range(-4,4,0.1)
            .map(x => [x,Math.cos(x),Math.sin(x)])
        "
        :stroke="color('red')"
        stroke-width="6"
      />
      <f-point3
      :points="
        range(-4,4,0.1)
          .map(x => [x,Math.sin(x),Math.cos(x)])
      "
      :stroke="color('blue')"
      stroke-width="6"
      />
    </f-group3>
</f-scene3>
    <f-scene3 isometric responsive >
      <f-polyhedron3 
        hedron="Dodecahedron"
        position="0 0 0"
        :rotation="[15, 15, get('e1_r')*1]"
        :scale="get('e1_s')*1"
      />
    </f-scene3>
  </div>
</div>

-

<div class="vertical-center" style="align-items:stretch;">
  
  ##### Do

  <f-slider set="e1_s" from="0.5" to="2" value="1" />

  ##### something

  <f-slider set="e1_r" from="0" to="360" value="0" />

</div>

---








| section: 2D example
| cols: 1fr 2fr 1fr


<div class="vertical-center">

## Combined components

components can be combined to <var>interactive "playgrounds"</var>

<f-next />

</div>

-

<div class="vertical-center" style="align-items:stretch;">
  <f-scene step="1" v-slot="{ svgscale }" responsive >
      <f-group
        v-for="a in range(0,360,360 / get('r_c1',6)).slice(0, get('r_c1',6))"
        :rotation="a"
        style="mix-blend-mode: multiply;"
      >
        <f-line
          :x2="3"
          stroke-width="1"
          opacity="0.1"
        />
        <f-mirror-x r="4" :step="get('r_x2',0)">
          <f-mirror-y r="4" :step="get('r_y2',0)">
            <f-group :rotation="get('r_r1',0)" :scale="get('r_s1',1)">
            <f-group :scale="svgscale">
              <f-target transform="translate(-50, 50) scale(1,-1)" />
            </f-group>
            </f-group>
          </f-mirror-y>
        </f-mirror-x>
      </f-group>
  </f-scene>
</div>

-
<div class="vertical-center" style="align-items:stretch;">
  
  #### Example of 2D playground

  ##### Around x axis `{{ get('r_y2',0) }}`
  
  <f-slider set="r_y2" from="0" to="1" />
  
  ##### Around in y axis `{{ get('r_x2',0) }}`
  
  <f-slider set="r_x2" from="0" to="1" />
  
  ##### Element rotation `{{ get('r_r1', 0.5) }} ×`
  
  <f-slider set="r_r1" />
  
  ##### Number of rotations `{{ get('r_c1',6) }}`
  
  <f-slider set="r_c1" value="6" from="1" to="16" integer />
  
  ##### Element scale `{{ get('r_s1',1) }}`
  
  <f-slider set="r_s1" value="1" from="0.5" to="4" />

</div>

---







| section: 3D example
| cols: 1fr 2fr 1fr


<div class="vertical-center">

## Combined components

components can be combined to <var>interactive "playgrounds"</var>

<f-next />

</div>


-

<div class="vertical-center" style="align-items:stretch;">

{{set('ddDih', 63.43495)}}
{{set('ddRot', 72)}}

<f-scene3 v-if="get('hedronType',0) == 0" width="800" height="800" responsive isometric class="crisp">
  <f-group3 :rotation=" [ 0, get('pyraRot', 0) , 0 ] " scale="2.8">
    <!-- first half  -->
    <f-group3>
      <f-group3 :position="[ 0, 0, -get('pyraOffset', 0) ]">
        <f-hedron3 
            count="5" 
            height="1" 
            position="0 0 -1" 
            r="0.764"
            strokeWidth="0"
            :fill="color('blue')"
            :shading="false"
        />
      </f-group3>
      <f-group3 v-for="p in range(0,4,1)" :rotation="[0,0,get('ddRot')*p]" :key="'pyramid'+p">
        <f-group3 :rotation="[get('ddDih'),0,0]">
          <f-group3 :position="[0, 0, -get('pyraOffset', 0)]" :rotation="[0,0,get('ddRot')/2]">
            <f-hedron3 
              count="5" 
              height="1" 
              position="0 0 -1" 
              r="0.764"
              strokeWidth="0"
              :fill="color('yellow')"
              :shading="false"
            />
          </f-group3>
        </f-group3>
      </f-group3>
    </f-group3>
    <!-- second half  -->
    <f-group3 :rotation="[0, 180, get('ddRot')/2]">
      <f-group3 :position="[ 0, 0, -get('pyraOffset', 0) ]">
        <f-hedron3 
            count="5" 
            height="1" 
            position="0 0 -1" 
            r="0.764"
            strokeWidth="0"
            :fill="color('blue')"
            :shading="false"
        />
      </f-group3>
      <f-group3 v-for="p in range(0,4,1)" :rotation="[0,0,get('ddRot')*p]" :key="'pyramid'+p">
        <f-group3 :rotation="[get('ddDih'),0,0]">
          <f-group3 :position="[0, 0, -get('pyraOffset', 0)]" :rotation="[0,0,get('ddRot')/2]">
            <f-hedron3 
              count="5" 
              height="1" 
              position="0 0 -1" 
              r="0.764"
              strokeWidth="0"
              :fill="color('green')"
              :shading="false"
            />
          </f-group3>
        </f-group3>
      </f-group3>
    </f-group3>
  </f-group3>
</f-scene3>


<f-scene3 v-else-if="get('hedronType') == 1" width="800" height="800" responsive isometric class="crisp" >
    <f-group3 :rotation=" '30 ' + get('pyraRot', 0) + ' 0' " scale="2">
      <!-- first pair  -->
      <f-group3 key="ykkonen">
        <f-group3 rotation="0 0 45" :position="'0 0 ' + -get('pyraOffset', 0) + ' '">
          <f-hedron3 
              :count="4" 
              :height="1" 
              position="0 0 -1" 
              :r="1.4142"
              :strokeWidth="0"
              :fill="color('blue')"
              :shading="false"
            />
        </f-group3>
        <f-group3 rotation="0 180 45" :position="'0 0 ' + get('pyraOffset', 0) + ' '">
          <f-hedron3 
              :count="4" 
              :height="1" 
              position="0 0 -1"
              :r="1.4142" 
              :strokeWidth="0"
              :fill="color('blue')"
              :shading="false"
            />
        </f-group3>
      </f-group3>
      <!-- second pair  -->
      <f-group3 rotation="90 0 0" key="kakkonen">
        <f-group3 rotation="0 0 45" :position="'0 0 ' + -get('pyraOffset', 0) + ' '">
          <f-hedron3 
              :count="4" 
              :height="1" 
              position="0 0 -1" 
              :r="1.4142"
              :strokeWidth="0"
              :fill="color('green')"
              :shading="false"
            />
        </f-group3>
        <f-group3 rotation="0 180 45" :position="'0 0 ' + get('pyraOffset', 0) + ' '">
          <f-hedron3 
              :count="4" 
              :height="1" 
              position="0 0 -1"
              :r="1.4142" 
              :strokeWidth="0"
              :fill="color('green')"
              :shading="false"
            />
        </f-group3>
      </f-group3>
       <!-- third pair  -->
      <f-group3 rotation="0 90 0" key="kolmistovainen">
        <f-group3 rotation="0 0 45" :position="'0 0 ' + -get('pyraOffset', 0) + ' '">
          <f-hedron3 
              :count="4" 
              :height="1" 
              position="0 0 -1" 
              :r="1.4142"
              :strokeWidth="0"
              :fill="color('yellow')"
              :opacity="1"
              :shading="false"
            />
        </f-group3>
        <f-group3 rotation="0 180 45" :position="'0 0 ' + get('pyraOffset', 0) + ' '">
          <f-hedron3 
              :count="4" 
              :height="1" 
              position="0 0 -1"
              :r="1.4142" 
              :strokeWidth="0"
              :fill="color('yellow')"
              :opacity="1"
              :shading="false"
            />
        </f-group3>
      </f-group3>
    </f-group3>
</f-scene3>

</div>

-

<div class="vertical-center" style="align-items:stretch;">
  
  #### Exaple of 3D playground

  &nbsp;

  <f-buttons :buttons="['Dodecahedron','Cube']" set="hedronType" />

  ##### <small>Show the pyramids</small>
  <f-slider set="pyraOffset" v-on:value=" v => { set('updateMe', v) }" from="0" to="1" step="0.01"  />

  ##### <small>Rotate hedron</small>
<f-slider set="pyraRot" v-on:value=" v => { set('updateMe', v) }" to="180" value="60" />

</div>

---










| section: Case studies
| cols: 1fr 3fr



<div class="vertical-center">

## Case studies

<var>some examples</var> to discover

<f-next />

</div>

-



<div class="vertical-center" style="display:grid; grid-template-columns:repeat(3, 1fr); align-items:center;">


<f-link to="https://designstem.github.io/projects/triangles/#let-s-start-with-triangles">Triangles</f-link>

<f-link to="https://designstem.github.io/projects/metamerism/#experiment-1-the-dress-in-vr">The Dress</f-link>

<f-link to="https://designstem.github.io/projects/tattoo/#acids-and-bases">Smart tattoo</f-link>

<f-link to="https://designstem.github.io/projects/packaging/#explore-polygon-area-and-perimeter">Packaging</f-link>

<f-link to="https://designstem.github.io/projects/waste/#start">Waste</f-link>

<f-link to="https://designstem.github.io/projects/geometry/#from-geometry-to-feelings">Geometry to design</f-link>

<f-link to="https://ooker.github.io/fw-kak/veebidisain">Teacher notes</f-link>

<f-link to="https://designstem.github.io/projects/colorblindness/#cvd-compatible-palette">Design for CVD</f-link>

<f-link to="https://designstem.github.io/projects/colorblindness/#testing-with-cvd-simulator">CVD simulator</f-link>

<f-link to="https://designstem.github.io/projects/frequency/#what-happened-to-the-wheels">The wheel effect</f-link>

<f-link to="https://designstem.github.io/projects/easing/">Easing</f-link>

</div>

---




| section: Links
| rows: 1fr 1fr 1fr
| 1 1 1
| 2 3 4
| 5 5 5

<div class="bottom" style="align-items:center;">

  # *What next?*

</div>

-

<center>
  
  #### 1. <a href="https://designstem.github.io/projects" target="_blank">Designstem projects</a>

</center>

-

<center>

  #### 2. <a href="https://designstem.github.io/fachwerk" target="_blank">Visit <var>Fachwerk</var></a>

</center>

-
<center>
  
  #### 3. <a href="https://designstem.github.io/fachwerk/docs/#/start-a-new-project" target="_blank">How to start your project</a>

</center>

-

<center>

  <!-- *Thank you!* -->

  <f-logo style="font-size:48px;" />

</center>