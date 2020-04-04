#!/bin/bash

declare -a paper=("")
declare -a sentences=("")

for j in "${paper[@]}"
do
  echo "Normalizing column $j in papers file"
  python3 normalize.py -f papers.csv -c $j
done

for j in "${paper[@]}"
do
  echo "Normalizing column $j in sentences file"
  python3 normalize.py -f sentences.csv -c $j
done