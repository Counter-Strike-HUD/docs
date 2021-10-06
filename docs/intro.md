---
id: intro
title: Introduction
slug: /
---

# Introduction

Native HLDS or ReHLDS server doesnt have any stream method unlike CSGO to send game events to specific endpoint (there is remote logging, but information sended is sufficial).


So to make this project work we had to recreate that feature in AmxModX. 


For connections we use TCP sockets, and full diagram of connections is like below.

![graph1](/img/tutorial/graph1.png)