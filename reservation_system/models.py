from django.utils import timezone
from django.db import models

# Create your models here.

class Order(models.Model):
    name = models.TextField()
    mail = models.TextField()
    menu = models.TextField()
    
    order_time = models.DateTimeField(default=timezone.now)