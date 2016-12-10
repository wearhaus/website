import urllib2
import json
import HTMLParser
import gettext
import locale

from flask import Flask, Response, jsonify, redirect, render_template, request

from blog import backup_posts

app = Flask(__name__)
lang_code = locale.getdefaultlocale()[0]

@app.route('/')
def main():
    lang = gettext.translation('index', './locale', languages=[lang_code])
    _ = lang.ugettext

    html_parser = HTMLParser.HTMLParser()
    backup_featured = {"posts": backup_posts}
    try:
        # check to see if we can fetch the latest blog posts
        featured_posts_url_response = urllib2.urlopen("http://blog.wearhaus.com/?json=get_recent_posts", timeout=5)
        # make sure the response is a true json formatted string
        featured_posts = json.loads(html_parser.unescape(featured_posts_url_response.read()))
    except (urllib2.HTTPError, urllib2.URLError, ValueError):
        featured_posts = backup_featured
        pass
    return render_template('index.html', featured_posts = featured_posts, _ = _)


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

@app.route('/warranty')
def warranty():
    return redirect("http://store.wearhaus.com/pages/warranty")

@app.route('/gettingstarted')
def gettingstarted():
    return redirect("https://www.youtube.com/watch?v=1A1OaNIA1_k")

@app.route('/android')
def android():
    return redirect("../static/files/WearhausArcAppVC8.apk")

@app.route('/google24c31f1e96a5aa9d.html')
def google():
    return render_template('google24c31f1e96a5aa9d.html')

if __name__ == '__main__':
    app.debug = False
    app.run()
