import os
import re

def convert_ts_to_js(root_dir):
    for dirpath, _, filenames in os.walk(root_dir):
        # Skip node_modules directory
        if 'node_modules' in dirpath:
            continue
        for filename in filenames:
            if filename.endswith('.ts') or filename.endswith('.tsx'):
                old_path = os.path.join(dirpath, filename)
                if filename.endswith('.tsx'):
                    new_filename = filename[:-4] + '.jsx'
                else:
                    new_filename = filename[:-3] + '.js'
                new_path = os.path.join(dirpath, new_filename)
                print(f"Renaming: {old_path} -> {new_path}")
                os.rename(old_path, new_path)
                clean_file(new_path)

def clean_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    cleaned_content = re.sub(r':\s*\w+\s*(?=[,);={])', '', content)
    cleaned_content = re.sub(r'interface\s+\w+\s*{[^}]*}', '', cleaned_content)
    cleaned_content = re.sub(r'type\s+\w+\s*=\s*[^;]+;', '', cleaned_content)
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(cleaned_content)
    print(f"Cleaned TypeScript syntax in: {file_path}")

def main():
    root_dir = os.getcwd()
    print(f"Converting TypeScript files to JavaScript in: {root_dir}")
    confirm = input("Are you sure you want to proceed? This will rename and modify files. (y/n): ")
    if confirm.lower() != 'y':
        print("Aborted.")
        return
    convert_ts_to_js(root_dir)
    print("Conversion complete!")

if __name__ == "__main__":
    main()