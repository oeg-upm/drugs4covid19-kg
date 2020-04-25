#!/bin/bash


for j in {1..19}
do
  curl -g "https://librairy.linkeddata.es/solr/covid-paragraphs/select?q=bionlp_diseases_C$j:[*%20TO%20*]%20AND%20bionlp_diseases_N$j:[*%20TO%20*]&wt=csv&indent=true&start=0&rows=50000000&fl=id,bionlp_diseases_C$j,bionlp_diseases_N$j" > paragraphs-bionlp_diseases_C$j.csv
done

for j in {1..5}
do
  curl -g "https://librairy.linkeddata.es/solr/covid-paragraphs/select?q=bionlp_drugs_C$j:[*%20TO%20*]%20ANls -D%20bionlp_drugs_N$j:[*%20TO%20*]&wt=csv&indent=true&start=0&rows=50&fl=id,bionlp_drugs_C$j,bionlp_drugs_N$j" > paragraphs-bionlp_drugs_C$j.csv
done

curl -g "https://librairy.linkeddata.es/solr/covid-paragraphs/select?q=*:*&wt=csv&indent=true&start=0&rows=50000000&fl=id,section_s,article_id_s" > paragraphs.csv



for j in {1..19}
do
  echo "Normalizing columns bionlp_diseases_$j in papers file"
  python3 normalize-twocolumns.py -f paragraphs-bionlp_diseases_C$j.csv -c bionlp_diseases_C$j -c2 bionlp_diseases_N$j -s ,
done

for j in {1..5}
do
  echo "Normalizing columns bionlp_drugs_$j in papers file"
  python3 normalize-twocolumns.py -f paragraphs-bionlp_drugs_C$j.csv -c bionlp_drugs_C$j -c2 bionlp_drugs_N$j -s ,
done