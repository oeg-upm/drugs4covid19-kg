#!/bin/bash


curl -g "https://librairy.linkeddata.es/solr/covid/select?q=labels4_t:[*%20TO%20*]&wt=csv&indent=true&start=0&rows=50000000&fl=id,labels4_t" > articles-labels4_t.csv
curl -g "https://librairy.linkeddata.es/solr/covid/select?q=labels5_t:[*%20TO%20*]&wt=csv&indent=true&start=0&rows=50000000&fl=id,labels5_t" >  articles-labels5_t.csv
curl -g "https://librairy.linkeddata.es/solr/covid/select?q=annot_cliner_problems_t:[*%20TO%20*]&wt=csv&indent=true&start=0&rows=50000000&fl=id,annot_cliner_problems_t" > articles-annot_cliner_problems_t.csv
curl -g "https://librairy.linkeddata.es/solr/covid/select?q=annot_cliner_treatments_t:[*%20TO%20*]&wt=csv&indent=true&start=0&rows=50000000&fl=id,annot_cliner_treatments_t" > articles-annot_cliner_treatments_t.csv
curl -g "https://librairy.linkeddata.es/solr/covid/select?q=scispacy_diseases_t:[*%20TO%20*]&wt=csv&indent=true&start=0&rows=50000000&fl=id,scispacy_diseases_t" > articles-scispacy_diseases_t.csv
curl -g "https://librairy.linkeddata.es/solr/covid/select?q=*:*&wt=csv&indent=true&start=0&rows=50000000&fl=id,name_s,source_s,url_s" > articles.csv

declare -a normalization=("labels4_t" "labels5_t" "annot_cliner_problems_t" "annot_cliner_treatments_t" "scispacy_diseases_t")

for j in "${normalization[@]}"
do
  echo "Normalizing column $j in papers file"
  python3 normalize.py -f articles-$j.csv -c $j
done