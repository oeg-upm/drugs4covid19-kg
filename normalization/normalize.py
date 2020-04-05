
import argparse
import sys
import csv
import pandas
csv.field_size_limit(sys.maxsize)

def normalization():

    parser = argparse.ArgumentParser()
    parser.add_argument("-f", "--file", required=True, help="file to normalize")
    parser.add_argument("-c", "--column", required=True, help="column with multiple values")
    args = parser.parse_args()

    if len(sys.argv) == 5:
        data = pandas.read_csv(args.file)
        col = str(args.column)

    else:
        print("No input the correct arguments, run pip3 normalize.py -h to see the help)")
        sys.exit()

    i = 0
    output_file = "id," + col + "\n"
    for row in data[col]:
        if isinstance(row,str):
            for value in row.split():
                output_file += str(i) + "," + str(value) + "\n"

        if i % 100000:
            print("Normalizing row: "+str(i))
        data[col] = i
        i = i+1

    data.to_csv(args.file)

    f = open(args.file.replace(".csv", "") + "_" + col + ".csv", "w")
    f.write(str(output_file))
    f.close()

if __name__ == "__main__":
    normalization()
