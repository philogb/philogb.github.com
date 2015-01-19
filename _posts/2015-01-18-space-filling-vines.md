---
layout: post
title: "Space-Filling Vines"
category: Visualization
tags: [Twitter, PhiloGL]
thumb: assets/random/1.jpg
permalink: space-filling-vines
position: center center

---

For hackweek I worked on new visuals for the displays in the Twitter
office. The main idea
behind this visualization is to use the [random space filling tiling of
the plane](http://www.paulbourke.net/texture_colour/randomtile/)
algorithm to fill the space with potential screens to play
vine videos, or show Tweets.

![filling](/assets/random/2.jpg)

The application uses WebGL and instanced-arrays to render the different motifs. We render
about 100,000 primitives on each stage. Here's a video of how it looks:

<iframe width="750" height="563" src="//www.youtube.com/embed/Nj_ncLwsJmI?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen="true">
</iframe>

The application works on displays that are set to be portrait. Here are
a few pictures of how the portrait layout looks like:

![filling](/assets/random/3.jpg)

![filling](/assets/random/4.jpg)

![filling](/assets/random/5.jpg)

Vines by:

 * [Fiña DuBois](https://vine.co/v/Odxn59ZlYTd)
 * [Danorst](https://vine.co/v/OdjMqzZAjL5)
 * [Wesley Thomas](https://vine.co/v/MgBWtqVBuuY)
 * [GooRee Designs Things](https://vine.co/v/OebHajIWEpT)
 * [Tragic Tofu](https://vine.co/v/OatDqJIWztw)
 * [GooRee](https://vine.co/v/OavtOUTrqdX)
 * [pxlwrx](https://vine.co/v/Oa3AYlZYmeJ)
 * [DeathSmoKe](https://vine.co/v/O7g3JqTz1gM)
 * [Tragic Tofu](https://vine.co/v/O6XrrztVgnq)
 * [margar!dA](https://vine.co/v/OilhwUaWUPm)
 * [GooRee](https://vine.co/v/OhQeHdgd6Mt)
 * [Moik](https://vine.co/v/OJv9wVh55vZ)
 * [folium](https://vine.co/v/OvYEqFxndzu)
 * [Noah Kalina](https://vine.co/v/OnZb6vZ7662)

I'm working on open-sourcing the project so that other people can use it
with their own content.
