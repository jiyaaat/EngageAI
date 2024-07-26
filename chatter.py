import nltk
from nltk.tokenize import word_tokenize
import requests
import random

# Example intents and responses
intents = {
    "greeting": ["Hi there!, How can I help you?", "Hello!, How can I help you?", "Hey!, How can I help you?", "Greetings!, How can I help you?"],
    "goodbye": ["Goodbye!", "Bye!", "See you later!"],
    "product_info": ["The {product_name} costs {price}.", "Here is some information about {product_name}: {description}.", "It's {price} for the {product_name}."],
    "recommendation": ["Based on your preferences, you might like {product_name}. It costs {price}.", "I recommend checking out {product_name}. It's priced at {price}."],
    "order_status": ["Your order is being processed.", "Your order has been shipped.", "Your order will arrive soon."],
    "fallback": ["I'm sorry, I didn't understand that. Could you please repeat that?", "I'm not sure I can help with that. Could you please ask about a product or an order?"],
}

def get_products():
    """Fetch product data from an API."""
    try:
        response = requests.get('https://fakestoreapi.com/products')
        response.raise_for_status()  # Raise an exception for HTTP errors
        return response.json()
    except requests.RequestException as e:
        print(f"Error fetching product data: {e}")
        return []

def search_products(query, products):
    """Filter products based on the user's query."""
    results = []
    for product in products:
        title = product["title"].lower()
        description = product["description"].lower()
        if query.lower() in title or query.lower() in description:
            results.append({
                "name": product["title"],
                "price": f'{product["price"]} USD',
                "description": product["description"]
            })
    return results

def preprocess_input(input_text):
    """Tokenize and preprocess the input text."""
    return set(word_tokenize(input_text.lower()))

def process_input(input_text):
    """Process the user input and return a response."""
    tokens = preprocess_input(input_text)
    products = get_products()  # Fetch products once per request
    
    if tokens & {"hi", "hello", "hey"}:
        return random.choice(intents["greeting"])

    if tokens & {"bye", "goodbye"}:
        return random.choice(intents["goodbye"])

    if tokens & {"product", "item", "price"}:
        # Extract search query from the input
        search_query = ' '.join(tokens & {"product", "item", "price"})
        if search_query:
            matching_products = search_products(search_query, products)
            if matching_products:
                return random.choice(intents["product_info"]).format(
                    product_name=matching_products[0]["name"],
                    price=matching_products[0]["price"],
                    description=matching_products[0]["description"]
                )
        return random.choice(intents["fallback"])

    if tokens & {"recommend", "suggest"}:
        # Extract search query from the input
        search_query = ' '.join(tokens & {"recommend", "suggest"})
        if search_query:
            matching_products = search_products(search_query, products)
            if matching_products:
                return random.choice(intents["recommendation"]).format(
                    product_name=matching_products[0]["name"],
                    price=matching_products[0]["price"]
                )
        return random.choice(intents["fallback"])

    if tokens & {"order", "status", "shipping"}:
        return random.choice(intents["order_status"])

    return random.choice(intents["fallback"])
