from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/fuck')
def hello_world():
    return 'fuck World!'

if __name__ == '__main__':
    app.run()
