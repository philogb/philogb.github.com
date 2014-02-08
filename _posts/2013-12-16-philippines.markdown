---
layout: post
title: Philippines
permalink: help-the-philippines
category: Visualization
tags: [JavaScript, WebGL, Twitter]
thumb: assets/philippines/2.png
theme: white

---

![Map picture](/assets/philippines/1.png)

When Typhoon Haiyan struck the Philippines on November 7 it was the strongest tropical storm ever to hit land. Thousands of people have called for help and donations on Twitter. [This interactive map](http://twitter.github.io/interactive/philippines/) shows every geotagged Tweet mentioning the word ‘help’ (in 22 different languages) combined with key terms around the disaster.

## The visualization technique

The visualization uses a [JavaScript implementation](http://github.com/philogb/mingle) of the paper [Multilevel Agglomerative Edge Bundling
for Visualizing Large Graphs](http://www2.research.att.com/~yifanhu/PUB/edge_bundling.pdf)
 (Emden R. Gansner, Yifan Hu, Stephen North, Carlos Scheidegger).

The edge bundling algorithm groups edges together to minimize the amount of
ink used to render a graph. This particular paper introduces a fast
technique to perform edge bundling.

Take for example this map connecting locations between the east coast in
the US and western Europe:

![easteurope image 1](https://raw.github.com/philogb/mingle/master/img/easteurope1.png)

The algorithm creates a proximity graph for the edges where each of the
edges is represented by a node. Then the algorithm bundles edges as long
as we're saving some ink in the final rendering. Here's an intermediate
step on the bundling animation:

![easteurope image 1](https://raw.github.com/philogb/mingle/master/img/easteurope2.png)

And here's the final result:

![easteurope image 1](https://raw.github.com/philogb/mingle/master/img/easteurope3.png)

