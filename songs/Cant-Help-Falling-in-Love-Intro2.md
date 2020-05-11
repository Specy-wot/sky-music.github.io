<!DOCTYPE html>
<html xmlns:svg="http://www.w3.org/2000/svg">
<head>
<title>Can't Help Falling in Love Intro</title>
<style type="text/css">
html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

/* <!-- Defines the em unit--> */
body {
  font-family: "Noto Sans", "Noto Sans CJK JP", "Noto Sans CJK KR", "Noto Sans CJK SC", "Noto Sans CJK TC", "Avenir", Arial, sans-serif;
  font-size: 12pt;
}

/* <!-- Song title --> */
h1, svg text.title {
    font-family: "Noto Sans", "Noto Sans CJK JP", "Noto Sans CJK KR", "Noto Sans CJK SC", "Noto Sans CJK TC", "Avenir", Arial, sans-serif;
	font-size: 1.3em;
	font: bold;
}

/* <!-- Song headers (HTML only) --> */
p, svg text.headers {
    font-family: "Noto Sans", "Noto Sans CJK JP", "Noto Sans CJK KR", "Noto Sans CJK SC", "Noto Sans CJK TC", "Avenir", Arial, sans-serif;
	font-size: 0.8em;
	line-height: 50%;
}

.note-root, .note-diamond, .note-circle {
  transform: scale(1.0);
  -ms-transform: scale(1.0);
  -webkit-transform: scale(1.0);
}

/* <!-- Alignment of SVG (HTML only) --> */
/* <!-- Seems to have no effect ? --> */
.note-root svg, .note-diamond svg, .note-circle svg {
  display: inline-block;
  vertical-align: middle;
}

/* <!-- Sky chord chart: a table with rounded edges (HTML only) --> */
table {
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 4px;
  margin-right: 0px;
  padding: 0px;
  display: inline-block;
  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
  border-color: black;
  border-spacing: 0 auto;
}

/* <!-- Sky chord chart: a table with rounded edges (SVG only) --> */
svg rect.harp {
  fill:white;
  stroke-width:1;
  stroke:black;
}

/* <!-- Sky chord chart: a table with rounded edges and thick edges (PNG only) --> */
svg rect.harp-png {
  fill:white;
  stroke-width:3;
  stroke:black;
}


/* <!-- WARNING: The td font size affects the note size! (HTML only)--> */
td {
  padding-top: 0px;
  padding-bottom: 0px;
  margin: 0px;
  font-size: 1.0em;
}

/* <!-- Makes the table disappear in case of broken chord  (HTML only)--> */
table.broken {
  border-color: white;
  border-width: 0;
}

/* <!-- Makes the table disappear in case of broken chord  (SVG only)--> */
svg.broken rect{
  fill:none;
  stroke-width:0;
  stroke:white;
}

/* <!-- Silent table  (HTML only)--> */
table.silent {
  border-color:#BBBBBB;
  border-width:0;
}

/* <!-- Silent table  (HTML only)--> */
svg.silent rect {
  stroke: grey;
  stroke-width:0;
  fill:none;
}

table.voice {
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 4px;
  margin-right: 0px;
  padding: 0px;
  border-radius: 0px;
  border-width: 0px;
}

table.voice td {
  padding-top: 0px;
  padding-bottom: 0px;
  margin: 0px;
  font-size: 0.8em;
  width: 7.5em;
  text-align: center;
}

/* <!-- Sky voice (SVG only) --> */
svg text.voice {
  font-family: "Noto Sans", "Noto Sans CJK JP", "Noto Sans CJK KR", "Noto Sans CJK SC", "Noto Sans CJK TC", "Avenir", Arial, sans-serif;
  font-size: 0.8em;
  stroke: none;
  fill:black;
  dominant-baseline: middle;
}

/* <!-- Invisible table to contain the repetition mark --> */
table.repeat {
  margin: 0px;
  padding: 0px;
  border-radius: 0px;
  border-width: 0px;
  font-size: 0.9em;
}

/* <!-- Bottom-left corner repetition mark --> */
svg.repeat text.repeat {
  stroke: none;
  fill:black;
  dominant-baseline: baseline;
  font-size: 0.9em;
  font-family: "Noto Sans", "Noto Sans CJK JP", "Noto Sans CJK KR", "Noto Sans CJK SC", "Noto Sans CJK TC", "Avenir", Arial, sans-serif;
}


