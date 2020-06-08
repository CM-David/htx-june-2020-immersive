import pickle

with open('phonebook.pickle', 'rb') as fh:
    phone_book = pickle.load(fh)

# phone_book = {"mike": "281-330-8004",
#               "paul": "281-657-8989",
#               "sarah": "832-555-6754"
#               }



allVal = phone_book.keys()

#def 

def showall():
    for key, value in phone_book.items():
            print(f'{key} {value}')


while True:
    task = input(
        "\n\nElecrtonic Phonebook\n===========\nWhat would you like to do? (1-5)\n1. Look up an entry\n2. Set an entry\n3. Delete an entry\n4. List all entries\n5. Quit\n>>> ")
    if int(task) == 1:
        nombre = input("Please enter a name >>>   ")
        if nombre in phone_book:
            print("Their number is:   ", phone_book[nombre])
        # ENTRY LOOK UP
    elif int(task) == 2:
        nameEntry = input('Please enter a name >>> ')
        phoneEntry = input('Please add a phone number >>> ')
        phone_book[nameEntry] = phoneEntry
        #ADD ENTRY
    elif int(task) == 3:
        rem = input('Which name would you like to delete? >>> ')
        if rem in phone_book:
            del phone_book[rem]
        print("You have deleted ", [rem])
        #DELETE ENTRY
    elif int(task) == 4:
        showall()
            #SHOW ALL
    elif int(task) == 5:
        break
    elif int(task) >= 6:
        print("Please choose (1-5)")


with open('phonebook.pickle', 'wb') as fh:
    pickle.dump(phone_book, fh)