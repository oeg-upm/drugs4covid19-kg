
import argparse
import sys
import csv
import pandas
csv.field_size_limit(sys.maxsize)

def preparation_articles():

    parser = argparse.ArgumentParser()
    parser.add_argument("-f", "--file", required=True, help="articles file")
    args = parser.parse_args()

    if len(sys.argv) >= 3:
        data = pandas.read_csv(args.file)

    else:
        print("No input the correct arguments, run pip3 normalize.py -h to see the help)")
        sys.exit()

    data['pmc_url'] = ""
    for row in range(len(data)):
        if data['id'][row][0:3] == 'PMC':
            data['pmc_url'][row] = 'https://www.ncbi.nlm.nih.gov/pmc/articles/' + data['id'][row] + '/'

    data.to_csv(args.file, index=False, quoting=csv.QUOTE_ALL)

if __name__ == "__main__":
    preparation_articles()
