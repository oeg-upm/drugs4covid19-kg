
import argparse
import sys
import csv
import pandas
csv.field_size_limit(sys.maxsize)

def normalization():

    parser = argparse.ArgumentParser()
    parser.add_argument("-f", "--file", required=True, help="file to normalize")
    args = parser.parse_args()

    if len(sys.argv) >= 3:
        data = pandas.read_csv(args.file)


    else:
        print("No input the correct arguments, run pip3 normalize.py -h to see the help)")
        sys.exit()

    data.to_csv(args.file, index=False, quoting=csv.QUOTE_ALL)


if __name__ == "__main__":
    normalization()
