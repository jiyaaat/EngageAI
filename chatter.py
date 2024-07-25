import nltk
from nltk.tokenize import word_tokenize
import random

# Example product data (can be expanded with more products)
products = {
    "iphone": {"price": "999 USD", "description": "The latest iPhone with advanced features."},
    "laptop": {"price": "1499 USD", "description": "Powerful laptop for professional use."},
    "headphones": {"price": "199 USD", "description": "Noise-canceling headphones for immersive sound."},
    "keyboard": {"price": "99 USD", "description": "Mechanical keyboard with RGB lighting."},
}

# Example intents and responses
intents = {
    "greeting": ["Hi there!", "Hello!", "Hey!", "Greetings!"],
    "goodbye": ["Goodbye!", "Bye!", "See you later!"],
    "product_info": ["The {product_name} costs {price}.", "Here is some information about {product_name}: {description}.", "It's {price} for the {product_name}."],
    "recommendation": ["Based on your preferences, you might like {product_name}. It costs {price}.", "I recommend checking out {product_name}. It's priced at {price}."],
    "fallback": ["I'm sorry, I didn't understand that. Could you please repeat that?", "I'm not sure I can help with that. Could you please ask about a product or an order?"],
}

# Function to preprocess user input
def preprocess_input(input_text):
    return word_tokenize(input_text.lower())

# Function to process user input
def process_input(input_text):
    tokens = preprocess_input(input_text)

    # Check for greetings
    if any(token in ["hi", "hello", "hey"] for token in tokens):
        return random.choice(intents["greeting"])

    # Check for goodbye
    if any(token in ["bye", "goodbye"] for token in tokens):
        return random.choice(intents["goodbye"])

    # Check for product inquiry
    if any(token in products for token in tokens):
        for token in tokens:
            if token in products:
                product = products[token]
                return random.choice(intents["product_info"]).format(product_name=token.capitalize(), price=product["price"], description=product["description"])

    # Check for recommendation request
    if any(token in ["recommend", "suggest"] for token in tokens):
        product = random.choice(list(products.keys()))
        return random.choice(intents["recommendation"]).format(product_name=product.capitalize(), price=products[product]["price"])

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
