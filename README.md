# Platformer Overkill

## What is This?
This is intended as a more extended version of the project built in this tutorial: https://stackabuse.com/phaser-3-and-tiled-building-a-platformer/

If you're just learning Phaser, I would recommend going through the original tutorial before continueing with this.

## But Why?
Most tutorials are deliberately simple. This is so one or two concepts can be explained without a bunch of unrelated information getting in the way.

This is fine if you're already experienced with setting up a project. But if you're just learning, you may not know where to go after doing the simple tutorials found all over the internet.

## Isn't this overkill?
Well, yes. Making a full, production ready project for a game this simple is kind of over kill. But, again, it's to teach one concept without unrelated information getting in the way. In this case, how to set up a project with Phaser.

In this case I'm using Phaser with Angular.

## Why Angular?
There are two questions here, so I'll answer them one at a time:

**Why use a Web UI framework?**

One thing that is true of all game engines I've worked with: No matter how good the engine is, it falls seriously short with UI. Especially compared to what can be done with Web UI frameworks. HTML templates and CSS provide a powerful set of UI tools that most engines lack.

**Why Angular over other frameworks?**

Yeah, I'm not pulling the pin on that grenade. Everyone has their favorite. Admittadly I've only work with Angular and React. For a number of reasons I chose Angular.

## So how do I get started?
There are a couple of things you'll need before you can build a project like this:
1. [Node](https://nodejs.org/)
1. [The Angular CLI](https://angular.io/cli)

To create a new project use the command `ng new my-project`. It will ask two questions before it starts to create the project. For routing, I chose not to include it (the default option). For CSS I chose SCSS.

I created a PR in this repository for each change I made in the process of creating this project.
This is so I could include an explanations and so others could see only the code changes I made for that step.

The closed PRs in order from start to finish is here: https://github.com/paulreitz/platformer-overkill/pulls?q=is%3Apr+is%3Aclosed+sort%3Acreated-asc


