import random

# Sample data: Product recommendations based on various factors
product_recommendations = {
    "female": {
        "young": [
            {"item": "Makeup kit", "category": "Beauty", "price_range": "$20-$50", "rating": 4.5},
            {"item": "Fashion accessories", "category": "Fashion", "price_range": "$10-$30", "rating": 4.0},
            {"item": "Perfume", "category": "Beauty", "price_range": "$30-$60", "rating": 4.2},
            {"item": "Tech gadgets", "category": "Electronics", "price_range": "$50-$200", "rating": 4.8},
            {"item": "Books", "category": "Books", "price_range": "$10-$25", "rating": 4.3}
        ],
        "middle-aged": [
            {"item": "Skincare products", "category": "Beauty", "price_range": "$30-$100", "rating": 4.6},
            {"item": "Jewelry", "category": "Fashion", "price_range": "$50-$150", "rating": 4.4},
            {"item": "Handbags", "category": "Fashion", "price_range": "$80-$250", "rating": 4.5},
            {"item": "Books", "category": "Books", "price_range": "$15-$30", "rating": 4.3},
            {"item": "Fitness equipment", "category": "Fitness", "price_range": "$100-$300", "rating": 4.7}
        ],
        "senior": [
            {"item": "Health supplements", "category": "Health", "price_range": "$20-$60", "rating": 4.5},
            {"item": "Comfortable shoes", "category": "Fashion", "price_range": "$50-$120", "rating": 4.6},
            {"item": "Travel accessories", "category": "Travel", "price_range": "$30-$80", "rating": 4.4},
            {"item": "Personal care items", "category": "Beauty", "price_range": "$15-$40", "rating": 4.2},
            {"item": "Gardening tools", "category": "Home", "price_range": "$25-$70", "rating": 4.5}
        ]
    },
    "male": {
        "young": [
            {"item": "Gaming console", "category": "Electronics", "price_range": "$200-$500", "rating": 4.7},
            {"item": "Sports gear", "category": "Fitness", "price_range": "$50-$150", "rating": 4.5},
            {"item": "Tech gadgets", "category": "Electronics", "price_range": "$50-$200", "rating": 4.8},
            {"item": "Fashion accessories", "category": "Fashion", "price_range": "$20-$60", "rating": 4.3},
            {"item": "Books", "category": "Books", "price_range": "$10-$25", "rating": 4.4}
        ],
        "middle-aged": [
            {"item": "Gourmet cooking tools", "category": "Kitchen", "price_range": "$30-$100", "rating": 4.5},
            {"item": "Fitness equipment", "category": "Fitness", "price_range": "$100-$300", "rating": 4.6},
            {"item": "Books", "category": "Books", "price_range": "$15-$30", "rating": 4.3},
            {"item": "Tech gadgets", "category": "Electronics", "price_range": "$50-$200", "rating": 4.7},
            {"item": "Outdoor gear", "category": "Outdoor", "price_range": "$80-$250", "rating": 4.4}
        ],
        "senior": [
            {"item": "Outdoor gear", "category": "Outdoor", "price_range": "$80-$250", "rating": 4.6},
            {"item": "Gardening tools", "category": "Home", "price_range": "$25-$70", "rating": 4.5},
            {"item": "Personal care items", "category": "Beauty", "price_range": "$15-$40", "rating": 4.3},
            {"item": "Tech gadgets", "category": "Electronics", "price_range": "$50-$200", "rating": 4.8},
            {"item": "Health supplements", "category": "Health", "price_range": "$20-$60", "rating": 4.5}
        ]
    }
}

