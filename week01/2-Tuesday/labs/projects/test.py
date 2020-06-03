# greeting = "Hello %s, it is very nice to meet you and your friend %s!" # turn this junk into something prettier
# name_of_user = input("What is your name? ")
# length_of_name = len(name_of_user)
# if length_of_name > 0:
#     name_of_friend = input("What is your friend's name? ")
#     print(greeting % (name_of_user, name_of_friend))
# else:
#     print("OK, I'll ask again some other time.")


name_of_user = input("What is your name? ")
name_of_friend = input("What is your friends name?")


# This is an F string:
print(f"Hello, {name}. You are {age}.")
# "f" - denotes HEY THIS IS AN F STRING
# inject variable/logic into string with {VARIABLE_NAME}