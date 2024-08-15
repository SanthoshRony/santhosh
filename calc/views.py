#views.py
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home (request):
    res = 'rony'
    return render(request, 'home.html',{'name':res});
def add(request):
    val1 = request.POST['num1']
    val2 = request.POST['num2']
    res = int(val1) + int(val2)
    return render(request,'result.html',{'Result':res})