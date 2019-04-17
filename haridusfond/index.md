<center><div>
<f-scene width="200" height="200">
	<f-circle-pattern>
	<f-slice-pattern r="1">
		<f-box
			:position="get('p',[])[0]"
			:fill="color('red')"
			r="1"
			stroke
		/>
    <f-circle
			:position="get('p',[])[1]"
			:fill="color('darkred')"
			stroke
			r="0.75"
		/>
		<f-hexagon
			:position="get('p',[])[2]"
			:fill="color('yellow')"
			stroke
			r="0.75"
		/>
		<f-regularpolygon
			count="5"
			:position="get('p',[])[3]"
			:fill="color('orange')"
			stroke
			r="0.75"
		/>
	</f-slice-pattern>
	</f-spin-pattern>
</f-scene>

# <big><big>DesignSTEM&nbsp;2.0</big></big>

<f-scene style="transform: translateY(-50px)" v-slot="{ mouse }" width="300" height="300">
  <f-drag
    :mouse="mouse"
    points="0.5 -0.5, -0.5 0.5, -0.5 -0.5, 0.5 0.5"
    v-slot="{ points }"
    set="p"
  >
		<f-box
			:position="points[0]"
			:fill="color('red')"
			stroke
			r="1"
		/>
    <f-circle
			:position="points[1]"
			:fill="color('darkred')"
			stroke
			r="0.75"
		/>
		<f-hexagon
			:position="points[2]"
			:fill="color('yellow')"
			stroke
			r="0.75"
		/>
		<f-regularpolygon
			count="5"
			:position="points[3]"
			:fill="color('orange')"
			stroke
			r="0.75"
		/>
  </f-drag>
</f-scene>
</div>
</center>

---

| 1 1 1
| 2 3 4
| 5 6 7

# Probleemid

-

#### Õpilaste kesised <f-sidebar title="STEAM" src="./steam.md" /> oskused

-

#### <f-sidebar title="21. sajandi oskuste" src="./21.md" /> vähene omandamine

-

#### <f-sidebar title="Kestliku arengu eesmärkide" src="./kestlik-areng.md" /> vähene sidumine õpieesmärkidega

-

#### <f-sidebar title="LTT" src="./ltt.md" /> ja STEAM õpetajate (järelkasvu) puudus  ning väike võimekus luua atraktiivseid õppematerjale

-

#### Õppematerjalide puudus, mis käsitleks STEAMi interaktiivselt, kaasaegselt ja eestikeelselt

-

#### Tehnilise platvormi puudus, mis võimaldaks kasutajasõbralikult integreerida teksti-, pildi-, video-, 3D- ja VR-sisu

---

| height: 50vh
| 1 1 1 1 5 5 5
| 2 3 4 4 6 6 6

<f-animation :loop="false" set="c1" to="1000" duration="900" easing="easeOutCubic" integer />

<f-animation :loop="false" set="c2" to="100" duration="900" easing="easeOutCubic" integer />

<f-animation :loop="false" set="c3" to="20" duration="900" easing="easeOutCubic" integer />

<f-animation :loop="false" set="c4" to="5" duration="900" easing="easeOutCubic" integer />

# Lahendus

-

# <big><big>{{ get('c4') }}</big></big>

õpetajat ja disainerit<br>koolitavad

-

# <big><big>{{ get('c3') }}</big></big>

kuu<br>jooksul

-

# <big><big>{{ get('c1') }}</big></big>

õpilast, õpetajaks õppijat ja õpetajat looma **kaasaegseid ja eestikeelseid STEAM õpiprojekte**, mis lähtuvad õpitu <f-sidebar title="individuaalsest, ametialasest ja ühiskondlikust relevantsusest" src="./slide3-1.md" :width="'50vw'" /> ning tuginevad <f-sidebar title="5E konstruktivistlikule õpimudelile" src="./slide3-2.md" />
 
-

# Mõju

-

Kaasaegse, rakendusliku STEAM õppe **kaalukas levi** keskhariduses

21\. sajandi oskuste <b>kõrgem tase</b> keskharidusõppijatel</p>

Kestliku arengu eesmärkide **orgaaniline sidumine** formaalhariduse õpieesmärkidega</p>

STEAM / disaini erialade **populaarsuse kasv** edasiõppimiseks</p>

STEAM õpetajaameti **maine tõus** õpilaste silmis ja avalikkuses laiemalt

---

| padding: 0
| gap: 0

