i = 0
s = ""

for i in range(10000):
    s += ".raphael-group-"+str(i)+"-creditgroup,"

file1 = open("myfile.txt","w")
file1.write(s)
file1.close()