#!/usr/bin/python3
# -*- coding: utf-8 -*-
# File name : app.py
# Author : MasterLaplace
# Created : 2023-12-07
# Description : Server

from flask import Flask, render_template, jsonify, request, send_from_directory
import os

app = Flask(__name__)
STATIC_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'includes')

def prGreen(key: str, value: str):
    print(f"\033[92m {key}\033[00m", value)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/includes/<path:filename>')
def serve_file(filename):
    return send_from_directory(STATIC_DIR, filename)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 200

@app.route('/quizz')
def quizz():
    return render_template('quizz.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000, threaded=True, use_reloader=False)
