import datetime
import random

random_list = random.sample(xrange(10000), 100)
print random_list


def bubbleSort(alist):
    for check_num in range(len(random_list) - 1, 0, - 1):
        for i in range(check_num):
            if random_list[i] > random_list[i + 1]:
                temp = random_list[i]
                random_list[i] = random_list[i + 1]
                random_list[i + 1] = temp

t = datetime.time(1, 2, 3)
bubbleSort(random_list)
t = datetime.time(1, 2, 3)

print random_list


print "milliseconds:", datetime.timedelta(milliseconds=1)
