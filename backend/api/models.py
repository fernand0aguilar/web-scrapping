from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=200)
    url = models.URLField()
    price = models.FloatField()

    def __str__(self):
        """A string representation of the model."""
        return self.title
