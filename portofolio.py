from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("data.html")

# @app.route('/contact')
# def contact():
#     return render_template("contact.html")

# @app.route('/portofolio')
# def portofolio():
#     return render_template("portofolio.html")