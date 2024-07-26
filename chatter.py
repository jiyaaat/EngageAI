import nltk
from nltk.tokenize import word_tokenize
import random
import requests

# Example intents and responses
intents = {
    "greeting": ["Hi there!", "Hello!", "Hey!", "Greetings!"],
    "goodbye": ["Goodbye!", "Bye!", "See you later!"],
    "product_info": ["The {product_name} costs {price}.", "Here is some information about {product_name}: {description}.", "It's {price} for the {product_name}."],
    "recommendation": ["Based on your preferences, you might like {product_name}. It costs {price}.", "I recommend checking out {product_name}. It's priced at {price}."],
    "order_status": ["Your order is being processed.", "Your order has been shipped.", "Your order will arrive soon."],
    "fallback": ["I'm sorry, I didn't understand that. Could you please repeat that?", "I'm not sure I can help with that. Could you please ask about a product or an order?"],
}

def get_random_product():
    """Fetch random product data from an API."""
    try:
        response = requests.get('https://fakestoreapi.com/products')
        response.raise_for_status()  # Raise an exception for HTTP errors
        products = response.json()
        product = random.choice(products)
        return {
            "name": product["title"],
            "price": f'{product["price"]} USD',
            "description": product["description"]
        }
    except requests.RequestException as e:
        print(f"Error fetching product data: {e}")
        return {
            "name": "Unknown product",
            "price": "Unknown price",
            "description": "No description available"
        }

def preprocess_input(input_text):
    """Tokenize and preprocess the input text."""
    return set(word_tokenize(input_text.lower()))

def process_input(input_text):
    """Process the user input and return a response."""
    tokens = preprocess_input(input_text)
    
    if tokens & {"hi", "hello", "hey"}:
        return random.choice(intents["greeting"])

    if tokens & {"bye", "goodbye"}:
        return random.choice(intents["goodbye"])

    if tokens & {"product", "item", "price"}:
        product = get_random_product()
        return random.choice(intents["product_info"]).format(
            product_name=product["name"], price=product["price"], description=product["description"]
        )

    if tokens & {"recommend", "suggest"}:
        product = get_random_product()
        return random.choice(intents["recommendation"]).format(
            product_name=product["name"], price=product["price"]
        )

    if tokens & {"order", "status", "shipping"}:
        return random.choice(intents["order_status"])

    return random.choice(intents["fallback"])