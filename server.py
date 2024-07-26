from flask import Flask, request, jsonify
from chatter import process_input
from recommendation import recommend_product
from feedback import analyze_sentiment
from flask_cors import CORS
import nltk

# Ensure that the 'punkt' tokenizer models are downloaded
nltk.download('punkt')

app = Flask(__name__)
CORS(app)  # Add this line to enable CORS

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message', '')
    response = process_input(user_message)
    return jsonify({'response': response})

@app.route('/recommendation', methods=['POST'])
def recommendation():
    data = request.get_json()
    name = data.get('name', '')
    age = int(data.get('age', 0))
    gender = data.get('gender', '')
    preference = data.get('preference', '')
    occupation = data.get('occupation', '')
    frequently_bought = data.get('frequently_bought', '')

    if not age or not gender or not preference or not occupation:
        return jsonify({'recommendation': "Please provide age, gender, preference, and occupation."})

    recommendation = recommend_product(name, age, gender, preference, occupation, frequently_bought)
    return jsonify({'recommendation': recommendation})

@app.route('/feedback', methods=['POST'])
def feedback():
    data = request.get_json()
    feedback_text = data.get('feedback', '')

    if not feedback_text:
        return jsonify({'sentiment': "Please provide feedback text."})

    sentiment = analyze_sentiment(feedback_text)
    return jsonify({'sentiment': sentiment})

if __name__ == '__main__':
    app.run(port=5000, debug=True)
