from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

# Initialize the VADER sentiment analyzer
analyzer = SentimentIntensityAnalyzer()

# Function to analyze sentiment
def analyze_sentiment(feedback):
    sentiment = analyzer.polarity_scores(feedback)
    return sentiment

def main():
    while True:
        # Input customer feedback
        feedback = input("Enter customer feedback (or type 'exit' to stop): ")

        if feedback.lower() == 'exit':
            break

        # Analyze sentiment
        sentiment = analyze_sentiment(feedback)

        # Output sentiment analysis
        print(f"Feedback: {feedback}")
        print(f"Sentiment: {sentiment}")
        print("-" * 50)

if __name__ == "__main__":
    main()
