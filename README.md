# SSG Project Manager

A set of user interface patterns, [Lume](https://lumeland.github.io/) templates, and shell scripts for static site generation (SSG) and deployment to GitHub Pages.

## Usage

```shell
git checkout https://github.com/devowhippit/ssg-project-manager pm
```

Create a new project directory next to the project manager directory.

```shell
mkdir my-project
```

Copy the [site.sample.js](site.sample.js) into your project where your Lume configuration will go.

```
cp pm/site.sample.js my-projec/site.js
```

Modify the details for your new site. Then, [review the Lume documentation](https://lumeland.github.io/getting-started/overview/) on creating your first page. Load project manager command aliases.

```shell
source pm/bin
```

Below is a description of the available commands. Inspect the [bin](bin) file for more details.

## Commands

Command       | Description
--------------|-
`start`       | Starts the [Lume](https://lumeland.github.io/) development server.
`tailwindcss` | Compiles [Tailwindcss](https://tailwindcss.com/) utilities.
`optim`       | Opens the *{{ project }}/src/img* directory in [ImageOptim](https://imageoptim.com/mac).
`build`       | Builds the static site using [Lume](https://lumeland.github.io/) and compiles [Tailwindcss](https://tailwindcss.com/) utilities.
`publish`     | Publishes to `gh-pages` branch.
