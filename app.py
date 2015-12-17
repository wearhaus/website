import urllib2
import json

from flask import Flask, render_template, request, jsonify, Response

app = Flask(__name__)

@app.route('/')
def main():
    backup_featured = json.loads('{"featured_1":{"title":"First Firmware Update is Live!","url":"http://blog.wearhaus.com/2015/11/24/first-firmware-update-is-live/","img_url":"http://blog.wearhaus.com/wp-content/uploads/2015/11/TIMF-2014-Day-1-Wearhaus-21-of-22-1000x1000.jpg"},"featured_2":{"title":"Crowdfunding Spotlight: Smartphone Accessories","url":"http://blog.wearhaus.com/2015/11/10/crowdfunding-spotlight-smartphone-accessories/","img_url":"http://blog.wearhaus.com/wp-content/uploads/2015/11/smartphone_accessories-01_1024-1000x1000.png"},"featured_3":{"title":"Crowdfunding Spotlight: Personal Transportation","url":"http://blog.wearhaus.com/2015/10/23/crowdfunding-spotlight-personal-transportation/","img_url":"http://blog.wearhaus.com/wp-content/uploads/2015/10/transportation.2-1000x1000.jpg"},"featured_4":{"title":"Wearhaus Featured Artist: FIDLAR","url":"http://blog.wearhaus.com/2015/10/19/fidlar/","img_url":"http://blog.wearhaus.com/wp-content/uploads/2015/10/fidlar.jpg"},"featured_5":{"title":"Shipping and Firmware Updates","url":"http://blog.wearhaus.com/2015/10/06/shipping-and-firmware-updates/","img_url":"http://blog.wearhaus.com/wp-content/uploads/2015/07/FB21.jpg"},"featured_6":{"title":"Wearhaus Featured Artist: Darwin Deez","url":"http://blog.wearhaus.com/2015/09/21/darwin-deez/","img_url":"http://blog.wearhaus.com/wp-content/uploads/2015/09/Darwin-Deez_Blog-1000x1000.jpg"},"featured_7":{"title":"Crowdfunding Spotlight: Phone Drone by xCraft","url":"http://blog.wearhaus.com/2015/11/24/crowdfunding-spotlight-phone-drone-by-xcraft/","img_url":"http://blog.wearhaus.com/wp-content/uploads/2015/11/transpo2-1000x1000.png"}}')
    try: # check to see if we can fetch the latest blog posts
        featured_posts_url_response = urllib2.urlopen("http://blog.wearhaus.com/featured-posts/")
        try: # make sure the response is a true json formatted string
            featured_posts = json.loads(featured_posts_url_response.read())
        except ValueError, e:
            featured_posts = backup_featured
            pass
    except (urllib2.HTTPError, urllib2.URLError):
        featured_posts = backup_featured
        pass
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
