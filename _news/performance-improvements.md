---
title: Performance and Determinism
excerpt: Wurst is now better than ever.
date: 2023-09-14
image: /assets/images/news/performance.png
layout: newsarticle
author: Frotty
---

## Major Updates to the Wurst Build Process: Enhanced Performance and Determinism

We're excited to announce that we have rolled out several key updates to improve the performance and determinism of the Wurst build process. Our latest enhancements focus on streamlining various areas, significantly reducing build time, and ensuring that building the same source code consistently results in the same output code.

### Faster Compile Time and Deterministic Builds

Our updates bring about faster compile-time execution, benefiting both Jass and Lua modes. However, the most notable improvements predominantly affect the Jass mode. By making builds deterministic, we are laying the groundwork for enhanced support for Jass Hot Code Reload. Stay tuned as we are diligently working on an update for this feature.

### Lua Mode for Warcraft III Reforged

For developers working on maps for the latest Warcraft III Reforged patch, we recommend enabling Lua mode with the `-lua` run argument. Lua mode is not only faster to build due to fewer transformation steps required, but also much more performant in the map. However, developers should be mindful of the subtle differences between Jass and Lua, which might lead to unexpected issues.

### Embracing the Future of Map Development

Our goal is to provide the Wurst community with the tools and improvements necessary for efficient and reliable map development. By choosing the optimal mode for your project and leveraging our latest updates, you can enhance your development workflow and contribute to the rich ecosystem of Warcraft III maps.

---

Stay updated with our progress and share your experiences with the Wurst build process. Your feedback is invaluable as we continue to refine and expand our tools to meet the community's needs.
