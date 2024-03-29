import gettext
import locale
import os

from flask import Flask, redirect, render_template, send_from_directory
from flask_sslify import SSLify

app = Flask(__name__)
lang_code = locale.getdefaultlocale()[0]

@app.route('/')
def main():
    lang = gettext.translation('index', './locale', languages=[lang_code])
    _ = lang.ugettext
    return render_template('light.html', _ = _)


@app.route('/ourstory')
@app.route('/team')
@app.route('/about')
def ourstory():
    lang = gettext.translation('ourstory', './locale', languages=[lang_code])
    _ = lang.ugettext
    return render_template('ourstory.html', _ = _)

@app.route('/updater')
@app.route('/update')
def updater():
    lang = gettext.translation('updater', './locale', languages=[lang_code])
    _ = lang.ugettext
    return render_template('updater.html', _ = _)

@app.route('/light')
@app.route('/lightup')
def light():
    lang = gettext.translation('updater', './locale', languages=[lang_code])
    _ = lang.ugettext
    return render_template('light.html', _ = _)

@app.route('/premiumheadphones')
def premiumheadphones():
    lang = gettext.translation('updater', './locale', languages=[lang_code])
    _ = lang.ugettext
    return render_template('sound.html', _ = _)

@app.route('/warranty')
def warranty():
    return redirect("http://store.wearhaus.com/pages/warranty")

@app.route('/gettingstarted')
def gettingstarted():
    return redirect("https://www.youtube.com/watch?v=1A1OaNIA1_k")

@app.route('/intro')
def intro():
    return redirect("https://www.youtube.com/watch?v=SedBXaFskJQ")

@app.route('/android')
def android():
    return redirect("../static/files/WearhausArcAppVC8.apk")

@app.route('/arc')
@app.route('/wearhaus-arc')
def arc():
    return redirect("/")

@app.route('/reviewguide')
def reviewguide():
    return redirect("https://www.youtube.com/playlist?list=PLs0rLWE-xlJDbZy52RRdnhAf973QUFqxV")

@app.route('/google24c31f1e96a5aa9d.html')
def google():
    return render_template('google24c31f1e96a5aa9d.html')

@app.route('/favicon.ico')
def favicon():
    return send_from_directory('static', 'favicon.ico')


if 'DYNO' in os.environ: # only trigger SSLify if the app is running on Heroku
    sslify = SSLify(app)

if __name__ == '__main__':
    app.debug = False
    app.run()
