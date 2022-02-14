---
title: 'Building Analysts Journal with Next.js'
date: '2022-13-09T08:32:37Z'
author:
  name: Emilio D'Souza
---

## Next.js Scaffold


### Key Next.js features

getStaticProps allow us to return props to our React component that’s going to be pre-rendered by Next.js. It gets the `context` object as a parameter and should return an object of the form.

If we want to create a blog, we’ll want to load pages dynamically. The getStaticPaths function needs to return an object, having a paths as well as fallback property:

- The pathssection contains the number of pages that should be pre-rendered.
- The returned params object can be accessed from within the getStaticProps which we’ve seen before and potentially remapped to something else.



In short, fallback:false renders only the set of pages returned by the pathsproperty. If a given page doesn’t find a match, a 404 page (that comes with Next.js) is being rendered.


### Key References
- https://blog.nrwl.io/create-a-next-js-web-app-with-nx-bcf2ab54613
- https://blog.nrwl.io/read-and-render-md-files-with-next-js-and-nx-89a85c1d9b44
