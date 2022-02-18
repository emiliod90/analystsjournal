---
title: "Very useful enterprise architecture diagrams"
date: "17 Feb 2022"
author:
  name: Emilio D'Souza
---

## Structural (Architecture) Diagrams

### System / Application Landscape Diagram

The high level visualisation of an enterprises application landscape. Provides a useful snapshot of how all of the software systems fit together within the bounds of an enterprise.

See the C4 model - System Landscape diagram for more information.

![System Landscape Diagram in Structurizr](/images/structurizr-28201-SystemLandscape.svg?sanitize=true)


### System / Application Context Diagram (C4)

A System Context diagram provides a starting point for diagramming and documenting a software system, showing how the software system in scope fits into the world around it. 

The focus should be on people (actors, roles, personas, etc) and software systems rather than technologies, protocols and other low-level details - making it very suitable for non-technical audiences.

![System Context Diagram in Structurizr](/images/structurizr-36141-SystemContext.svg?sanitize=true)

### Container Diagram

A Container diagram zooms into the software system in scope, showing the high-level technical building blocks.

In the C4 model, a container represents an application or a data store. A container is something that needs to be running in order for the overall software system to work. (Not to be confused with Docker!)

![Container Diagram in Structurizr](/images/structurizr-36141-Containers.svg?sanitize=true)

The C4 Container Diagram is very similar to the Application Communication Diagram (TOGAF) - which shows application components and logical interfaces between components.

### Entity Relationship Diagram

An Entity Relationship Diagram (ERD) illustrates the relationships between data entities from a static point of view. They generally include the attributes of the entity and the *type* of relationship it has with other entities, making it very useful for representing data models.

If you need to depict the state and behaviour, a **class diagram** is more suitable. Learn more about the difference [here.](https://www.cs.toronto.edu/~sme/CSC340F/2005/slides/tutorial-classes_ERDs.pdf)




## Tools
- [Structurizr](https://www.structurizr.com/)
- [draw.io/diagrams.net](https://www.diagrams.net/)
- Visio
- [Archimate](https://www.archimatetool.com/)