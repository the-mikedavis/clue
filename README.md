# Clue

This readme is for any helpful knowledge you find during the sprints or
research. If you have anything to add, feel free to edit it.

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
