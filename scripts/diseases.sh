#!/bin/bash

curl -g "https://librairy.linkeddata.es/solr/diseases/select?q=parent:[*%20TO%20*]&wt=csv&indent=true&start=0&rows=50000000&fl=id,parent" > diseases-parent.csv
curl -g "https://librairy.linkeddata.es/solr/diseases/select?q=synonyms:[*%20TO%20*]&wt=csv&indent=true&start=0&rows=50000000&fl=id,synonyms"  > diseases-synonyms.csv
curl -g "https://librairy.linkeddata.es/solr/diseases/select?q=mappings:[*%20TO%20*]&wt=csv&indent=true&start=0&rows=50000000&fl=id,mappings"  > diseases-mappings.csv
curl -g "https://librairy.linkeddata.es/solr/diseases/select?q=*:*&wt=csv&indent=true&start=0&rows=50000000&fl=id,name_t,level_i" > diseases.csv

declare -a normalization=("parent" "synonyms" "mappings")

for j in "${normalization[@]}"
do
  echo "Normalizing column $j in diseases file"
  python3 normalize.py -f diseases-$j.csv -c $j -s ,
done

python3 preparation.py -f diseases.csv