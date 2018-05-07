# Clue

**Check out the Wiki** to see some stuff on installation and tools to use.
The documentation on the API is [here](https://lucene.apache.org/solr/guide/7_2/query-syntax-and-parsing.html).

## Use in Production

1. Clone this repo onto the machine.
  - Doesn't really matter where.
2. `cd` into the repo dir.
3. Run `npm install` to get dependencies.
4. Compile the CSS with `gem sass`
  - Install with `sude gem install sass`
5. Install Solr.
  - Instructions from our wiki [here](https://github.com/the-mikedavis/clue/wiki/Installing-Solr)
6. Install the cron job
  - `cd cron && ./install-cron.sh && cd ..`
  - You can repeat this command without duplicating the cron job
7. Go to the Solr installation directory.
8. Run `bin/solr start`.
9. Run `bin/solr create_core -c clue`.
10. Go to `server/solr/clue/conf`
11. Copy all of the configs from the repo
  - `cp ~/clue/solr-configs/clue/* .`
12. Edit the `db-data-config.xml` for the MySQL username and password and table name.
13. Go to the Solr Admin page
  - `http://localhost:8983/solr`
14. Refresh the clue core
  - Core Admin > clue > reload
15. Go to the dataimport
  - Core Selector > clue > Dataimport
16. Select the table as entity and execute
17. Go back to the clue repo dir
18. Run the server `node index.js`
  - Prefix with `nohup` if you're running it forever

## Changes/Features Needed

Major changes focus around integration. The schema in `db-data-config.xml`
needs to be the same as the table in the final DB. The double click
method of results needs to actually lead to the Cadastre page, which depends
on their public facing API. The suggestion feature mysteriously works sometimes
and not others. Download needs to be implemented, which is a simple matter of
using javascript to select all the selected documents and hit the download
endpoint with those id's.
