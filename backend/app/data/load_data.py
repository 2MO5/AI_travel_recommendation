import csv

def load_destinations(file_path='app/data/destinations.csv'):
    destinations = []
    with open(file_path, 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            destinations.append(row)
    return destinations
