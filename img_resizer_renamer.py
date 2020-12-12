import os 
from PIL import Image


def rename(path):
    dirname = os.path.basename(path)
    print(f'renaming in dir: {path}, dirname: {dirname}')

    for dirpath, dirs, files in os.walk(path):
        if dirs:
            for d in dirs:
                print(f'dir:{d}')
                os.rename(d, d.replace(" ", "_"))
                rename(os.path.join(dirpath, d))
        if files:
            n = 1
            for f in files:
                print(f'file:{f}')
                ext = os.path.splitext(f)[1]
                if ext == ".py":
                    continue
                image = Image.open(os.path.join(dirpath, f))
                image.thumbnail((800, 2000))
                print(f'saving image: {dirname}_{n}{ext}')
                image.save(f'{dirpath}/{dirname.replace(" ", "_")}_{n}{ext}')
                n += 1


def create_data_dict(path):
    with open("./data.txt", 'w') as dd:
        dd.write("[")
        for dirpath, dirs, files in os.walk(path):
            for d in dirs:
                dd.write(f'{{title: "{d}", thumbnailImagePath: "/images/stories/{d}/thumbnail.jpg", description: "", images: [   ')
                for dirpath, dirs, files in os.walk(os.path.join(path, d)):
                    for f in files:
                        dd.write(f'{{title: "{os.path.splitext(f)[0]}", path: "/images/stories/{d}/{f}"}},')
                dd.write("] }},")
        dd.write("]")


if __name__ == '__main__':
    curpath = os.path.dirname(os.path.realpath(__file__))
    print(curpath)
    print(os.walk(curpath))
    rename(curpath)
    create_data_dict(curpath)