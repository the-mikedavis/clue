# Clue

This readme is for any helpful knowledge you find during the sprints or
research. If you have anything to add, feel free to edit it.

## Homebrew

If you have a Mac, installing everything is much easier with
[Homebrew](https://brew.sh).

```shell
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

You should have ruby installed by default. Homebrew is a package manager
for MacOS that fills in the gaps of not having `apt`. You can install
pretty much anything with it. And it'll put it all in your path.

```shell
$ brew install git
$ brew install node
$ brew install postgresql
$ brew install solr
```

## Node.js

We'll be using a Node.js server to do some logic and to serve the results
page.

You can download Node [here](https://nodejs.org/en/).

### Express

Express is one of the easiest web app creation frameworks. Even if you
don't know JavaScript, you can easily pick up how to make pages with
Express.

### Nunjucks

Nunjucks is an HTML templating service for Node. It's a port of
[Jinja2](http://jinja.pocoo.org/docs/2.10/), from Python Flask.
Nunjucks will allow us to add things from the logic tier without
making API requests. The HTML page will leave the server with all the info
intact.

Here's an example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Nunjucks Example</title>
  </head>
  <body>
    <ul>
      {% for result in results %}
      <li><a href="{{ result.link }}">{{ result.name }}</a></li>
      {% endfor %}
    </ul>
  </body>
</html>
```

Nunjucks will also allow us to _macro-inject_ the search bar into all the
other pages. That way we're completely contained. The other teams will have
to modify only one or two lines to put the bar on their page.

```html
{% macro searchbar(defaultQuery = '') %}
<link rel="stylesheet" type="text/css" href="/path/to/searchbar.css">
<div id="searchbar">
  <input type="text" name="search" value="{{ defaultQuery | escaped }}"/>
</div>
{% endmacro %}
```

Check out [the documentation](https://mozilla.github.io/nunjucks/).

### This Repo

To download and contribute to this repo, first **clone** it from the
menu above. You'll also need to have downloaded Node from the link above.

In a shell, `cd` to where you cloned the repo. You'll need to install the
depedencies from the `package.json`. You can do that with this:

```shell
$ npm install
```

Then you can run the server with this:

```shell
$ node index.js
```

To edit the server and see how it works, edit `index.js`.

### Nodemon

[Nodemon](https://nodemon.io/) is a development tool for Node.js that allows
you to work while your server is running. It restarts the server when you edit
any files in the project.

Install it after you installed Node with:

```shell
$ npm install -g nodemon
```

You can run it like this:

```shell
$ nodemon -e html,js index.js
```

That restarts the Node server every time you save a file ending in `.js` or
`.html`.

### SASS

[Sass](https://sass-lang.com/) is a language that extends and compiles down
to CSS. It makes producing CSS really easy. The best part is the nested rules,
which allow you to do this:

```sass
nav {
  // some rules for the nav
  ul {
    // some rules for the list inside the nav
    li {
      // some rules for the list element inside the nav list
      ... // and so on
    }
  }
}
```

Which would be this in regular CSS:

```css
nav {
  /* some rules for the nav */
}

nav ul {
  /* some rules for the list inside the nav */
}

nav ul li {
  /* some rules for the list element inside the nav list */
}

/* ... and so on */
```

Sass is a _superset_ of CSS, which means that if you write pure CSS in a
Sass file, it's perfectly fine. Another thing: Sass files usually end in
`.scss`, which stands for "Sassy CSS."

The docs are [here](https://sass-lang.com/documentation/file.SASS_REFERENCE.html).

On MacOS, you can install it with:

```shell
$ gem install sass
```

Once you have it installed, you can make Sass watch the directories to
compile every time you save a `.scss` file:

```shell
$ sass --watch scss:css
```

That converts all the Sass files in the `scss` directory into CSS in the
`css` directory. So any edits you make to the styling should go in the `scss`
folder.

## Solr

Installing Solr can't be done on a Linux Machine through `apt`. First install
java and then solr.

```shell
$ sudo apt update
$ sudo apt install default-jdk
$ cd ~
$ wget http://apache.claz.org/lucene/solr/7.2.1/solr-7.2.1.tgz
$ tar zxf solr-7.2.1.tgz
$ cd solr-7.2.1
```

On MacOS:

```shell
$ brew install solr
```

Then you can start Solr with `bin/solr start`. This will put Solr on port
`8983`. Go to the IP of the machine at that port in the browser to get
the admin landing page. (On my machine that's
`http://localhost:8983/solr/`).

