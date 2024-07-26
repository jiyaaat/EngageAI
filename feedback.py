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
        # Collect additional details
        product_name = input("Enter the product name: ")
        purchase_site = input("Enter the site where you bought the product: ")
        dislike = input("Enter what you didn't like about the product: ")
        suggestions = input("Enter any suggestions you have for the product: ")
        
        # Combine all feedback into a single string
        feedback = (f"Product Name: {product_name}\n"
                    f"Purchase Site: {purchase_site}\n"
                    f"Dislike: {dislike}\n"
                    f"Suggestions: {suggestions}")

        # Analyze sentiment
        sentiment = analyze_sentiment(feedback)

        # Output sentiment analysis
        print("\nFeedback Details:")
        print(feedback)
        print("\nSentiment Analysis:")
        print(f"Negative: {sentiment['neg']}")
        print(f"Neutral: {sentiment['neu']}")
        print(f"Positive: {sentiment['pos']}")
        print(f"Compound: {sentiment['compound']}")
        print("-" * 50)
        
        # Option to exit
        if input("Type 'exit' to stop or press Enter to continue: ").lower() == 'exit':
            break

if __name__ == "__main__":
    main()
