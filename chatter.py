import nltk
from nltk.tokenize import word_tokenize
import random
import requests

# Example intents and responses
intents = {
    "greeting": ["Hi there!", "Hello!", "Hey!", "Greetings!"],
    "goodbye": ["Goodbye!", "Bye!", "See you later!"],
    "product_info": {
        "skin": ["The {product_name} is a great choice for skincare. It costs {price}.", "Here is some information about {product_name}: {description}. It's perfect for skin care."],
        "fashion": ["The {product_name} is a stylish choice. It costs {price}.", "Here is some information about {product_name}: {description}. It's a great addition to your wardrobe."],
        "electronics": ["The {product_name} is a top choice in electronics. It costs {price}.", "Here is some information about {product_name}: {description}. It's a great electronic device."],
        "home": ["The {product_name} is a perfect home item. It costs {price}.", "Here is some information about {product_name}: {description}. It's ideal for your home."],
        "books": ["The {product_name} is a great book. It costs {price}.", "Here is some information about {product_name}: {description}. It's a must-read book."],
        # Add more categories as needed
    },
    "recommendation": {
        "skin": ["Based on your preference for skin care, you might like {product_name}. It costs {price}.", "I recommend checking out {product_name}. It's priced at {price} and great for skin care."],
        "fashion": ["Based on your preference for fashion, you might like {product_name}. It costs {price}.", "I recommend checking out {product_name}. It's priced at {price} and perfect for your style."],
        "electronics": ["Based on your interest in electronics, you might like {product_name}. It costs {price}.", "I recommend checking out {product_name}. It's priced at {price} and ideal for tech enthusiasts."],
        "home": ["Based on your interest in home items, you might like {product_name}. It costs {price}.", "I recommend checking out {product_name}. It's priced at {price} and perfect for your home."],
        "books": ["Based on your interest in books, you might like {product_name}. It costs {price}.", "I recommend checking out {product_name}. It's priced at {price} and a great read."],
        # Add more categories as needed
    },
    "order_status": ["Your order is being processed.", "Your order has been shipped.", "Your order will arrive soon."],
    "fallback": ["I'm sorry, I didn't understand that. Could you please repeat that?", "I'm not sure I can help with that. Could you please ask about a product or an order?"],
}

def get_random_product(category):
    """Fetch random product data from an API and filter by category."""
    try:
        response = requests.get('https://fakestoreapi.com/products')
        response.raise_for_status()  # Raise an exception for HTTP errors
        products = response.json()
        # Filter products based on category
        filtered_products = [p for p in products if category in p["title"].lower() or category in p["description"].lower()]
        if not filtered_products:
            filtered_products = products  # Fall back to any product if none match
        product = random.choice(filtered_products)
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
    
    # Check for greetings
    if tokens & {"hi", "hello", "hey"}:
        return random.choice(intents["greeting"])

    # Check for goodbye
    if tokens & {"bye", "goodbye"}:
        return random.choice(intents["goodbye"])

    # Check for product inquiry
    for category in ["skin", "fashion", "electronics", "home", "books"]:  # Add more categories as needed
        if category in tokens:
            product = get_random_product(category)
            return random.choice(intents["product_info"].get(category, ["No information available."])).format(
                product_name=product["name"], price=product["price"], description=product["description"]
            )

    # Check for recommendation request
    for category in ["skin", "fashion", "electronics", "home", "books"]:  # Add more categories as needed
        if category in tokens:
            product = get_random_product(category)
            return random.choice(intents["recommendation"].get(category, ["No recommendations available."])).format(
                product_name=product["name"], price=product["price"]
            )

    # Check for order status
    if tokens & {"order", "status", "shipping"}:
        return random.choice(intents["order_status"])

    # Fallback for unrecognized intents
    return random.choice(intents["fallback"])

# Example usage
def main():
    print("Bot: Hello! How can I assist you today?")
    while True:
        user_input = input("You: ")
        if user_input.lower() == 'exit':
            print("Bot: Goodbye! Have a nice day.")
            break
        else:
            bot_response = process_input(user_input)
            print(f"Bot: {bot_response}")

if __name__ == "__main__":
    main()
