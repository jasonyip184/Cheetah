import json
import codecs
import random

data = json.load(codecs.open('modules_data.json', 'r', 'utf-8-sig'))
keys = data[0].keys()
yearandsems = ['Y17/18-S2','Y17/18-S1','Y16/17-S2','Y16/17-S1','Y15/16-S2','Y15/16-S1','Y14/15-S2','Y14/15-S1','Y13/14-S2','Y13/14-S1','Y12/13-S2','Y12/13-S1','Y11/12-S2','Y11/12-S1']
years = ['2017/2018','2017/2018','2016/2017','2016/2017','2015/2016','2015/2016','2014/2015','2014/2015','2013/2014','2013/2014','2012/2013','2012/2013','2011/2012','2011/2012']
onetwo = ['2','1','2','1','2','1','2','1','2','1','2','1','2','1']

rows = []
for datum in data:
    quotasum = 0
    yearandsem = 'Y18/19-S1'
    proportion = 1
    if 'CorsBiddingStats' in datum:
        stats = datum['CorsBiddingStats']
        for i in range(len(stats)-1, -1, -1):
            if stats[i]['AcadYear'] == '2018/2019':
                quotasum += min(int(stats[i]['Quota']),int(stats[i]['Bidders']))
        for j in range(len(yearandsems)):
            if quotasum == 0:
                yearandsem = yearandsems[j]
                for i in range(len(stats)-1, -1, -1):
                    if stats[i]['AcadYear'] == years[j] and stats[i]['Semester'] == onetwo[j]:
                        quotasum += min(int(stats[i]['Quota']),int(stats[i]['Bidders']))
        if quotasum == 0:
            quotasum = 0
            yearandsem = ""

    datum['YearSem'] = yearandsem
    for student_year in student_years:
        datum['Year'] = student_year

        if student_year == 4:
            #Use remaining proportion
            datum['TotalEnrolment'] = int(proportion * quotasum)
        else:
            #auto generate proportion
            random_prop = round(random.uniform(0,proportion),2)
            datum['TotalEnrolment'] = int(random_prop * quotasum)

        proportion -= random_prop

    rows.append(datum)

rows = rows[:500]
