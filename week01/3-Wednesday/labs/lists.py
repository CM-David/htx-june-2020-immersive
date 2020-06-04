

# 1. Create a new list called "planets" that holds all of the names of the planets
# in our solar system. Print the list of planets on the command line.

planet1 = "Earth"
planet2 = "Jupiter"
planet3 = "Neptune"
planet4 = "Mars"
planet5 = "Saturn"
planet6 = "Mercury"
planet7 = "Uranus"
planet8 = "Venus"

planets = ["Earth","Jupiter","Neptune","Mars","Saturn","Mercury","Uranus","Venus"]

print(planets [3])

# 2. Print out how many elements are in the planet list
print(len(planets)) 

# 3. Create a while loop that iterates through each of the items in the planet list
# and changes them to lowercase .
i = 0
while i < len(planets): 
    planets[i] = planets[i].lower()
    print(planets[i])
    i += 1 


# 4. Add Pluto to the planet list.
planets.append("Pluto")
index = 0
while index < len(planets):
    print(planets[index])
    index +=1

# 5. Combine the follwing 2 lists into a list called Houston.
# Find how many cities are listed in the Houston list
# Add more cities to the Houston list.
# Print the list cities (one city per line)

HoustonCities = ["Katy", "Memorial City", "Sugar Land", "The Heights", "River Oaks", "Pasadena"]
ClearLakeCities = ["League City", "Kemah", "Seabrook", "Webster", "El Lago"]

Houston = HoustonCities + ClearLakeCities

HoustonCities.extend(ClearLakeCities)

HoustonCities.append(ClearLakeCities)

index = 0
while index < len(Houston):
    print(Houston[index])
    index +=1 

# 6. Since Pluto isn't really a planet, delete it from the planet list
del(planets[8])
print(planets)

# 7. Create the following lists that are a subset of the Houston list:
# htx1 = The first 4 cities
# htx2 = Cities 3-6
# htx3 = The last 2 cities

htx1 = Houston[0:4]
htx2 = Houston[2:6]
htx3 = Houston[9:]

print(htx1)
print(htx2)
print(htx3)

# 7. Insert Denver in the Houston list after The Heights

Houston.insert(4, "Denver")
print(Houston)

# 8.  Remove the last city from the Houston List

Houston.pop()
print(Houston)

# 9. Get the index of Seabrook from the Houston list

print(Houston.index("Seabrook"))

# 10. Sort the list of cities

Houston.sort()
print(Houston)

# 11. Copy the Houston list to a list called USCities

# 12. Remove all items from the Houston list

print(Houston)
Houston.clear()
print(Houston)

# 13. Take the following list and multiply 5 times

nums = [4, 5, 7, 8]

# 14

newNums = nums * 5
print(newNums)

# 15. Reverse the String "DigitalCrafts"
dig = list("DigitalCrafts")

dig.reverse()
dig == "".join(dig)

print(dig)

# 16.  Crete a range [0, 1, 2, 3, 4, 5]

for val in range(6):
    print(val)

# 17. Create a range [6, 8, 10, 12, 14, 16]

for val in range(6, 17, 2):
    print(val)

# 18.  Loop through the planet list using a for loop and! print the name of each planet


# 19.  Loop through the USCities list and print the name of each city

# 20.  Loop through the following sequence [6, 8, 10, 12, 14, 16] and multiply each number by 5.  Print the result.

# 21. Create a multiplication table for 1-10

# i.e.  1x1 = 1
#        1x2 = 2
#        1x3 = 3
for rows in range(1, 11):
    for cols in range(1, 11):
        result = rows * cols
        print(f'{rows} x {cols} = {result}')