# Clue

**Check out the Wiki** to see some stuff on installation and tools to use.
The documentation on the API is [here](https://lucene.apache.org/solr/guide/7_2/query-syntax-and-parsing.html).

### This Repo

For presenting and such, follow these instructions.

To download and contribute to this repo, first **clone** it from the
menu above. You'll also need to have downloaded Node from the link above.

In a shell, `cd` to where you cloned the repo. You'll need to install the
depedencies from the `package.json`. You can do that with this:

```shell
$ npm install
```

Compile the Sass assets with:

```shell
$ sass --watch scss:static/dist/css
```

Then you can run the server with this:

```shell
$ node index.js
```

To edit the server and see how it works, edit `index.js`.
