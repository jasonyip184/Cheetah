import json
import codecs
import random
import pickle

cleandata = []
data = json.load(codecs.open('../src/data/old_course_data.json', 'r', 'utf-8-sig'))
newdata = []
i=0
keys = ['Major','TotalEnrolment', 'keyword5', 'ModuleTitle', 'keyword2', 'ModuleCode', 'keyword3', 'Year', 'YearSem', 'ModuleDescription', 'keyword1', 'Department', 'keyword4']
for datum in data:
    i += 1
    newdatum = {}
    for key in keys:
        try:
            newdatum[key] = datum[key]
        except:
            pass
    newdata.append(newdatum)

with open('../src/data/course_data.json', 'w') as outfile:
    json.dump(newdata, outfile)

# l = []
# for datum in data:
#     l.extend(datum.keys())
# print(set(l))
