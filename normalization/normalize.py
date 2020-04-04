
import argparse
import sys
import csv
csv.field_size_limit(sys.maxsize)

def normalization():

    parser = argparse.ArgumentParser()
    parser.add_argument("-f", "--file", required=True, help="file to normalize")
    parser.add_argument("-c", "--column", required=True, help="column with multiple values")
    args = parser.parse_args()
    data = []
    if len(sys.argv) == 5:
        try:
            with open(args.file, newline='') as csv_file:
                file = csv.reader(csv_file)
                for row in file:
                    data.append(row)
            col = str(args.column)

        except ValueError:
            print("No input the correct arguments, run pip3 normalize.py -h to see the help")
            sys.exit()
    else:
        print("No input the correct arguments, run pip3 normalize.py -h to see the help)")
        sys.exit()

    i = 0
    index = 0
    print(data[0])
    while i < len(data[0]):
        if col == data[0][i]:
            index = i
        i = i+1

    i = 0
    output_file = "id,"+col+"\n"
    for row in range(len(data)):
        if row != 0:
            print("Data:"+data[row][index])
            data_row = data[row][index].split()
            data[row][index] = str(i)
            for value in data_row:
                output_file += str(i)+","+str(value)+"\n"
        i = i+1

    f = open(args.file.replace, "w")
    for row in data:
        line = ""
        for i in range(len(row)):
            line += '"'+row[i]+'",'
        line = line[:-1] + '\n'
        f.write(line)
    f.close()

    f = open(args.file.replace(".csv", "") + "_"+col+".csv", "w")
    f.write(str(output_file))
    f.close()

if __name__ == "__main__":
    normalization()
