#! /bin/sh

curl 'http://localhost:8983/solr/lasflores/dataimport?command=delta-import' > /dev/null
