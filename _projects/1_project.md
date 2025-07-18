---
layout: page
title: Master Thesis
description: Hierarchical Reinforcment Learning for Agile Loco-manipulation
img: assets/img/evoBOTim.jpg
importance: 1
category: academic & work
related_publications: false
---

This was the master thesis project carried oout at [**Regelungstechnik, TU Dortmund**](https://rst.etit.tu-dortmund.de/) and at the (then) department of KI und Autonome system, [**Fraunhofer IML**](https://www.iml.fraunhofer.de/). This was a solo thesis research carrried out under the supervision of [**Prof. Dr. Frank Hoffmann**](https://rst.etit.tu-dortmund.de/lehrstuhl/team/hoffmann/) and [**Phd, Mr. Julian Eßer**](https://www.iml.fraunhofer.de/de/abteilungen/b1/informationslogistik_und_assistenzsysteme/team_digitalisierung/unser-team-digitalisierung/julian-esser.html).
The thesis is highly novel in terms of research methodology where the concept of hierarchy is used in the end to end learning of robot navigation which is further extended to loco-manipulation. The image below represents the  [**evoBOT**](https://www.iml.fraunhofer.de/en/fields_of_activity/material-flow-systems/iot-and-embedded-systems/evobot.html) in my Deep Reinforcment learning based pipelin in Nvidia GPU and simulation Isaac sim. This work was part of OmniIsaacGymEnvs(IsaacLAb). The goal of the thesis was to make a fully autonomous solution where the evoBOT learns to pick and place an object from one point to another point using only IMU onboard sensor with no vision data. This marks a highly unique and novel research experiment as the robot itself is a highly complex dynamics difficult to model. Further more the researcg explores on the Hierarchy concept of two policies of low and high level neural networks to accomplish the goal.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/evogif.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    evoBOT in Autonomous Loco-Manipulation
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
  {% include figure.liquid loading="eager" path="assets/img/grp1.png" title="example image" class="img-fluid rounded z-depth-1 same-size-img" %}
</div>
<div class="col-sm mt-3 mt-md-0">
  {% include figure.liquid loading="eager" path="assets/img/grp2.png" title="example image" class="img-fluid rounded z-depth-1 same-size-img" %}
</div>

    
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>



<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/hrl.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/evo2gif.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