/* <!-- Horizontal line --> */
hr {
  height: 2px;
  background-color: #BBBBBB;
  border: none;
  opacity: 1;
  padding: 0;
  margin-top: 0px;
  margin-bottom: 4px;
}

svg line.divide {
	stroke: grey;
	stroke-width: 1.0px;
}


/* <!-- TODO: Check if this has no effect ??? --> */
/*
path.instrument-button{
	fill:#FF0000;
	opacity:0.4;
}
 */

/* <!-- TODO: Check if this has no effect ??? --> */
#transcript {
  margin: 0 0;
}


/* <!-- Small buttons showing notes positions --> */
svg.harp-button-0 .unhighlighted.instrument-button-icon,
svg.harp-button-1 .unhighlighted.instrument-button-icon,
svg.harp-button-2 .unhighlighted.instrument-button-icon,
svg.harp-button-3 .unhighlighted.instrument-button-icon,
svg.harp-button-4 .unhighlighted.instrument-button-icon {
  stroke-width: 0;
  stroke: white;
  fill: rgb(194,240,194);
  opacity: 1;
}

/* <!-- Small buttons showing notes positions --> */
svg.harp-button-5 .unhighlighted.instrument-button-icon,
svg.harp-button-6 .unhighlighted.instrument-button-icon,
svg.harp-button-7 .unhighlighted.instrument-button-icon,
svg.harp-button-8 .unhighlighted.instrument-button-icon,
svg.harp-button-9 .unhighlighted.instrument-button-icon {
  stroke-width: 0;
  stroke: white;
  fill: rgb(179,236,255);
  opacity: 1;
}

/* <!-- Small buttons showing notes positions --> */
svg.harp-button-10 .unhighlighted.instrument-button-icon,
svg.harp-button-11 .unhighlighted.instrument-button-icon,
svg.harp-button-12 .unhighlighted.instrument-button-icon,
svg.harp-button-13 .unhighlighted.instrument-button-icon,
svg.harp-button-14 .unhighlighted.instrument-button-icon {
  stroke-width: 0;
  stroke: white;
  fill: rgb(255,185,223);
  opacity: 1;
}

/* <!-- Note background when the chord is or is silent --> */
table.broken .highlighted-0.instrument-button,
table.silent .highlighted-0.instrument-button {
  stroke-width: 0;
  stroke: white;
  fill: none;
}

/* <!-- Small note buttons when the chord is broken --> */
table.broken .unhighlighted.instrument-button-icon,
svg.broken .unhighlighted.instrument-button-icon {
  stroke-width: 0;
  stroke: white;
  fill: none;
}

/* <!-- Small note buttons when the chord is silent --> */
table.silent .unhighlighted.instrument-button-icon,
svg.silent .unhighlighted.instrument-button-icon {
  stroke-width: 0;
  stroke: white;
  fill: none;
}

/* <!-- Middle note button when the chord is silent --> */
table.silent svg.harp-button-7 .unhighlighted.instrument-button-icon,
svg.silent svg.harp-button-7 .unhighlighted.instrument-button-icon,
svg.silent.harp-button-7 .unhighlighted.instrument-button-icon {
  stroke-width: 0;
  stroke: white;
  fill: #BBBBBB;
  opacity: 1;
}

/* <!-- Red question mark when table is broken --> */
table.broken text,
svg.broken text {
  fill: red;
  text-anchor:middle;
  font-size:600%;
  stroke-width:0.05em;
  stroke:red;
}


/* <!-- Note decoration (circle, diamond) --> */
.highlighted-0.instrument-button-icon {
  stroke-width: 5;
  stroke: white;
  fill: none;
}

/* <!-- Note background color in first row --> */
svg.harp-button-0 path.highlighted-0,
svg.harp-button-1 path.highlighted-0,
svg.harp-button-2 path.highlighted-0,
svg.harp-button-3 path.highlighted-0,
svg.harp-button-4 path.highlighted-0 {
  fill: limegreen;
  opacity: 1.0;
}

/* <!-- Note background color in second row --> */
svg.harp-button-5 path.highlighted-0,
svg.harp-button-6 path.highlighted-0,
svg.harp-button-7 path.highlighted-0,
svg.harp-button-8 path.highlighted-0,
svg.harp-button-9 path.highlighted-0 {
  fill: deepskyblue;
  opacity: 1.0;
}

