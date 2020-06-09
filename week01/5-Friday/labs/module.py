class Person:
    
    Location = "Houston, Tx"
    def __init__(self, name, lName, birthdate, address, phone, email):
        self.name = name
        self.lName = lName
        self.birthdate = birthdate
        self.address = address
        self.phone = phone
        self.email = email
        # print("initialized")

    def printName(self):
        print(f"Hello {self.name} {self.lName}")
        
        
    def printDetails()
        print("Details")

michael = Person("Michael", "Cortez", "1/1/20", "123 Sesame Street", "832-330-8004", "mc@gmail.com")
print(michael.name)

Woody = Person("Woody", "Connell", "1/1/2020", "254 Sesame Street", "713-250-0000", "WC@gmail.com")

print(woody.name)


