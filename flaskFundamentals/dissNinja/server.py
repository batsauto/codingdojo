from flask import Flask, render_template, request, redirect, url_for
import os
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/ninja')
def ninja():
    allninjas = []
    for filename in os.listdir('static/images'):
        if filename.endswith(".jpg") and filename != "notapril.jpg":
            allninjas.append(os.path.join('static/images', filename))
        else:
            continue
    return render_template('ninja.html', allninjas=allninjas)


@app.route('/ninja/<color>')
def show_user_profile(color):
    if color == "blue":
        color = url_for('static', filename='images/leonardo.jpg')
        return render_template("ninja.html", color=color)
    if color == "red":
        color = url_for('static', filename='images/raphael.jpg')
        return render_template("ninja.html", color=color)
    if color == "orange":
        color = url_for('static', filename='images/michelangelo.jpg')
        return render_template("ninja.html", color=color)
    if color == "purple":
        color = url_for('static', filename='images/donatello.jpg')
        return render_template("ninja.html", color=color)
    else:
        color = url_for('static', filename='images/notapril.jpg')
        return render_template("ninja.html", color=color)


app.run(debug=True)
