
import argparse
import sys
import csv
import pandas
csv.field_size_limit(sys.maxsize)

def normalization():

    parser = argparse.ArgumentParser()
    parser.add_argument("-f", "--file", required=True, help="file to normalize")
    parser.add_argument("-c", "--column", required=True, help="column with multiple values")
    parser.add_argument("-c2", "--column2", required=True, help="column with multiple values")
    parser.add_argument("-s", "--separator", required=False, help="column with multiple values")
    args = parser.parse_args()

    if len(sys.argv) >= 5:
        data = pandas.read_csv(args.file)
        col = str(args.column)
        col2 = str(args.column2)
        if args.separator:
            sep = str(args.separator)
        else:
            sep = ' '


    else:
        print("No input the correct arguments, run pip3 normalize.py -h to see the help)")
        sys.exit()

    output_file = "id," + col + "," + col2 + "\n"
    for row in range(len(data[col])):
        if isinstance(data[col][row], str):
            values_col = data[col][row].replace("\\,", "\\;").split(sep)
            values_col2 = data[col2][row].replace("\\,", "\\;").split(sep)
            for value in range(len(values_col)):
                output_file += data['id'][row] + ",\"" + str(values_col[value]).replace("\\;", ",").replace("\\", "-")\
                               + "\",\"" + str(values_col2[value]).replace("\\;", ",").replace("\\", "-") + "\"\n"

        if row % 100000 == 0:
            print("Normalizing row: "+str(row))



    f = open(args.file, "w")
    f.write(str(output_file))
    f.close()

if __name__ == "__main__":
    normalization()
