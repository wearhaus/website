import urllib
import json

from flask import Flask, render_template, request, jsonify, Response

app = Flask(__name__)

@app.route('/')
def main():
    featured_posts_url_response = urllib.urlopen("http://biog.wearhaus.com/featured-posts/")
    featured_posts = json.loads(featured_posts_url_response.read())
    return render_template('index.html', featured_posts = featured_posts)

@app.route('/ourstory')
@app.route('/team')
def ourstory():
    return render_template('ourstory.html')

@app.route('/updater')
@app.route('/update')
def updater():
    return render_template('updater.html')

if __name__ == '__main__':
    app.debug = False
    app.run()
