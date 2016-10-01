
from flask import Flask, flash, redirect, request, session, render_template, url_for
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
NAME_REGEX = re.compile(r'^\D*$')
app = Flask(__name__)
app.secret_key = 'very secret'


@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')


@app.route('/process', methods=['POST'])
def submit():
    if len(request.form['first_name']) < 1:
        flash("First name cannot be blank!")
    elif not NAME_REGEX.match(request.form['first_name']):
        flash("You cannot have numbers in your first name")
    if len(request.form['last_name']) < 1:
        flash("Last name cannot be blank!")
    elif not NAME_REGEX.match(request.form['last_name']):
        flash("You cannot have numbers in your last name")
    if len(request.form['email']) < 1:
        flash("Email cannot be blank!")
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
    if len(request.form['password']) < 1:
        flash("Password cannot be blank!")
    if len(request.form['password']) < 8:
        flash("Password Needs to be at least 8 Characters long")
    if len(request.form['password_confirmation']) < 1:
        flash("Password confirm cannot be blank!")
    if request.form['password'] != request.form['password_confirmation']:
        flash("Your passwords do not match!")
    else:
        flash("Success!")
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)
