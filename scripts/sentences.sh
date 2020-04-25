#!/bin/bash


curl -g "https://librairy.linkeddata.es/solr/covid-sentences/select?q=*:*&wt=csv&indent=true&start=0&rows=50000000&fl=id" > sentences-id.csv

for j in {1..5}
do
  curl -g "https://librairy.linkeddata.es/solr/covid-sentences/select?q=bionlp_atc${j}_t:[*%20TO%20*]&wt=csv&indent=true&start=0&rows=50000000&fl=id,bionlp_atc${j}_t" > sentences-bionlp_atc${j}_t.csv
done
curl -g "https://librairy.linkeddata.es/solr/covid-sentences/select?q=scispacy_diseases_t:[*%20TO%20*]&wt=csv&indent=true&start=0&rows=50000000&fl=id,scispacy_diseases_t" > sentences-scispacy_diseases_t.csv
curl -g "https://librairy.linkeddata.es/solr/covid-sentences/select?q=scispacy_chemicals_t:[*%20TO%20*]&wt=csv&indent=true&start=0&rows=50000000&fl=id,scispacy_chemicals_t" > sentences-scispacy_chemicals_t.csv
curl -g "https://librairy.linkeddata.es/solr/covid-sentences/select?q=*:*&wt=csv&indent=true&start=0&rows=50000000&fl=id,snomed_diseases_concept_id" > sentences.csv

# Generating id,sentence,paper

awk -F "\"*-\"*" '{print $1"-"$2","$1","$2}' sentences-id.csv >> tmp.csv
mv tmp.csv sentences-id.csv
sed -i '1s/.*/id,paper,sentence/' sentences-id.csv

declare -a normalization=("bionlp_atc1_t" "bionlp_atc2_t" "bionlp_atc3_t" "bionlp_atc4_t" "bionlp_atc5_t" "scispacy_diseases_t" "scispacy_chemicals_t")

for j in "${normalization[@]}"
do
  echo "Normalizing column $j in sentences file"
  python3 normalize.py -f sentences-$j.csv -c $j
done