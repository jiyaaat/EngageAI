from flask import Flask, request, jsonify
from chatter import process_input
from recommendation import recommend_product
from feedback import analyze_sentiment
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

@app.route('/recommendation', methods=['POST'])
def recommendation():
    data = request.get_json()
    age = int(data.get('age', 0))
    gender = data.get('gender', '')
    preference = data.get('preference', '')
    
    if not age or not gender or not preference:
        return jsonify({'recommendation': "Please provide age, gender, and preference."})

    recommendation = recommend_product(age, gender, preference)
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
