[![pages-build-deployment](https://github.com/wurstscript/wurstscript.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/wurstscript/wurstscript.github.io/actions/workflows/pages/pages-build-deployment)
# WurstScript Webpage & Documentation

Live at https://wurstlang.org/

This folder contains the complete source of the WurstScript website, configured as jekyll project and deployed via github-pages.

# Developer Information

## Serving the page locally:

1. Check whether you have Ruby 2.7.4 installed:

    `ruby --version`

2. Install Bundler:

    `gem install bundler`

3. Execute

    `bundle install`


4. Run the server with:

    `bundle exec jekyll serve`

## Styling

We use Sass as stylesheet language and you can find the files inside the `_sass` folder.

## Tutorials

Tutorials are included as part of the documentation in their own section.

To create a new tutorial:

* Create a new markdown file in the `_tutorials/` folder, for example `cp saveload.md new_tutorial.md`.
* Adjust the frontmatter such as title, excerpt, date
* The tutorial will be automatically added to the documentation page, the sidebar is generated from markdown headings

## Standard library doc

Adding a standard library doc page works almost the same as tutorials.

* Create a new table of contents file in `_doc/stdlib/`
* Create a new set of tuturial pages in a subfolder of `_doc/stdlib/`, e.g. `_doc/stdlib/new_doc`
* Define the pages by changing the contents of `_doc/stdlib/new_doc/`
* __This part differs__ Add the new doc page to the stdlib index in `_doc/stdlib/intro.md`. Entries should be alphabetically sorted.
* Setup `new_doc.md` as necessary for your pages:
    - Edit the title, excerpt, date, color.
    - Change the `sections` to match the uri of the pages of your tutorial.
* Write your new_doc pages, being sure to update the heading sections as necessary.

## Building Search Index

1. Set the key as environment variable `$env:ALGOLIA_API_KEY='PRIVATE_KEY'`

2. Run `bundle exec jekyll algolia`
