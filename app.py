import urllib
import json

from flask import Flask, render_template, request, jsonify, Response

app = Flask(__name__)

@app.route('/')
def main():
    featured_posts_url_response = urllib.urlopen("http://biog.wearhaus.com/featured-images/")
    featured_posts = json.loads(featured_posts_url_response.read())
    return render_template('index.html', featured_posts = featured_posts)

@app.route('/ourstory')
def ourstory():
    return render_template('ourstory.html')

if __name__ == '__main__':
    app.debug = False
    app.run()
