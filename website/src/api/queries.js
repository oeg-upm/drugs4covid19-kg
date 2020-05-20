const virtuosoQueries = [
    {title:'Articles discussing amphotericin B and COVID-19',
    description:'Paragraphs that mention a certain active substance and a certain disorder, and the name and source of the corresponding paper.',
    sparql:"#Instances: amphotericin B , Disorder: COVID-19 MESHCode C000657245\n\nPREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper\nWHERE {\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paragraph d4covid:mentions ?activeSubstance .\n?activeSubstance skos:prefLabel  'amphotericin B'@en  .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .\n}",
    graphql_ld_:''},

    {title:"Articles discussing drugs of the amphotericin B family (same ATC4) and COVID-19",
    description:"Paragraphs that mention drugs of the amphotericin B family (same ATC4) and COVID-19, and the title and source of the corresponding paper.",
    sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelFamilySubstance\nWHERE\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?familySubstance .\n?familySubstance skos:prefLabel ?labelFamilySubstance .\n?activeSubstance rdfs:subClassOf ?familySubstance .\n?activeSubstance skos:prefLabel  'amphotericin B'@en  .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .\n}",
    graphql_ld_:''},

    {title:'Immunostimulants related to COVID-19',
    description:'Documents that mention other immunostimulants in ATC (ATC code L03AX) and all of the ATCs in lower levels and the disease COVID-19 , the title and source of the corresponding paper.\nMotivation: Documents that mention the BCG vaccine (ATC code L03AX03) (vaccine against the tuberculosis Bacteria), because there are studies that link the vaccine with partial immunization to COVID-19. ',
    sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
    graphql_ld_:''},

    {title:'Immunostimulants related to COVID-19? (ordered by specificity)',
    description:'Documents that mention other immunostimulants in ATC (ATC code L03AX) and all of the ATCs in lower levels and the disease COVID-19 , the title and source of the corresponding paper.\nWith ranking: the documents that contain the more specific ATC will appear first.',
    sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\nBIND (IF(BOUND(?L5LevelSubstance),5,0)+IF(BOUND(?activeSubstance),1,0)AS ?score)\n}\nORDER BY DESC(?score)",
    graphql_ld_:''},

    {title:"Diseases related to drugs that combine  immunosuppressant  and antimalarial activities with macrolide antibiotics",
    description:"Paragraphs with drugs that combine immunosuppressant  and antimalarial activities with macrolide antibiotics and the diseases that appear in these document.\nThe drugs that combine  immunosuppressant  and antimalarial activities have the active ingredient P01BA02.\nThe macrolide antibiotics belong to the therapeutic group  J01FA;",
    sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT DISTINCT ?section ?paperTitle ?notation2 ?titleDisease\nWHERE {\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paragraph d4covid:mentions ?activeSubstance1 .\n?paragraph d4covid:mentions ?activeSubstance2 .\n?activeSubstance1 skos:notation \"P01BA02\"^^xsd:string .\n?activeSubstance2 skos:notation  ?notation2 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .\nFILTER (STRSTARTS(?notation2,\"J01FA\"))\n}",     
    graphql_ld_:''},
    {
        title:"Active substances discussed with Pneumonia and COVID-19",
        description:"Paragraphs that mention pneumonia and COVID-19, the active ingredients that are mentioned in these paragraphs and the title in their corresponding papers.",
        sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT DISTINCT ?section ?paperTitle ?titleDisease ?labelSubstance\nWHERE {\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paragraph d4covid:mentions ?disease1 .\n?disease1 a d4covid:Disease .\n?disease1 d4covid:MESHCode 'C000657245' .\n?paragraph d4covid:mentions ?disease2 .\n?disease2 a d4covid:Disease .\n?disease2 dc:title ?titleDisease .\n?paragraph  d4covid:mentions ?activeSubstance .\n?activeSubstance skos:prefLabel ?labelSubstance .\nFILTER(CONTAINS(?titleDisease,\"Pneumonia\") || CONTAINS(?titleDisease,\"pneumonia\"))\n}",
        graphql_ld_:""
    },

    {
        title:"Active substances discussed with coagulation activation and COVID-19",
        description:"Paragraphs that mention the disorders coagulation activation and COVID-19, the active ingredients that appear in these paragraphs and the corresponding paper title.\nQuery proposed by a medical doctor. There is a need to block coagulation activation of patients with COVID-19. Necrosis problems have been observed in patients with COVID-19.\n",
        sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT DISTINCT ?section ?paperTitle ?titleDisease ?labelSubstance\nWHERE {\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paragraph d4covid:mentions ?disease1 .\n?disease1 a d4covid:Disease .\n#  ?disease1 d4covid:MESHCode 'C000657245' .\n?paragraph d4covid:mentions ?disease2 .\n?disease2 a d4covid:Disease .\n# ?disease1 d4covid:MESHCode 'D001778' .\n?disease2 dc:title ?titleDisease .\n?paragraph  d4covid:mentions ?activeSubstance .\n?activeSubstance skos:prefLabel ?labelSubstance .\nFILTER(CONTAINS(?titleDisease,\"Coagulation\") || CONTAINS(?titleDisease,\"coagulation\"))\n}",
        graphql_ld_:""
    },

]
const rdfDumps = [
    {
        text:'Download RDF',
        date:'20-05-2020',
        link:'https://delicias.dia.fi.upm.es/nextcloud/index.php/s/NssWAYcsXQSXH9b/download'
    },
    {
        text:'Download RDF',
        date:'30-04-2020',
        link:'https://delicias.dia.fi.upm.es/nextcloud/index.php/s/gore3QGBptCnZGK/download'
    },
    {
        text:'Download RDF',
        date:'28-04-2020',
        link:'https://delicias.dia.fi.upm.es/nextcloud/index.php/s/WGCtrwqpCT4cgHj/download'
    },

    {
        text:'Download RDF',
        date:'26-04-2020',
        link:'https://delicias.dia.fi.upm.es/nextcloud/index.php/s/tGWSyaoc3aSt4c9/download'
    }

    

]
export {virtuosoQueries, rdfDumps}
