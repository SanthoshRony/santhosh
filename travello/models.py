#travello/models.py
from django.db import models

# Create your models here.
class describe(models.Model):
    
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    content = models.TextField()
    cost = models.IntegerField()
    img = models.ImageField(upload_to='images')
    final = models.IntegerField()
    


# class Car(models.Model):
#     first_name = models.CharField(max_length=100)
#     last_name = models.CharField(max_length=100)
#     password = models.CharField(max_length=255)  # Store hashed password, 255 is a common length
#     phone = models.CharField(max_length=15)  # Phone number with optional blank/null


class Cars(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    password = models.CharField(max_length=255)  # Store hashed password, 255 is a common length
    phone = models.CharField(max_length=15)  # Phone number with optional blank/null
