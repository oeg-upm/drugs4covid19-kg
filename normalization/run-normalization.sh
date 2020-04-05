#!/bin/bash

#declare -a paper=("annot_cliner_tests_t" "annot_cliner_problems_t" "annot_cliner_treatments_t" "scispacy_diseases_t" "labels5_t" "labels4_t")
#declare -a sentences=("scispacy_chemicals_t" "snomed_diseases_concept_id" "scispacy_diseases_complete_t" "bionlp_atc4_t" "bionlp_atc5_t" "bionlp_atc2_t" "bionlp_atc3_t" "bionlp_atc1_t" "scispacy_diseases_t" "scispacy_chemicals_complete_t")
declare -a paper=("labels5_t" "labels4_t")

for j in "${paper[@]}"
do
  echo "Normalizing column $j in papers file"
  python3 normalize.py -f paper-test.csv -c $j
done

#for j in "${sentences[@]}"
#do
#  echo "Normalizing column $j in sentences file"
#  python3 normalize.py -f sentences-test.csv -c $j
#done