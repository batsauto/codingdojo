
from flask import Flask, render_template, url_for, request, redirect, session
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'


@app.route('/')
def index():
	sumSessionCounter()
	return render_template('index.html')


def sumSessionCounter():
	try:
		session['counter'] += 1
  	except KeyError:
		session['counter'] = 1


@app.route('/plus2')
def button2():
	session['counter'] += 1
	return redirect(url_for('index'))


@app.route('/clear')
def clearsession():
    session['counter'] = 0
    return redirect(url_for('index'))

app.run(debug=True)
