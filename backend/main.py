import requests

r = requests.get("https://www.geeksforgeeks.org/python-web-scraping-tutorial/")
print(r.content)