| 1 2 3 4 5 6
| 7 7 8 8 9 9
| 7 7 8 8 9 9

<f-image src="./images/1.jpg" />

-

<f-image src="./images/5.jpg" />

-

<f-image src="./images/4.jpg" />

-

<f-image src="./images/8.jpg" />

-

<f-image src="./images/2.jpg" />

-

<f-image src="./images/6.jpg" />

-

<section>

## Tehtud 2016-2019


<strong><a href="https://www.facebook.com/DesignSTEM/" target="_blank">DesignSTEM 1.0</a></strong> <f-arrow-icon rotation="-45" />

10 Euroopa riigi kutse- ja kõrgkooli LTT/disaini e-õppematerjalide loomise koostööprojekt <f-sidebar title="Helsingi ülikooli" src="./helsinki.md" /> LUMA keskuse juhendamisel.<br><f-sidebar title="20 õpiprojekti" src="./poster.md" width="40vw" /> on lõppastme arendusjärgus ja neid on testinud **50 LTT/disaini õpetajat ja õpilast** Eestis, Hollandis, Portugalis ja Itaalias.

</section>

-

<section>

## &nbsp;

<strong>Veebiraamistik <a href="https://designstem.github.io/fachwerk" target="_blank">Fachwerk</a></strong> <f-arrow-icon rotation="-45" />

Vabavaraline raamistik aitab luua atraktiivset õpikeskkonda, mis sisaldab <a v-on:click="set('s',1)" style="cursor:pointer; color:var(--blue); border-bottom:1px dotted var(--blue);">dünaamilist matemaatikat</a>, <a v-on:click="set('s',2)" style="cursor:pointer; color:var(--blue); border-bottom:1px dotted var(--blue);">3D-mudeleid</a>, <a v-on:click="set('s',0)" style="cursor:pointer; color:var(--blue); border-bottom:1px dotted var(--blue);">generatiivset disaini</a>, VR-elamusi ja palju teisi koodipõhiseid interaktiivseid elemente. Kõiki materjale saab lihtsalt <a v-on:click="send('edit')" style="cursor:pointer;">muuta</a>, kohandada ja jagada. 

</section>

-

<section v-if="get('s',0) == 0">

## &nbsp;

<f-scene width="200" height="200">
	<f-circle-pattern>
	<f-slice-pattern r="1.5">
		<f-circle
			:position="[get('xx',0) / 6,0]"
			:fill="color('yellow')"
      :rotation="get('xx') * 90"
      :r="0.75"
		/>
    <f-circle
			:position="[get('xx',0),0]"
			:fill="color('darkred')"
      :rotation="get('xx') * 360 * 2"
      :r="0.5"
		/>
    <f-hexagon
			:position="[0,1 - get('xx')]"
			:fill="color('red')"
      :rotation="0"
      :r="0.5"
		/>
	</f-slice-pattern>
	</f-circle-pattern>
</f-scene>

Variatiivsus: <var>{{ round(scale(get('xx'),0,1.5,0,100),1) }}%</var>

<f-slider set="xx" from="0" to="1.5" />

</section>


<section v-if="get('s',0) == 1">

## &nbsp;

<f-scene3 width="220" height="220">
  <f-group3 :rotation="[get('x',0),get('y',0),0]" scale="0.5">
  <f-grid3 scale="2" />
	<f-line3
		:stroke="color('red')"
		points="0 4 0, 0 -4 0"
		opacity="0.75"
	/>
  <f-point3
    :points="range(-4,4,0.1)
    .map(x => ({ x, y: Math.cos(x), z: Math.sin(x) }))"
    :stroke="color('green')"
  />
  <f-point3
    :points="range(-4,4,0.1)
    .map(x => ({ x, y: Math.sin(x), z: Math.cos(x) }))"
    :stroke="color('blue')"
  />
  </f-group3>
</f-scene3>

Pöördenurk ümber <var>y</var> telje: <var>{{ round(get('y'),1) }}°</var>

<f-slider set="y" />

</section>



<section v-if="get('s',0) == 2">

## &nbsp;

<f-scene3 width="250" height="250">
	<f-rotation3>
		<f-grid3 />
		<f-polyhedron3 hedron="Tetrahedron" scale="0.5" position="-0.5 -0.5 0" />
		<f-polyhedron3 hedron="Octahedron" scale="0.5" position="-0.5 0.5 0" />
		<f-polyhedron3 hedron="Icosahedron" scale="0.5"  position="0.5 -0.5 0" />
		<f-polyhedron3 hedron="Dodecahedron" scale="0.5"  position="0.5 0.5 0" />
	</f-rotation3>
