def main():
    file_path = input("enter your file path: ")

    separator = input("yor separator [\t]: ")
    if separator == '':
        separator = '\t'

    export_separate(file_path, separator)

def export_separate(file_path, separator):
    """
    separate english and chinese(definition)
    
    Args:
        file_path: file_path
        separator: the separator you chose when you export quizlet text

    Return:
        the english list
    """
    words = []

    try:
        with open(file_path, 'r') as text:
            lines = text.readlines()
            for line in lines:
                eng, chi = line.split(separator)
                words.append(eng)
    except FileNotFoundError:
        raise FileNotFoundError("Can't open the file")
    except ValueError:
        raise ValueError("Invalid separator")


    with open(file_path, 'w') as text:
        for word in words:
            text.write(word + '\n')

    print("separate sucess")
    

if __name__=="__main__":
    main()