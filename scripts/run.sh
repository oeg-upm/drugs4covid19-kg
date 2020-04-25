


start=$(date +%s.%N)
echo "Downloading and normalizing articles SOLR"
bash articles.sh

echo "Downloading and normalizing diseases SOLR"
bash diseases.sh

echo "Downloading and normalizing paragraphs SOLR"
bash paragraphs.sh

echo "Downloading and normalizing sentences SOLR"
bash sentences.sh

finish=$(date +%s.%N)
dur=$(echo "$finish - $start" | bc)

dt=$(date '+%d/%m/%Y %H:%M:%S');
echo "$dt, $dur" >> preparation-times.csv