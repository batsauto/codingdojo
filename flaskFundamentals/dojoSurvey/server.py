from flask import Flask, flash, session, render_template, request, redirect, url_for
app = Flask(__name__)
app.secret_key = 'very secret'


@app.route('/')
def index():
	return render_template('index.html')


@app.route('/process', methods=['POST'])
def process():
	if len(request.form['name']) < 1 or len(request.form['comments']) < 1:
		flash("you need to fill out the name and comments")
	else:
		return render_template('results.html', name=request.form['name'],
			location=request.form['location'], favLang=request.form['favLang'],
		    comments=request.form['comments'])
	return redirect('/')


# @app.route('/results', methods=['POST'])


app.run(debug=True)
