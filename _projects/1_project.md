---
layout: page
title: Master Thesis
description: Hierarchical Reinforcment Learning for Agile Loco-manipulation
img: assets/img/evoBOTim.jpg
importance: 1
category: academic & work
related_publications: false
---

## Master’s Thesis — Hierarchical Deep Reinforcement Learning for Loco-Manipulation

This master’s thesis was conducted at **[Regelungstechnik, TU Dortmund University](https://rst.etit.tu-dortmund.de/)** and at the former Department of **AI and Autonomous Systems, [Fraunhofer IML](https://www.iml.fraunhofer.de/)**. The research was carried out as an independent thesis under the supervision of **[Prof. Dr. Frank Hoffmann](https://rst.etit.tu-dortmund.de/lehrstuhl/team/hoffmann/)** and **[Dr. Julian Eßer](https://www.iml.fraunhofer.de/de/abteilungen/b1/informationslogistik_und_assistenzsysteme/team_digitalisierung/unser-team-digitalisierung/julian-esser.html)**.

The thesis introduces a **novel hierarchical deep reinforcement learning methodology** for end-to-end robot learning. A two-level policy architecture—comprising high-level decision-making and low-level control policies—is employed to enable autonomous robot navigation and is further extended to **loco-manipulation** tasks.

The experimental platform is the **[evoBOT](https://www.iml.fraunhofer.de/en/fields_of_activity/material-flow-systems/iot-and-embedded-systems/evobot.html)**, a robot characterized by highly complex and difficult-to-model dynamics. Training was performed using a GPU-accelerated deep reinforcement learning pipeline in **NVIDIA Isaac Sim**, as part of **OmniIsaacGymEnvs (Isaac Lab)**.

The primary objective of the thesis was to develop a **fully autonomous pick-and-place solution** in which the evoBOT learns to transport an object between two locations using **only onboard IMU data**, without any vision or external sensing. This sensing constraint, combined with the robot’s complex dynamics, makes the problem particularly challenging and distinguishes the work from conventional vision-based approaches. The results demonstrate that hierarchical policy learning enables robust coordination of navigation and manipulation behaviors under these constraints.



<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/evofin.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    evoBOT in Autonomous Loco-Manipulation
</div>


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
  {% include figure.liquid loading="eager" path="assets/img/grp1.png" title="graph metric" class="img-fluid rounded z-depth-1 same-size-img" %}
</div>
<div class="col-sm mt-3 mt-md-0">
  {% include figure.liquid loading="eager" path="assets/img/graph2.png" title="graph" class="img-fluid rounded z-depth-1 same-size-img" %}
</div>

    
</div>
<div class="caption">
   The above metric graphs are related to episode length and reward value and on the right side shows the 2D trajectory of robot in eaching goal position.
</div>



<div class="row justify-content-sm-center">
    
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/evo2gif.gif" title="evonav" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    evoBOT in Autonomous Navigation. Red cones are target location to reach.
</div>



