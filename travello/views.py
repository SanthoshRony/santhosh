#veiw.py
from django.shortcuts import render
from .models import describe
# Create your views here.

def index(request):
    return render(request,'index.html')