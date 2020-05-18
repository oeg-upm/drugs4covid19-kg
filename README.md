# Drugs4Covid KG

Resources for the constructing and exploitation of the KG - Drugs4Covid. The construction of the KG followed a systematic and maintainable approach creating a set of RML and CSVW annotations and using SDM-RDFizer RML engine for transforming the original input data (from SOLR databases) in RDF.

## Docker
We provide a docker-compose with two docker-images (Virtuoso and SDM-RDFizer) and a script to generate a local copy of the KG.


## Resources:
- Website with some example queries and RDF dumps versions: https://kg.drugs4covid.oeg-upm.net/
- SPARQL Endpoint: https://kg.drugs4covid.oeg-upm.net/sparql
- General website of the project: https://drugs4covid.oeg-upm.net/


## Links to other KGs:
We include links to other existing Covid19 Knowledge Graphs in other to federated over them and enhance the completeness of our queries. The endpoints of the KGs currently included are:

- From WIMMICS Group (cord19-nekg): http://ns.inria.fr/covid19/
- From DICE Group (COVID19-DS): https://covid-19ds.data.dice-research.org/resource/
- From SDM-TIB (Knowledge4COVID-19): https://f0ffbb86.ngrok.io/sparql


## Contributing:
Please read the CONTRIBUTING.md and provide your resources via issue templates.