/* <!-- Note background color in third row --> */
svg.harp-button-10 path.highlighted-0,
svg.harp-button-11 path.highlighted-0,
svg.harp-button-12 path.highlighted-0,
svg.harp-button-13 path.highlighted-0,
svg.harp-button-14 path.highlighted-0 {
  fill: deeppink;
  opacity: 1.0;
}

/* <!-- Element background color for icons in ../elements
Set to none to have a transparent SVG, and a transparent PNG with alpha layer (RGBA) later
Set to white to make the background white in RGB mode, and the PNG background white when converted to RGB
--> */
svg rect.harp-background {
	fill:white;
}

svg rect.note-background {
	fill:white;
}

/* <!-- Below the styles for buttons in a quaver --> */
.highlighted-7 {
  fill: rgb(68,1,84);
  opacity: 1.0;
}

.highlighted-7.instrument-button-icon {
  stroke-width: 3;
  stroke: white;
  fill: none;
}

.highlighted-6 {
  fill: rgb(68,57,130);
  opacity: 1.0;
}

.highlighted-6.instrument-button-icon {
  stroke-width: 3;
  stroke: white;
  fill: none;
}

.highlighted-5 {
  fill: rgb(48,103,141);
  opacity: 1.0;
}

.highlighted-5.instrument-button-icon {
  stroke-width: 3;
  stroke: white;
  fill: none;
}


.highlighted-4 {
  fill: rgb(32,144,140);
  opacity: 1.0;
}

.highlighted-4.instrument-button-icon {
  stroke-width: 3;
  stroke: white;
  fill: none;
}

.highlighted-3 {
  fill: rgb(53,183,120);
  opacity: 1.0;
}

.highlighted-3.instrument-button-icon {
  stroke-width: 3;
  stroke: white;
  fill: none;
}

.highlighted-2 {
  fill: rgb(144,214,67);
  opacity: 1.0;
}

.highlighted-2.instrument-button-icon {
  stroke-width: 3;
  stroke: white;
  fill: none;
}

.highlighted-1 {
  fill: rgb(253,231,36);
  opacity: 1.0;
}

.highlighted-1.instrument-button-icon {
  stroke-width: 3;
  stroke: white;
  fill: none;
}

/* <!-- Button styles if chord has en broken --> */
/* <!-- TODO: Check if this has no effect ??? --> */
/*
.instrument-button-icon.silent {
  fill: red;
  stroke: red;
}

.note-diamond.silent {
  fill: red;
  stroke: red;
}
 */

</style>
<meta charset="utf-8"/></head>
<body>
	<table id="navigation">
    <tr>
      <td>
        <a href="../index.html"><img src="../assets/images/sky-music-logo-sheets.png" width="100" height="100" /></a>
      </td>
      <td>
        <h1><a href="../index.html">Sky Music</a></h1>
      </td>
    </tr>
  </table>
<h1> Can't Help Falling in Love Intro </h1>
<p> <b>Original Artist(s):</b> Elvis Presley </p>
<p> <b>Transcript:</b> Fiqo Mendez</p>
<p> <b>Musical key:</b>  </p>
	
<iframe width="560" height="315" src="https://www.youtube.com/embed/svGjtIHeons" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div id="transcript">

