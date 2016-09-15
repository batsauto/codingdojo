from flask import Flask, render_template, request, redirect
app = Flask(__name__)


@app.route('/')
def homeView():
	return render_template('index.html')


@app.route('/results', methods=['POST'])
def create_user():
    return render_template('results.html',
        name=request.form['name'],
        location=request.form['location'],
        favLang=request.form['favLang'],
        comments=request.form['comments'])
    return redirect('/')

app.run(debug=True)
