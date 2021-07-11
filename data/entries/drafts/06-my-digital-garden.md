---
title: My Digital Garden
summary: 'A look at what I call my Digital Garden and what that means.'
images: ['']
date: '2021-07-06 14:38:17'
author: 4lch4
draft: true
tags: ['Digital Garden', 'Self-Hosted', 'Personal Projects']
---

Sometime in April, I was on Hacker News when I came across [this article][0] about an individual who had been writing TIL snippets for the last 5 years. I realized nearly immediately that I _had_ to do something similar, so I spun up [a site][3] using [Docusaurus][1] that enabled me to post content with extreme ease.

In the article, Josh (the author) mentioned something called [Learning in Public][2] which I'd never heard of before. I dug into that further and came across Digital Gardens. What I found interesting about Digital Gardens and Learning in Public is it reminded me of the internet pre-Facebook. Back when it felt like everyone and their mom had a Geocities site or some sort of presence on the web that they controlled.

So, after going down a few rabbit holes, I came back to the surface and set out to create my own.

## So What is a Digital Garden Exactly?

I find this quote from Maggie Appleton's article to be the best description of what a Digital Garden is:

> They're not following the conventions of the "personal blog," as we've come to know it. Rather than presenting a set of polished articles, displayed in reverse chronological order, these sites act more like free form, work-in-progress wikis.
> [Maggie Appleton - 2020][4]

In practice, this can be seen if you check out my digital garden. I have a section for each of the following:

- Notes
  - Bits of knowledge that are too long for a TIL snippet, and yet too short to be a cheatsheet or blog post.
- TILs
  - Where I store bits such as how to do custom path aliases in TypeScript so you don't have ridiculously long import statements.
- Cheatsheets
  - Short guides for all sorts of things. The majority of which I got from forking the original Cheatsheets repo I was following. I've been adding my own and modifying the existing ones to be more helpful in my situation for the last year or so.
- Finds
  - At the moment this is where I store things that are essentially copies of existing content that I worry may disappear from the net in the future.
  - This one is most likely going to be bundled under the notes section as it doesn't seem like it needs it's own entire category.

All of these sections are just directories within a `docs` directory like so:

```bash
.
├── .docusaurus/
├── node_modules/
├── src/
│   ├── pages/
│   ├── css/
│   └── components/
├── static/
│   └── img/
└── docs/
    ├── tils/
    ├── notes/
    │   ├── cheatsheets/
    │   ├── development/
    │   └── infrastructure/
    └── finds/
```

For more information on how I have this setup, you can check out the [Docusaurus documentation][5] or my other post on how to create your own Digital Garden.

After I set that up, I looked closer at the article and started reading up on "Learning in Public" and Digital Gardens.

I recently stumbled upon the idea of a Digital Garden and "Learning in Public."

[0]: https://news.ycombinator.com/item?id=22908044
[1]: https://docusaurus.io/
[2]: https://dev.to/jbranchaud/how-i-built-a-learning-machine-45k9
[3]: https://4lch4.garden
[4]: https://maggieappleton.com/garden-history#:~:text=They%27re%20not%20following%20the%20conventions%20of%20the%20%22personal%20blog%2C%22%20as%20we%27ve%20come%20to%20know%20it.%20Rather%20than%20presenting%20a%20set%20of%20polished%20articles%2C%20displayed%20in%20reverse%20chronological%20order%2C%20these%20sites%20act%20more%20like%20free%20form%2C%20work-in-progress%20wikis.
[5]: https://docusaurus.io/docs
