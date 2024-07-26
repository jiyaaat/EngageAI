from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

# Initialize the VADER sentiment analyzer
analyzer = SentimentIntensityAnalyzer()

# Function to analyze sentiment
def analyze_sentiment(feedback):
    sentiment = analyzer.polarity_scores(feedback)
    return {
        'neg': sentiment['neg'],
        'neu': sentiment['neu'],
        'pos': sentiment['pos'],
        'compound': sentiment['compound']
    }

def main():
    while True:
        # Input customer details
        product_name = input("Enter the name of the product: ")
        site = input("Enter the site where the product was purchased: ")
        feedback = input("Enter customer feedback (or type 'exit' to stop): ")
        
        if feedback.lower() == 'exit':
            break

        # Analyze sentiment
        sentiment = analyze_sentiment(feedback)

        # Output sentiment analysis
        print(f"Product: {product_name}")
        print(f"Site: {site}")
        print(f"Feedback: {feedback}")
        print(f"Sentiment: {sentiment}")
        print("-" * 50)

if __name__ == "__main__":
    main()
