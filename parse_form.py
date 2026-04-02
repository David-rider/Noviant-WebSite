import urllib.request
from bs4 import BeautifulSoup

req = urllib.request.Request('https://www.noviant.com/', headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read()
    soup = BeautifulSoup(html, 'html.parser')
    forms = soup.find_all('form')
    for i, form in enumerate(forms):
        print(f'Form {i}:')
        print(f'  action: {form.get("action")}')
        print(f'  id: {form.get("id")}')
        print(f'  class: {form.get("class")}')
        # print some inputs
        for inp in form.find_all(['input', 'textarea', 'select']):
            print(f'    -> {inp.name} name={inp.get("name")} type={inp.get("type")} class={inp.get("class")}')
except Exception as e:
    print('Error:', e)
