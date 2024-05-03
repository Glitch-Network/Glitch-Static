import requests

url = "https://www.google.com?q=" # Google search URL

search_query = 'intitle:"game" intitle:"online" intitle:"play"'

response = requests.get(url + search_query)

