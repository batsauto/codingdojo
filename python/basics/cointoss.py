from random import randint

heads = 0
tails = 0

for count in range(1, 5001):
	flip = randint(0, 1)

	if(flip == 0):
		side = "Heads"
		heads = heads + 1
	else:
		side = "Tails"
		tails = heads + 1

	print "Attempt #" + str(count) + "... Its " + str(side) + "... You have got " + str(heads) + " head(s) so far and " + str(tails) + " tail(s)so far"
