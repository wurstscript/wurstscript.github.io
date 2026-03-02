[![pages-build-deployment](https://github.com/wurstscript/wurstscript.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/wurstscript/wurstscript.github.io/actions/workflows/pages/pages-build-deployment)
# WurstScript Webpage & Documentation

Live at https://wurstlang.org/

This folder contains the complete source of the WurstScript website, configured as jekyll project and deployed via github-pages.

# Developer Information

## Serving the page locally:

1. Check whether you have Ruby 3.2+ installed:

    `ruby --version`

    This project currently uses Bundler 4.x (see `Gemfile.lock`), which requires Ruby >= 3.2.

2. Install Bundler:

    `gem install bundler`

3. Execute

    `bundler install`


4. Run the server with:

    `bundler exec jekyll serve`

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

The site now uses `pagefind` for fully local static search. No external API key is required.

For GitHub Pages compatibility, the generated `pagefind/` folder is committed to this repository.

1. Build the site:

    `bundler exec jekyll build`

2. Generate the search index into `_site/pagefind`:

    `npx -y pagefind --site _site`

3. Sync the generated index into tracked `pagefind/`:

    `rm -rf pagefind && cp -R _site/pagefind ./pagefind`

   PowerShell equivalent:

    `if (Test-Path pagefind) { Remove-Item -Recurse -Force pagefind }; Copy-Item -Recurse _site/pagefind ./pagefind`

4. Serve `_site` (or deploy it). Search will load from `/pagefind/pagefind.js`.

Prerequisite for indexing: Node.js (for `npx pagefind`).

### Pre-commit Hook For Indexing

Set up repo hooks once:

`git config core.hooksPath .githooks`

Then every commit will:

1. Build Jekyll
2. Generate Pagefind index
3. Sync `_site/pagefind` to tracked `pagefind/`
4. Auto-stage `pagefind/`

To bypass once:

`SKIP_PAGEFIND_HOOK=1 git commit ...`

PowerShell equivalent:

`$env:SKIP_PAGEFIND_HOOK='1'; git commit ...; Remove-Item Env:SKIP_PAGEFIND_HOOK`

### Jenkins

This repo now includes a root-level `Jenkinsfile` that automatically:

1. Installs Ruby gems (`bundler install`)
2. Builds the site (`bundler exec jekyll build`)
3. Generates Pagefind index (`npx -y pagefind --site _site`)
4. Archives `_site/**` as build artifacts

To use it:

1. Create a Jenkins Pipeline (or Multibranch Pipeline) job for this repository.
2. Keep script source as `Jenkinsfile` in SCM.
3. Ensure the Jenkins agent has Ruby/Bundler and Node.js/npm available.

### Local dev with `jekyll serve`

`jekyll serve` rebuilds `_site`. To keep local search working:

1. Start Jekyll:

    `bundler exec jekyll serve`

2. In a second terminal, generate Pagefind index:

    `npx -y pagefind --site _site`

3. Repeat step 2 after content changes that should be searchable.
