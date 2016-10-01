
from flask import Flask, redirect, request, session, render_template, url_for
import random

app = Flask(__name__)
app.secret_key = 'very secret'


@app.route('/', methods=['GET', 'POST'])
def index():
    session['currentgold']
    session['activitygold']

    return render_template('index.html')


@app.route('/process_money', methods=['POST'])
def process_money():
    if request.form['action'] == 'farm':
        farm_gold = random.randrange(10, 21)
        session['currentgold'] = session['currentgold'] + farm_gold
        session['activitygold'].append("You earned {} at the farm".format(farm_gold))
    elif request.form['action'] == 'cave':
        cave_gold = random.randrange(5, 11)
        session['currentgold'] = session['currentgold'] + cave_gold
        session['activitygold'].append("You found {} in the cave".format(cave_gold))
    elif request.form['action'] == 'house':
        house_gold = random.randrange(2, 6)
        session['currentgold'] = session['currentgold'] + house_gold
        session['activitygold'].append("You got {} in the house".format(house_gold))
    elif request.form['action'] == 'casino':
        casino_gold = random.randrange(-50, 51)
        session['currentgold'] = session['currentgold'] + casino_gold
        if casino_gold > 0:
            session['activitygold'].append("You won {} in the casino".format(casino_gold))
        elif casino_gold < 0:
            session['activitygold'].append("You lost {} in the casino".format(casino_gold))
        elif casino_gold == 0:
            session['activitygold'].append("You won/Lost Nothing in the casino")
    elif request.form['action'] == 'reset':
        session['currentgold'] = 0
        session['activitygold'] = []
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)
