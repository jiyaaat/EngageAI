from flask import Flask, request, jsonify
from chatter import process_input
import nltk

# Ensure that the 'punkt' tokenizer models are downloaded
nltk.download('punkt')

app = Flask(__name__)

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message', '')
    response = process_input(user_message)
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(port=5000, debug=True)
