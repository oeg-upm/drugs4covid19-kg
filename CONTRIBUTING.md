# Steps for contributing to Drugs4Covid-KG

Do you want to include your COVID19 resources in Drugs4Covid KG? You have multiple ways!


## By pull request (if your data are not published):

0) Make a fork of the repository
1) If your data is not RDF (JSON, CSV, RDB):
    1) Go to the scripts folder and create an independient script to download the dataset (it must be cleaned and normalized)
    2) Go to mappings file and add the corresponding rules according to Drugs4Covid ontology
    3) Make a pull request
2) If your data is in RDF:
    1) Go to the scripts folder and create an independient script to download the dataset directly to the virtuoso folder*

## By template (for SPARQL endpoints):

0) Open an issue at the repo and select the contribution-template
1) Fill it providing us the class(es) of your resources according to Drugs4Covid ontology and some URI examples.


*The virtuoso folder is automatically created in the root folder of the repo when docker-compose starts
