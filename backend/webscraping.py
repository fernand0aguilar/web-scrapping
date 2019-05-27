from api.models import Product

from bs4 import BeautifulSoup
import urllib.request

from re import sub
from decimal import Decimal

try:
    url = "http://nerdstore.com.br/categoria/especiais/game-of-thrones/"
    user_agent = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.7)Gecko/2009021910 Firefox/3.0.7'
    headers = {
        'User-Agent': user_agent,
    }
    request = urllib.request.Request(url, None, headers)
    response = urllib.request.urlopen(request)
    soup = BeautifulSoup(response, 'html.parser')
    allProducts = soup.find_all("li", {"class": "product"})
    for product in allProducts:
        title = product.find('h2', {
            "class": "woocommerce-loop-product__title"
        }).string
        url = product.find('img').get('src')
        price = product.find('span', {"class": "price"}).get_text().split()

        if(len(price) > 1):
            priceNotFormated = price.pop()
        else:
            priceNotFormated = price

        priceNotFormated = price.pop()
        priceFormated = Decimal(sub(r'[^\d.]', '', priceNotFormated))
        newProduct = Product(title=title, url=url, price=priceFormated)
        print("Created new product", newProduct)
        newProduct.save()
except:
    print("An error ocurred on webscrapping")
