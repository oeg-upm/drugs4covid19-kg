#!/bin/bash

echo "------------Downloading and normalizing the data------------"
cd /data/
bash run.sh


cd /
echo "------------Generating the Knowledge Graph with RML mappings and SDM-RDFizer------------"
python3 /sdmrdfizer/rdfizer/run_rdfizer.py /mappings/config-rdfizer.ini
rm /results/drugs4covid_datasets_stats.csv
awk -F "," -v today=`date +"%Y-%m-%d"` '{print "\""today"\","$1","$2}' stats.csv | tail -1 >> stats-historic.csv


echo "------------Preparing data for the uploading to Virtuoso------------"
cp /data/atc.ttl /results/
now=`date +"%Y-%m-%d"`
cd /results/
num_of_lines=$(cat "drugs4covid.nt" | wc -l)
tar -zcvf drugs4covid_kg_$now.tar.gz drugs4covid.nt
