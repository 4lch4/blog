---
title: How To Create Your Own Digital Garden w/ Docusaurus
summary: 'How to use Docusaurus, GitHub, and Vercel to create your own Digital Garden.'
images:
  - ''
date: '2021-07-06 15:38:23'
createdDate: '2021-07-06 15:38:23'
modifiedDate: '2021-08-28 @ 11:08:29'
publish_date: '2021-07-25 11:06:23'
author: 4lch4
tags:
  - Digital Garden
  - Self-Hosted
  - Projects
  - How-To
draft: true
---

First things first, if you aren't sure what a Digital Garden (DG) is, then I highly recommend you read ["A Brief History & Ethos of the Digital Garden"][0] from Maggie Appleton. She explains the concept _much_ better than I ever could 😅

## Before We Begin

Before we get started, we need to get a few things together:

1. (Optional) Get a domain name to point to your DG.
   1. I purchased 4lch4.garden from [Hover][1], but any domain will do.
2. Determine where we're gonna host the site.
   1. I use Vercel to host my site as it's free and integrates nicely with GitHub.
   2. I'll also show how to host the site using something like Nginx on a VM in Digital Ocean.
3. Have Node.js/npm installed on your machine.
   1. I use v16, but any version after and including v10 will work.

## Creating the Site

To create the site, we're going to use @docusaurus/init, a module published by the Docusaurus team to help get a new site up and running. To do this, open a terminal and navigate to where you want the code to be stored, and run the following command:

`npx @docusaurus/init@latest init <website-name-here> classic`

Here's a quick breakdown of what each part of that command does/means:

- `npx`
  - The npm package for running node modules without installing them globally/locally.
- `@docusaurus/init@latest`
  - Says to use the latest version of docusaurus/init module to create your site.
- `init`
  - Tells the module to initialize a new site.
- `<website-name-here>`
  - The name of your website goes here, pretty self-explanatory.
- `classic`
  - This is the preset to use for creating your site.
  - I recommend using the classic preset unless you know what you're doing. Otherwise, you can use something like [the bootstrap preset][2] that's available.

When you run the command, you should see it output some messages like so:

![Docusaurus Init 0](../../../../public/static/images/posts/Digital-Garden/Docusaurus-Init-0.png)

![Docusaurus Init 1](../../../../public/static/images/posts/Digital-Garden/Docusaurus-Init-1.png)

The 2nd image shows what we're _really_ after, which is the last command displayed:

```bash
cd docusaurus-defaults
yarn start
```

If you have yarn installed, you'll see `yarn start`; otherwise, it'll show you regular NPM commands. Either way, we want to go into the directory and start up the site as shown.

When you run `yarn start`, it'll give you some info and open a new tab in your default browser that goes to your dev instance of the site:

![Docusaurus Start](../../../../public/static/images/posts/Digital-Garden/Docusaurus-Start-0.png)

![Docusaurus Site](../../../../public/static/images/posts/Digital-Garden/Docusaurus-Site-0.png)

Again, the 2nd image is the one we're _most_ interested in as it shows how the newly built site looks. At this point, you have a server running locally in dev mode, which means it's monitoring your directory for any file changes. Now the site is quickly rebuilt, and the changes are immediately reflected.

## Making It Your Own

We now have a basic site up and running using Docusaurus, so let's make some changes, so the site looks like it's my own.

If you haven't already, open up your Docusaurus folder in an editor of sorts. I use VSCode, but just about anything works as long as you have a terminal running the start command in the background. Once you do, you'll want to open the `package.json` and `docusaurus.config.js` files.

### package.json

Within the package.json file, you'll want to change or add the following values:

- `name` - (Required)
- `private` - (Optional)
  - Do you want to publish the packaged site to NPM or keep it private?
- `repository` - (Optional)
  - A simple URL to your git repo would suffice.
- `description` - (Optional)
- `displayName` - (Optional)

### docusaurus.config.js

This file provides the vast majority of information about your site, so it helps to get a bit familiar. The first thing we wanna do is change out the default names to whatever we'd like:

- `title`
  - The title of your site, which is also displayed in the title bar for your site.
- `tagline`
  - A brief description used in a few places on the site.
- `url`
  - If this value isn't correct when you publish/deploy your site, you'll be greeted with a big error message and your site will _not_ work.
  - If you're using a custom DNS address then put it here, including HTTPS.
  - If you're not using a custom DNS address or simply don't know what your URL will be, then don't sweat it. We can come back to this later.
- `organizationName` / `projectName`
  - As the comment points out, this is usually your GitHub username/org and the name of the repo where your code is stored.
- `themeConfig`
  - This is where you'll build out your navbar, footer links, etc.
  - `title`
    - I'd set this to the same value as your title above.
  - `logo`
    - Make sure this is pointing to a legit
  - Make sure the title and logo are pointing to valid links/information.
  - Under items, you can specify what you want in the navbar up top and where it should link.

When you run the command it'll attempt to set things up for you to the point where a single command will fire up the default site. Tyhe

Before we get started, there are a few things that it helps to know or at least be aware of:

- How/Where you wanna host the finished product.
  - I host my website using GitHub for the code and the website is deployed to Vercel for free.
  - You can host your website just about anyway you desire but I'll only be covering two methods. Vercel and self-hosting with something like Nginx.
- What you 

If you're interested in hosting your own "Digital Garden" with articles, notes, w/e you fancy, then you've come to the right place 😅

[0]: https://maggieappleton.com/garden-history
[1]: http://hover.com/
[2]: https://docusaurus.io/docs/presets#docusauruspreset-bootstrap
