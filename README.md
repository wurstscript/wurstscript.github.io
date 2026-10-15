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


4. Generate the API reference from a sibling checkout of `WurstStdlib2`
   (requires Deno 2.x):

    ```shell
    cd tools/docgen
    deno task gen
    cd ../..
    ```

    See [the doc generator guide](tools/docgen/README.md) for custom source paths.

5. Run the server with:

    `bundler exec jekyll serve`

## Styling

We use Sass as stylesheet language and you can find the files inside the `_sass` folder.

Bootstrap, Font Awesome, and Prism are managed through `package.json`. After
updating them, refresh the checked-in browser assets with:

```shell
npm install
npm run vendor:frontend
```

Do not edit files under `assets/plugins/bootstrap`, `assets/plugins/font-awesome`,
or `assets/plugins/prism` by hand.

## Tutorials

Tutorials are included as part of the documentation in their own section.

To create a new tutorial:

* Create a new markdown file in the `_tutorials/` folder, for example `cp saveload.md new_tutorial.md`.
* Adjust the frontmatter such as title, excerpt, date
* The tutorial will be automatically added to the documentation page, the sidebar is generated from markdown headings

## Standard library doc

Adding a standard library doc page works almost the same as tutorials.

* Create a guide in `_doc/stdlib/` with the `stdlibdoc` layout. Use an existing guide as a starting point.
* Put supporting section pages in a subfolder and list their document IDs in the guide's `sections` frontmatter.
* Link the guide from the relevant category in `_doc/stdlib/intro.md`.
* Add its package-to-guide mapping to `_data/stdlib_curated.yml` to link it from the generated API reference.

API pages under `_doc/stdlib/ref/` are generated from standard-library source comments.
See [the doc generator guide](tools/docgen/README.md) before updating them.

## Search Index

The site uses [`pagefind`](https://pagefind.app/) for fully local static search. No external API key is required.

**The index is generated automatically by CI on every deploy.** See
[`.github/workflows/pages.yml`](.github/workflows/pages.yml). It builds the
site, runs Pagefind against the *built* `_site`, and deploys the result to
GitHub Pages. Because the index is rebuilt from the actual content on every
deploy, it can never drift out of sync.

> **Do not commit a `pagefind/` folder.** It is `.gitignore`d on purpose. A
> hand-committed index drifts from the content and breaks search (you get
> "SEARCH INDEX NOT FOUND" on the live site). Let CI generate it.

### One-time GitHub setup

In repo **Settings → Pages → Build and deployment**, set **Source** to
**"GitHub Actions"**. The workflow then publishes the site (custom domain
`wurstlang.org` is preserved via the `CNAME` file).

### Local dev with `jekyll serve`

`jekyll serve` does not generate a search index. To preview search locally:

1. Build the site: `bundle exec jekyll build`
2. Generate the index into `_site/pagefind`: `npx -y pagefind@1.5.2 --site _site`
3. Serve `_site` (e.g. `npx -y serve _site`). Search loads from `/pagefind/pagefind.js`.

Repeat steps 1-2 after content changes you want reflected in local search.
Prerequisite: Node.js (for `npx pagefind`).

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
