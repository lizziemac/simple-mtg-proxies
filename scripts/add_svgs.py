import os
import requests
import time

OUTPUT_DIR = "public/scryfall/symbols"
os.makedirs(OUTPUT_DIR, exist_ok=True)

BASE_URL = "https://api.scryfall.com/symbology"

def download_svg(name, svg_uri):
    filename = os.path.join(OUTPUT_DIR, f"{name}.svg")
    if os.path.exists(filename):
      print(f"Skipping {filename} (already exists)")
      return
    try:
        r = requests.get(svg_uri)
        r.raise_for_status()
        with open(filename, "wb") as f:
            f.write(r.content)
        print(f"Saved {filename}")
    except Exception as e:
        print(f"Failed {name}: {e}")

def main():
    url = BASE_URL
    while url:
        resp = requests.get(url)
        resp.raise_for_status()
        data = resp.json()
        for symbol in data.get("data", []):
            svg_uri = symbol.get("svg_uri")
            name = symbol.get("symbol", "unknown").replace("/", "|")
            if svg_uri:
                download_svg(name, svg_uri)
                time.sleep(0.1)  # polite delay, per scryfall request
        url = data.get("next_page")

if __name__ == "__main__":
    main()
