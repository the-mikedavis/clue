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

I think the Windows alternative to brew is [scoop](http://scoop.sh/),
but it's for PowerShell.

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

## The Database

It's kind of a long process. If you can develop without downloading the
database, I recommend it.

#### PostgreSQL

First, install [Postgres](https://www.postgresql.org/download/). With
homebrew:

```shell
$ brew install postgresql
```

And configure it to start any time you start your computer (follow the
given prompts).

The default username and password are `postgres` and `postgres`. You
probably don't need to change it on your local machine but the database
team should on the production machine.

#### The Database Script from Tim

Download Tim's DB dump: the `barranquilla.gov.co.zip` file from
BlackBoard. Unzip it:

```shell
$ cd ~/Downloads
$ unzip barranquilla.gov.co.zip
$ cd database
```

The `createDatabase_lasFlores.sql` is the database dump. You can use the
instructions in the `copySQL.txt` file to copy in the data stored in the
`*.data` files. Unfortunately, it's not that simple. You need to install
an extension before you can do anything.

#### PostGIS

Postgis is an extension for a Postgres database that allows location data.
You can try to find the download [here](https://postgis.net/install/).
And follow these instructions
[here](http://postgis.refractions.net/documentation/manual-1.5/ch02.html),
but it's really much simpler with a package manager. The database team
will probably figure out how to do it on the production machine. I don't
know about Windows, but MacOS can install it with:

```shell
$ brew install postgis
$ psql <name>
<name>=# CREATE EXTENSION postgis;
<name>=# \q
```

Where `<name>` is the name of your database user. You can use the default
`postgres` user or you can use your username for your computer. Mine is
`michael`. You can see yours by doing this:

```shell
$ psql
```

The user it logs you in as is your user. If you get an error for running that,
use just:

```shell
$ createdb
```

With no arguments, psql will make a database for your username. You can see
all your databases and users like this:

```shell
$ psql postgres
postgres=# \du
postgres=# \list
postgres=# \q
```

Where `\du` gives the users and their permissions and `\list` gives the
databases.

#### Creating the `lasflores` Database

Now you're ready to add the database stuff from Tim. Go ahead and do that with
this:

```shell
$ cd ~/Downloads/database
$ psql -U <username> -d lasflores -f createDatabase_lasFlores.sql
SET
SET
SET
SET
SET
SET
SET
SET
CREATE EXTENSION
COMMENT
CREATE EXTENSION
COMMENT
SET
SET
SET
CREATE TABLE
ALTER TABLE
CREATE SEQUENCE
ALTER TABLE
ALTER SEQUENCE
CREATE TABLE
ALTER TABLE
CREATE SEQUENCE
ALTER TABLE
ALTER SEQUENCE
CREATE TABLE
ALTER TABLE
CREATE SEQUENCE
ALTER TABLE
ALTER SEQUENCE
ALTER TABLE
ALTER TABLE
ALTER TABLE
 setval
--------
    223
(1 row)

ALTER TABLE
CREATE INDEX
 setval
--------
   2388
(1 row)

 setval
--------
   1465
(1 row)

ALTER TABLE
ALTER TABLE
CREATE INDEX
CREATE INDEX
```

Where `<username>` is the postgres user you set up with `postgis`. For
example, I set mine up under the `michael` user, so my command was:

```shell
$ psql -U michael -d lasflores -f createDatabase_lasFlores.sql
```

#### Copying in the Example Data

If you got an output like that, you're doing great so far. Now we can add
some example data from the `*.data` files.

The `copySQL.txt` file is great if you know SQL but there're a few small
bits you'll probably get caught on. First, SQL has a weird uppercase and
lowercase pattern. If you need a mix of uppercase and lowercase, it's
better to use quotes. Also, paths should be absolute (from root). We can
create a new file that imports the required files like this:

```shell
$ cp copySQL.txt copySQL.sql
```

Edit the file with your editor of choice. Replace each instance of `<file`
with _the absolute path_ to the appropriate files. In the end, mine looks
this:

```
COPY construccion (id, geom, "OBJECTID", "CODIGO", "TERRENO_CODIGO", "TIPO_CONSTRUCCION", "TIPO_DOMINIO", "NUMERO_PISOS", "NUMERO_SOTANOS", "NUMERO_MEZANINES", "NUMERO_SEMISOTANOS", "ETIQUETA", "IDENTIFICADOR", "CODIGO_EDIFICACION", "CODIGO_ANTERIOR", "SHAPE.AREA", "SHAPE.LEN", wkt) FROM '/Users/michael/Downloads/database/construccion.data';

COPY terreno (id, geom, "OBJECTID", "CODIGO", "CODIGO_ANTERIOR", "SHAPE.AREA", "SHAPE.LEN", wkt) FROM '/Users/michael/Downloads/database/terreno.data';

COPY workshop_20170210 (id, geom, codigo, fuente, wkt) FROM '/Users/michael/Downloads/database/workshop_20170210.data';
```

If you're on a Windows machine, you can use the absolute path from the drive
like this: `C:\Users\...` in place of all the `/Users/...`.

Put it into the DB with this:

```shell
$ psql -U <username> -d lasflores -f copySQL.sql
```

And there you go, now you have all the data.
>>>>>>> Stashed changes
