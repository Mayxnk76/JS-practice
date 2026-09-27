# Q-1 – Write a Python program to input a string and a positive integer from the user. Perform the following tasks:
sentence = input("Enter a string: ")
number = input("Enter a positive integer: ")

words = sentence.split()
# 1.	Display all the words from the string whose first and last characters are different.
print("\nWords with different first and last characters:")

for word in words:
    if word[0].lower() != word[-1].lower():
        print(word)
# 2.	Count the number of words containing at least one digit.
count = 0

for word in words:
    for ch in word:
        if ch.isdigit():
            count += 1
            break

print("\nNumber of words containing at least one digit:", count)
# 3.	Find the product of all non-zero digits of the given number.
product = 1

for digit in number:
    if digit != "0":
        product *= int(digit)

print("\nProduct of non-zero digits:", product)
# 4.	Check whether the digits of the given number are in strictly increasing order from left to right.
increasing = True

for i in range(len(number) - 1):
    if number[i] >= number[i + 1]:
        increasing = False
        break

if increasing:
    print("Increasing order")
else:
    print("Not strictly increasing")


# Q- 2 Write a Python program to input n words from the user and store them in a list. Perform the following tasks:
n = int(input("Enter number of words: "))

words = []

for i in range(n):
    word = input("Enter word: ")
    words.append(word)


# 1. Dictionary: Word -> Reverse

reverse_dict = {}

for word in words:
    reverse_dict[word] = word[::-1]

print("\nReverse Dictionary:")
print(reverse_dict)


# 2. Tuple containing words with even number of characters

even_words = []

for word in words:
    if len(word) % 2 == 0:
        even_words.append(word)

even_tuple = tuple(even_words)

print("\nWords with even number of characters:")
print(even_tuple)


# 3. Set containing first character of each word

first_characters = set()

for word in words:
    first_characters.add(word[0].lower())

print("\nFirst characters:")
print(first_characters)


# 4. Words containing at least one repeated character

print("\nWords having repeated characters:")

for word in words:
    word_lower = word.lower()
    repeated = False

    for ch in word_lower:
        if word_lower.count(ch) > 1:
            repeated = True
            break

    if repeated:
        print(word)


# 5. Words having maximum number of vowels

max_vowels = 0

for word in words:
    vowel_count = 0

    for ch in word.lower():
        if ch in "aeiou":
            vowel_count += 1

    if vowel_count > max_vowels:
        max_vowels = vowel_count

print("\nMaximum number of vowels:", max_vowels)
print("Words having maximum vowels:")

for word in words:
    vowel_count = 0

    for ch in word.lower():
        if ch in "aeiou":
            vowel_count += 1

    if vowel_count == max_vowels:
        print(word)

# Q-3 Write a Python program to accept details of n hotel rooms and create a dictionary in the following format:
rooms = {
    101: ["Deluxe", 3500, 3, "Available"],
    102: ["Standard", 2200, 2, "Booked"],
    103: ["Suite", 5000, 4, "Available"]
}


# 1. Room Number -> (Room Type, Rent for 3 Days)

rent_dict = {}

for room_no, details in rooms.items():

    room_type = details[0]
    rent_per_day = details[1]

    rent_for_3_days = rent_per_day * 3

    rent_dict[room_no] = (room_type, rent_for_3_days)

print("Rent Dictionary:")
print(rent_dict)


# 2. Set of different room types

room_types = set()

for details in rooms.values():
    room_types.add(details[0])

print("\nDifferent Room Types:")
print(room_types)


# 3. Available rooms with capacity >= 3

print("\nAvailable rooms with capacity 3 or more:")

for room_no, details in rooms.items():

    room_type = details[0]
    capacity = details[2]
    status = details[3]

    if status == "Available" and capacity >= 3:
        print(room_no, room_type)


# 4. Available room having lowest rent

lowest_rent = 999999
lowest_room = ""

for room_no, details in rooms.items():

    room_type = details[0]
    rent_per_day = details[1]
    status = details[3]

    if status == "Available":

        if rent_per_day < lowest_rent:
            lowest_rent = rent_per_day
            lowest_room = room_type

print("\nAvailable room with lowest rent:")
print(lowest_room, lowest_rent)


# 5. Count Available and Booked rooms

available_count = 0
booked_count = 0

for details in rooms.values():

    status = details[3]

    if status == "Available":
        available_count += 1

    elif status == "Booked":
        booked_count += 1

print("\nAvailable rooms:", available_count)
print("Booked rooms:", booked_count)