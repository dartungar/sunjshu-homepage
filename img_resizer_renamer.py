import os 
from PIL import Image


def rename(path, rootdirpath):
    dirname = os.path.basename(path)
    print(f'renaming in dir: {path}, dirname: {dirname}')

    for dirpath, dirs, files in os.walk(path):
        if dirs:
            for d in dirs:
                print(f'dir:{d}')
                os.rename(d, d.replace("+", " и "))
                rename(os.path.join(dirpath, d), rootdirpath)
        
        if files:
            # support nesting only 1 level deep
            # also do not operate on root dir
            if dirpath == rootdirpath:
                break
            n = 1
            for f in files:
                print(f'file:{f}')
                filepath = os.path.join(dirpath, f)
                ext = os.path.splitext(f)[1]
                if ext != ".jpg":
                    continue
                image = Image.open(filepath)
                image.thumbnail((800, 2000))
                print(f'saving image: {dirname}_{n}{ext}')
                if any((word in f for word in ("обложка", "Обложка", "thumbnail", "Thumbnail"))):
                    image.save(f'{dirpath}/{dirname.replace(" ", "_").replace("+", "_и_")}_Обложка{ext}')
                else:
                    image.save(f'{dirpath}/{dirname.replace(" ", "_").replace("+", "_и_")}_{n}{ext}')
                os.remove(filepath) #remove original file
                n += 1


def create_data_dict(path):
    with open("./data.txt", 'w', encoding='utf-8') as dd:
        dd.write("[")
        for dirpath, dirs, files in os.walk(path):
            for d in dirs:
                print(f'{{title: "{d}", id: 0, thumbnailImagePath: "/images/stories/{d}/{d.replace(" ", "_")}_Обложка.jpg", description: "", images: [   ')
                dd.write(f'{{title: "{d}", id: 0, thumbnailImagePath: "/images/stories/{d}/{d.replace(" ", "_")}_Обложка.jpg", description: "", images: [   ')
                for dirpath, dirs, files in os.walk(os.path.join(path, d)):
                    for f in files:
                        if "Обложка" in f:
                            continue
                        dd.write(f'{{title: "{os.path.splitext(f)[0]}", path: "/images/stories/{d}/{f}"}},')
                dd.write("] }},")
        dd.write("]")


if __name__ == '__main__':
    curpath = os.path.dirname(os.path.realpath(__file__))
    print(curpath)
    print(os.walk(curpath))
    rename(curpath, curpath)
    create_data_dict(curpath)