<hr />
<table class="harp harp-0 "><tr><td>
<svg x="0" y="0" class="note-root harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.5" cy="45.4" r="26" class="instrument-button-icon highlighted-0"/><rect x="19.5" y="19.3" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 109.7415 45.2438)" width="52" height="52" class="instrument-button-icon highlighted-0"/>
</svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.4" cy="45.4" r="25.5" class="instrument-button-icon highlighted-0"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.5" cy="45.4" r="26" class="instrument-button-icon highlighted-0"/><rect x="19.5" y="19.3" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 109.7415 45.2438)" width="52" height="52" class="instrument-button-icon highlighted-0"/>
</svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> <table class="harp harp-1 silent"><tr><td>
<svg x="0" y="0" class="note-root unhighlighted harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="26" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root unhighlighted harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> <table class="harp harp-2 "><tr><td>
<svg x="0" y="0" class="note-root harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.4" cy="45.4" r="25.5" class="instrument-button-icon highlighted-0"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <rect x="22.6" y="22.7" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 45.3002 109.5842)" width="45.4" height="45.4" class="instrument-button-icon highlighted-0"/> </svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <rect x="22.6" y="22.7" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 45.3002 109.5842)" width="45.4" height="45.4" class="instrument-button-icon highlighted-0"/> </svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> <table class="harp harp-3 silent"><tr><td>
<svg x="0" y="0" class="note-root unhighlighted harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="26" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root unhighlighted harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> <table class="harp harp-4 "><tr><td>
<svg x="0" y="0" class="note-root harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.4" cy="45.4" r="25.5" class="instrument-button-icon highlighted-0"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.4" cy="45.4" r="25.5" class="instrument-button-icon highlighted-0"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.5" cy="45.4" r="26" class="instrument-button-icon highlighted-0"/><rect x="19.5" y="19.3" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 109.7415 45.2438)" width="52" height="52" class="instrument-button-icon highlighted-0"/>
</svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> <table class="harp harp-5 silent"><tr><td>
<svg x="0" y="0" class="note-root unhighlighted harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="26" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root unhighlighted harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> 
<hr />
<table class="harp harp-6 "><tr><td>
<svg x="0" y="0" class="note-root harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <rect x="22.6" y="22.7" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 45.3002 109.5842)" width="45.4" height="45.4" class="instrument-button-icon highlighted-0"/> </svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> <table class="harp harp-7 "><tr><td>
<svg x="0" y="0" class="note-root harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.4" cy="45.4" r="25.5" class="instrument-button-icon highlighted-0"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> <table class="harp harp-8 "><tr><td>
<svg x="0" y="0" class="note-root harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <rect x="22.6" y="22.7" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 45.3002 109.5842)" width="45.4" height="45.4" class="instrument-button-icon highlighted-0"/> </svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.4" cy="45.4" r="25.5" class="instrument-button-icon highlighted-0"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.4" cy="45.4" r="25.5" class="instrument-button-icon highlighted-0"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> <table class="harp harp-9 silent"><tr><td>
<svg x="0" y="0" class="note-root unhighlighted harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="26" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root unhighlighted harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> <table class="harp harp-10 "><tr><td>
<svg x="0" y="0" class="note-root harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.4" cy="45.4" r="25.5" class="instrument-button-icon highlighted-0"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.4" cy="45.4" r="25.5" class="instrument-button-icon highlighted-0"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.4" cy="45.4" r="25.5" class="instrument-button-icon highlighted-0"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> <table class="harp harp-11 silent"><tr><td>
<svg x="0" y="0" class="note-root unhighlighted harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="26" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root unhighlighted harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> 
<hr />
<table class="harp harp-12 "><tr><td>
<svg x="0" y="0" class="note-root harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <rect x="22.6" y="22.7" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 45.3002 109.5842)" width="45.4" height="45.4" class="instrument-button-icon highlighted-0"/> </svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.4" cy="45.4" r="25.5" class="instrument-button-icon highlighted-0"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <rect x="22.6" y="22.7" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 45.3002 109.5842)" width="45.4" height="45.4" class="instrument-button-icon highlighted-0"/> </svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> <table class="harp harp-13 silent"><tr><td>
<svg x="0" y="0" class="note-root unhighlighted harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="26" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root unhighlighted harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> <table class="harp harp-14 "><tr><td>
<svg x="0" y="0" class="note-root harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.4" cy="45.4" r="25.5" class="instrument-button-icon highlighted-0"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> <table class="harp harp-15 "><tr><td>
<svg x="0" y="0" class="note-root harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <rect x="22.6" y="22.7" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 45.3002 109.5842)" width="45.4" height="45.4" class="instrument-button-icon highlighted-0"/> </svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.4" cy="45.4" r="25.5" class="instrument-button-icon highlighted-0"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.5" cy="45.4" r="26" class="instrument-button-icon highlighted-0"/><rect x="19.5" y="19.3" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 109.7415 45.2438)" width="52" height="52" class="instrument-button-icon highlighted-0"/>
</svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> <table class="harp harp-16 silent"><tr><td>
<svg x="0" y="0" class="note-root unhighlighted harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="26" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root unhighlighted harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> 
<hr />
<table class="harp harp-17 "><tr><td>
<svg x="0" y="0" class="note-root harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.4" cy="45.4" r="25.5" class="instrument-button-icon highlighted-0"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <rect x="22.6" y="22.7" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 45.3002 109.5842)" width="45.4" height="45.4" class="instrument-button-icon highlighted-0"/> </svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <rect x="22.6" y="22.7" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 45.3002 109.5842)" width="45.4" height="45.4" class="instrument-button-icon highlighted-0"/> </svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> <table class="harp harp-18 silent"><tr><td>
<svg x="0" y="0" class="note-root unhighlighted harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="26" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root unhighlighted harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> <table class="harp harp-19 "><tr><td>
<svg x="0" y="0" class="note-root harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.4" cy="45.4" r="25.5" class="instrument-button-icon highlighted-0"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.5" cy="45.4" r="26" class="instrument-button-icon highlighted-0"/><rect x="19.5" y="19.3" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 109.7415 45.2438)" width="52" height="52" class="instrument-button-icon highlighted-0"/>
</svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.4" cy="45.4" r="25.5" class="instrument-button-icon highlighted-0"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> <table class="harp harp-20 silent"><tr><td>
<svg x="0" y="0" class="note-root unhighlighted harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="26" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root unhighlighted harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> <table class="harp harp-21 "><tr><td>
<svg x="0" y="0" class="note-root harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <rect x="22.6" y="22.7" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 45.3002 109.5842)" width="45.4" height="45.4" class="instrument-button-icon highlighted-0"/> </svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> <table class="harp harp-22 "><tr><td>
<svg x="0" y="0" class="note-root harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.4" cy="45.4" r="25.5" class="instrument-button-icon highlighted-0"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> <table class="harp harp-23 "><tr><td>
<svg x="0" y="0" class="note-root harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.4" cy="45.4" r="25.5" class="instrument-button-icon highlighted-0"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> 
<hr />
<table class="harp harp-24 "><tr><td>
<svg x="0" y="0" class="note-root harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.4" cy="45.4" r="25.5" class="instrument-button-icon highlighted-0"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.4" cy="45.4" r="25.5" class="instrument-button-icon highlighted-0"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.4" cy="45.4" r="25.5" class="instrument-button-icon highlighted-0"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> <table class="harp harp-25 silent"><tr><td>
<svg x="0" y="0" class="note-root unhighlighted harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="26" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root unhighlighted harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> <table class="harp harp-26 "><tr><td>
<svg x="0" y="0" class="note-root harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <rect x="22.6" y="22.7" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 45.3002 109.5842)" width="45.4" height="45.4" class="instrument-button-icon highlighted-0"/> </svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.4" cy="45.4" r="25.5" class="instrument-button-icon highlighted-0"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <rect x="22.6" y="22.7" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 45.3002 109.5842)" width="45.4" height="45.4" class="instrument-button-icon highlighted-0"/> </svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> <table class="harp harp-27 silent"><tr><td>
<svg x="0" y="0" class="note-root unhighlighted harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="26" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle unhighlighted harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond unhighlighted harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root unhighlighted harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> <table class="harp harp-28 "><tr><td>
<svg x="0" y="0" class="note-root harp-button-0" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.5" cy="45.4" r="26" class="instrument-button-icon highlighted-0"/><rect x="19.5" y="19.3" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 109.7415 45.2438)" width="52" height="52" class="instrument-button-icon highlighted-0"/>
</svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-1" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-2" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.4" cy="45.4" r="25.5" class="instrument-button-icon highlighted-0"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-3" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-4" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-5" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-6" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-7" width="1em" height="1em" viewBox="0 0 91 91">
<path class="instrument-button highlighted-0" d="M90.7 76.5c0 7.8-6.3 14.2-14.2 14.2H14.2C6.3 90.7 0 84.4 0 76.5V14.2C0 6.3 6.3 0 14.2 0h62.3c7.8 0 14.2 6.3 14.2 14.2V76.5z"/>
 <circle cx="45.5" cy="45.4" r="26" class="instrument-button-icon highlighted-0"/><rect x="19.5" y="19.3" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 109.7415 45.2438)" width="52" height="52" class="instrument-button-icon highlighted-0"/>
</svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-8" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-9" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr><tr><td>
<svg x="0" y="0" class="note-circle harp-button-10" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-11" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-circle harp-button-12" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-diamond harp-button-13" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td><td>
<svg x="0" y="0" class="note-root harp-button-14" width="1em" height="1em" viewBox="0 0 91 91">
<circle cx="45.4" cy="45.4" r="12" class="instrument-button-icon unhighlighted"/></svg></td></tr></table> 
</div>
</body>
</html>