import json

with open('package-lock.json', 'r') as f:
    lock = json.load(f)

def find_version(obj, target, path=''):
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k == 'version' and v == target:
                print(f"Found {target} at path: {path}")
            find_version(v, target, f"{path} -> {k}")
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            find_version(v, target, f"{path}[{i}]")

print("Searching for version 0.7.8...")
find_version(lock, '0.7.8')
print("Done.")
