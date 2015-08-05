from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def main():
	return render_template('index.html')

# @app.route('/ourstory')
# def ourstory():
# 	return render_template('ourstory.html')

# @app.route('/favicon.ico') 
# def favicon(): 
# 	return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico')

if __name__ == '__main__':
	app.debug = False
	app.run()