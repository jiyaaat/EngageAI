import random

# Sample data: Product recommendations based on age, gender, and preferences
product_recommendations = {
    "female": {
        "young": ["Makeup kit", "Fashion accessories", "Perfume", "Tech gadgets"],
        "middle-aged": ["Skincare products", "Jewelry", "Handbags", "Books"],
        "senior": ["Health supplements", "Comfortable shoes", "Travel accessories", "Personal care items"]
    },
    "male": {
        "young": ["Gaming console", "Sports gear", "Tech gadgets", "Fashion accessories"],
        "middle-aged": ["Gourmet cooking tools", "Fitness equipment", "Books", "Tech gadgets"],
        "senior": ["Outdoor gear", "Gardening tools", "Personal care items", "Tech gadgets"]
    }
}

# Function to recommend a product based on age, gender, and preferences
def recommend_product(age, gender, preference):
    # Convert age to category: young, middle-aged, senior
    if age <= 30:
        age_category = "young"
    elif age <60:
        age_category = "middle-aged"
    else:
        age_category = "senior"

    # Choose product based on gender and age category
    recommendations = []
    if gender.lower() == "female":
        if age_category in product_recommendations["female"]:
            recommendations = product_recommendations["female"][age_category]
    elif gender.lower() == "male":
        if age_category in product_recommendations["male"]:
            recommendations = product_recommendations["male"][age_category]

    # Find recommendations containing the preference keyword
    matched_recommendations = [item for item in recommendations if preference.lower() in item.lower()]

    # Return a specific recommendation if found; otherwise, a random recommendation
    if matched_recommendations:
        return f"Based on your profile (age: {age}, gender: {gender}), we recommend: {random.choice(matched_recommendations)}"
    elif recommendations:
        return f"Based on your profile (age: {age}, gender: {gender}), we recommend: {random.choice(recommendations)}"
    else:
        return f"No recommendations found based on your profile (age: {age}, gender: {gender})."

# Example usage
def main():
    age = int(input("Enter your age: "))
    gender = input("Enter your gender (Male/Female): ")
    preference = input("Enter your preference (e.g., Makeup kit, Tech gadgets): ")

    recommendation = recommend_product(age, gender, preference)
    print(recommendation)

if __name__ == "__main__":
    main()
