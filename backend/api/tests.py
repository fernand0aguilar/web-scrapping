from django.test import TestCase
from .models import Product
# Create your tests here.


class ProductModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Product.objects.create(title="First Product", price=0)
        Product.objects.create(url="a url here", price=0)
        Product.objects.create(price=111.90)

    def test_title_content(self):
        print("Test Title Content")
        product = Product.objects.get(id=1)
        expected_object_name = f'{product.title}'
        self.assertEquals(expected_object_name, 'First Product')

    def test_url_content(self):
        print("Test URL Content")
        product = Product.objects.get(id=2)
        expected_object_url = f'{product.url}'
        self.assertEquals(expected_object_url, 'a url here')

    def test_price_content(self):
        print("Test Price Content")
        product = Product.objects.get(id=3)
        expected_object_price = product.price
        self.assertEquals(expected_object_price, 111.90)
