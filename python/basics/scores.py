def grader(score):
    if (score < 60):
        letter_grade = "Bad Bongos!"
    elif (score < 70):
        letter_grade = "D"
    elif (score < 80):
        letter_grade = "C"
    elif (score < 90):
        letter_grade = "B"
    elif (score <= 100):
        letter_grade = "A"
    print "Your Score is {}. Your grade is: {}".format(score, letter_grade)


print "Please enter the scores:"

print "What is your 1st score?",
score = input()
# score = int(raw_input())
# either one above will work... i just chose this way.
grader(score)

print "What is your 2nd score?",
score = input()
grader(score)
print "What is your 3rd score?",
score = input()
grader(score)
print "What is your 4th score?",
score = input()
grader(score)
print "What is your 5th score?",
score = input()
grader(score)
print "What is your 6th score?",
score = input()
grader(score)
print "What is your 7th score?",
score = input()
grader(score)
print "What is your 8th score?",
score = input()
grader(score)
print "What is your 9th score?",
score = input()
grader(score)
print "What is your 10th score?",
score = input()
grader(score)


print "End of Program. Bye!"