# Function to recommend a product based on various factors
def recommend_product(name, age, gender, preference, occupation, frequently_bought):
    # Convert age to category: young, middle-aged, senior
    if age <= 30:
        age_category = "young"
    elif age <= 60:
        age_category = "middle-aged"
    else:
        age_category = "senior"

    # Initialize recommendations
    recommendations = []

    # Choose product based on gender and age category
    if gender.lower() == "female":
        recommendations += product_recommendations["female"].get(age_category, [])
    elif gender.lower() == "male":
        recommendations += product_recommendations["male"].get(age_category, [])

    # Occupation-based recommendations
    occupation_recommendations = {
        "student": [
            {"item": "Study guides", "category": "Education", "price_range": "$10-$30", "rating": 4.2},
            {"item": "Laptop accessories", "category": "Electronics", "price_range": "$20-$50", "rating": 4.4},
            {"item": "Dorm essentials", "category": "Home", "price_range": "$15-$40", "rating": 4.3}
        ],
        "home maker": [
            {"item": "Kitchen gadgets", "category": "Kitchen", "price_range": "$20-$60", "rating": 4.5},
            {"item": "Home decor", "category": "Home", "price_range": "$30-$100", "rating": 4.6},
            {"item": "Organizational tools", "category": "Home", "price_range": "$10-$40", "rating": 4.4}
        ],
        "chef": [
            {"item": "Professional cookware", "category": "Kitchen", "price_range": "$100-$300", "rating": 4.8},
            {"item": "Cooking classes", "category": "Education", "price_range": "$50-$150", "rating": 4.7},
            {"item": "High-quality knives", "category": "Kitchen", "price_range": "$50-$150", "rating": 4.6}
        ],
        "doctor": [
            {"item": "Medical books", "category": "Books", "price_range": "$20-$60", "rating": 4.5},
            {"item": "Stress-relief gadgets", "category": "Health", "price_range": "$30-$80", "rating": 4.6},
            {"item": "Personal wellness tools", "category": "Health", "price_range": "$40-$100", "rating": 4.7}
        ],
        "engineer": [
            {"item": "Technical books", "category": "Books", "price_range": "$30-$70", "rating": 4.4},
            {"item": "Gadgets", "category": "Electronics", "price_range": "$50-$200", "rating": 4.5},
            {"item": "Toolkits", "category": "Tools", "price_range": "$60-$150", "rating": 4.6},
            {"item": "Project management software", "category": "Software", "price_range": "$50-$150", "rating": 4.7},
            {"item": "Desk organizers", "category": "Office", "price_range": "$20-$50", "rating": 4.3}
        ],
        "artist": [
            {"item": "Art supplies", "category": "Art", "price_range": "$20-$80", "rating": 4.5},
            {"item": "Creative software", "category": "Software", "price_range": "$40-$150", "rating": 4.7},
            {"item": "Art books", "category": "Books", "price_range": "$15-$50", "rating": 4.4}
        ],
        "entrepreneur": [
            {"item": "Business books", "category": "Books", "price_range": "$20-$60", "rating": 4.5},
            {"item": "Office supplies", "category": "Office", "price_range": "$30-$100", "rating": 4.6},
            {"item": "Productivity tools", "category": "Tools", "price_range": "$40-$120", "rating": 4.7}
        ],
        "retired": [
            {"item": "Leisure books", "category": "Books", "price_range": "$10-$30", "rating": 4.3},
            {"item": "Hobby kits", "category": "Hobbies", "price_range": "$30-$80", "rating": 4.5},
            {"item": "Comfort items", "category": "Home", "price_range": "$40-$100", "rating": 4.6}
        ],
        "teacher": [
            {"item": "Educational resources", "category": "Education", "price_range": "$20-$60", "rating": 4.5},
            {"item": "Classroom supplies", "category": "Education", "price_range": "$15-$50", "rating": 4.4},
            {"item": "Books", "category": "Books", "price_range": "$10-$30", "rating": 4.3}
        ],
        "technician": [
            {"item": "Tools and gadgets", "category": "Tools", "price_range": "$30-$100", "rating": 4.6},
            {"item": "Technical books", "category": "Books", "price_range": "$20-$60", "rating": 4.5},
            {"item": "Repair kits", "category": "Tools", "price_range": "$40-$120", "rating": 4.7}
        ]
    }

    # Add occupation-based recommendations
    recommendations += occupation_recommendations.get(occupation.lower(), [])

    # Consider frequently bought products
    if frequently_bought:
        recommendations += [{"item": prod.strip(), "category": "General", "price_range": "$10-$100", "rating": 4.2} for prod in frequently_bought.split(',')]

    # Find recommendations containing the preference keyword
    matched_recommendations = [item for item in recommendations if preference.lower() in item["item"].lower()]

    # Return a specific recommendation if found; otherwise, a random recommendation
    if matched_recommendations:
        return (f"Hi {name}, based on your profile (age: {age}, gender: {gender}, occupation: {occupation}), we recommend: "
                f"{random.choice(matched_recommendations)['item']}.")
    elif recommendations:
        return (f"Hi {name}, based on your profile (age: {age}, gender: {gender}, occupation: {occupation}), we recommend: "
                f"{random.choice(recommendations)['item']}.")
    else:
        return (f"Hi {name}, no recommendations found based on your profile (age: {age}, gender: {gender}, occupation: {occupation}).")

# Example usage
def main():
    name = input("Enter your name: ")
    age = int(input("Enter your age: "))
    gender = input("Enter your gender (Male/Female): ")
    preference = input("Enter your preference (e.g., Makeup kit, Tech gadgets): ")
    occupation = input("Enter your occupation (Student/Home maker/Chef/Doctor/Engineer/Artist/Entrepreneur/Retired/Teacher/Technician): ")
    frequently_bought = input("Enter frequently bought products (comma-separated, e.g., Laptop, Phone): ")

    recommendation = recommend_product(name, age, gender, preference, occupation, frequently_bought)
    print(recommendation)

if __name__ == "__main__":
    main()
