def main():
    file_path = input("enter your file path: ")
    mode = input("(E)xport/(C)opy: ")

    if mode in ['E', 'e']:
        export_separate(file_path)

def export_separate(file_path):
    """
    separate english and chinese(definition)
    
    Args:
        file_path: file_path

    Return:
        the english list
    """
    words = []

    with open(file_path, 'r') as text:
        lines = text.readlines()
        for line in lines:
            eng, chi = line.split(' ')
            words.append(eng)
    
    with open(file_path, 'w') as text:
        for word in words:
            text.write(word)

    print("separate sucess")
    

if __name__=="__main__":
    main()