</f-scene3>

</section>


---

| 1 1 1 1 1
| 2 3 4 5 6

# Meeskond

-

### Merit Karise / projektijuht + õpetaja 

<small>Disaini valdkonna meisterõpetaja, aasta õpetaja 2018, globaalse õpetajapreemia Top50 finalist 2015, Kuressaare ametikooli disainisuund, Tartu Kunstikool.
<a href="http://polygon.onkel.ee/merit/portfolio/" target="_blank">Portfolio</a></small>

-

### Janika Nõmmela- Semjonov / õpetaja + disainer

<small>Kujundusgraafika erialajuht, pedagoog-metoodik, kunsti-didaktika lektor, Tartu Kunstikool, TÜ VKA
<a href="https://www.etis.ee/CV/Janika_N%C3%B5mmela_Semjonov/est" target="_blank">ETIS</a></small>

-

### Anne Rudanovski / õpetaja + disainer

<small>Paberimuuseumi asutaja, Tartu Kunstikool, Tartu Kõrgem Kunstikool Pallas, professor
<a href="https://rudanovski.com/" target="_blank">Koduleht</a> <a href="https://www.etis.ee/Portal/Persons/Display/c55bc869-ac95-4d97-845b-f7de6e7f26a5" target="_blank">ETIS</a></small>

-

### Kristjan Jansen / disainer + arendaja

<small>UX disainer, arendaja ja õpetaja, Skype, Taxify / Bolt, Kuressaare ametikooli disaini- ja IT-suund

<a href="https://kristjanjansen.ee/" target="_blank">Koduleht</a> <a href="https://www.linkedin.com/in/kristjan-jansen-778b0615" target="_blank">Linkedin</a></small>

-

### Oliver<br>Maaker / disainer + arendaja

<small>UX disainer, arendaja ja õpetaja, Kuressaare ametikooli disainisuund
</small>

---

# Eelarve

### Programmi maksumus

Kirjeldus|Summa
---|---
**Koolituste üldkulud** (õppematerjali tõlkimine, sõidukulud koolidesse jt organisatsioonidesse, materjalid ja töövahendid)|` 10 000 €`
**5 meeskonnaliikme töötasud** (planeerimine, ettevalmistus, korraldus, koolitus, tugi, analüüs, arendus, meediakajastus, aruandlus) kokku 1000 tööpäeva, 2020 - 2022|`140 000 €`
**Kokku**|**`150 000 €`**

### Programmi maksumus kasusaaja kohta

Kirjeldus|Summa
---|---
`150 000 €` / 1000 kasusaajat|`150 €` kasusaaja kohta

---

## Ootus Heateo Haridusfondile
 
**2020 - 2022**

Rahastus 150 000 €, 20 töökuud. 1000 inspireeritud, koolitatud ja toetatud õpilast, õpetajaks õppijat ja õpetajat.

## Projekti jätkusuutlikkus

**2022 - 2025+** 

Õpiprojektide ja platvormi rakendamine, arendamine ja uute õpiprojektide loomine järgmiste koostööpartnerite toel:

HTM, HITSA, riigigümnaasiumid, kutsekoolid, &quot;Noored kooli&quot;, &quot;Alustavat õpetajat toetav kool&quot;, &quot;Huvitav kool&quot;, &quot;Tagasi kooli&quot;, &quot;Kogenud kooli&quot;, TÜ haridusuuenduskeskus, TLÜ haridusinnovatsiooni keskus, EKA, Taltech, Pallas.

-

## Mentorid

Plaanitavad *pro bono* mentorid, näidistundides osalejad ja soovitajad:

<p style="color: var(--gray)">Alari Aho, Riivo Anton, Viljar Arakas, Ahti Heinla, Martin ja Terje Henk, Taavet Hinrikus, Gerri Kodres, Norris Koppel, Kristo Käärmann, Rain Lõhmus, Piret ja Veljo Otsason, Jaan Pillesaar, Martin Rand, Risto Rossar, Tõnu Runnel, Ragnar Sass, Helen ja Martin Tajur, Annika Tallinn, Dina ja Hannes Tamjärv, Ede ja Sten Tamkivi, Kalev Tanner, Sten Tikk, Priit Vaikmaa, Peep Vain, Kaido Veske, Mari-Liis ja Martin Villig</p>
