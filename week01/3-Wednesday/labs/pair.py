todos = []

response = " "
while response != "":
    response = input("add item to todo list ")
    if response == "":
        break
    todos.append(response)
    print(todos)

print(todos)
