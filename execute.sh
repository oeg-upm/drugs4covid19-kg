start=$(date +%s.%N)
docker exect -it sdmrdfizer bash /data/extract-transform-docker.sh
finish=$(date +%s.%N)
et=$(echo "$finish - $start" | bc)

start=$(date +%s.%N)
docker exec -it drugs4covid isql-v -U dba -P dba exec="SPARQL CLEAR GRAPH \"http://kg.drugs4covid.oeg-upm.net/\";"
docker exec -it drugs4covid isql-v -U dba -P dba exec="delete from DB.DBA.load_list where  ll_state=2;"
docker exec -it drugs4covid isql-v -U dba -P dba exec="ld_dir('/usr/local/virtuoso-opensource/var/lib/virtuoso/db','drugs4covid.nt','http://kg.drugs4covid.oeg-upm.net/');"
docker exec -it drugs4covid isql-v -U dba -P dba exec="ld_dir('/usr/local/virtuoso-opensource/var/lib/virtuoso/db','atc.ttl','http://kg.drugs4covid.oeg-upm.net/');"
docker exec -it drugs4covid isql-v -U dba -P dba exec="rdf_loader_run();"
finish=$(date +%s.%N)
load=$(echo "$finish - $start" | bc)

dt=$(date '+%d/%m/%Y %H:%M:%S');
cd /
echo "$dt,$et,$load" >> times.csv