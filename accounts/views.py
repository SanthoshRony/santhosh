from django.shortcuts import render, redirect
from travello.models import Cars
from django.contrib import messages, auth

#login
def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = auth.authenticate(request, username=username, password=password)

        if user is not None:
            auth.login(request, user)
            return redirect('/')
        else:
            messages.info(request, "Invalid Credentials, If you don't have credits Please register!")
            return redirect('login')
    return render(request, 'login.html')



#register
def register(request):

    if request.method == 'POST':
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')
        phone = request.POST.get('phone')

        if password1 == password2:
            if Cars.objects.filter(phone=phone).exists():
                messages.info(request, 'User with this phone number already exists.')
                return redirect('register')
            else:
                # Create a new user in the dbase
                user = Cars.objects.create(
                    first_name=first_name,
                    last_name=last_name,
                    password=password1, 
                    phone=phone
                )
                user.save()
                return redirect('login')

        else:
            messages.info(request, "Passwords do not match.")
            return redirect('register')

    return render(request, 'register.html')


#logout
def logout(request):
    auth.logout(request)
    return redirect('/')



#trainer
def trainer(request):
    return render(request, 'trainer.html')

