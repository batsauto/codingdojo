def grade(g):
    if raw_input < 59:
        g = "Bad Bongos!"
    elif raw_input >= 60 and raw_input < 70:
        g = "D"
    elif raw_input >= 70 and raw_input < 80:
        g = "C"
    elif raw_input >= 80 and raw_input < 90:
        g = "B"
    elif raw_input >= 90 and raw_input <= 100:
        g = "A"
    print g


print "Please enter the scores:"

print "What is your 1st score?",
score1 = raw_input()
grade1 = grade(score1)
print "Your grade is:" grade1

print "What is your 2nd score?",
score2 = raw_input()
print "What is your 3rd score?",
score3 = raw_input()
print "What is your 4th score?",
score4 = raw_input()
print "What is your 5th score?",
score5 = raw_input()
print "What is your 6th score?",
score6 = raw_input()
print "What is your 7th score?",
score7 = raw_input()
print "What is your 8th score?",
score8 = raw_input()
print "What is your 9th score?",
score9 = raw_input()
print "What is your 10th score?",
score10 = raw_input()

from random import randint

print "Scores and Grades"
for count in range(0, 10):
	score = randint(70, 100)

	if(score <= 70):
		grade = "D"
	elif(score <= 80):
		grade = "C"
	elif(score <= 90):
		grade = "B"
	else:
		grade = "A"

	print "Score: %d; Your grade is %s" %(score, grade)

print "End of program. Bye!"
