from django.contrib.auth.models import User
from .models import Order
from django.shortcuts import redirect, render
from django.contrib.auth import authenticate, login, logout
from django.core import serializers
# from django.contrib.auth.decorators import login_required
from django.core.mail import BadHeaderError, send_mail
import json


# Create your views here.

def title_screen(request):
    return render(request, "reservation_system/index.html")

def classification(request):
    return render(request, "reservation_system/classification.html")

def cooking(request):
    return render(request, "reservation_system/cooking.html")

def details(request):
    return render(request, "reservation_system/details.html")

def decision(request):
    return render(request, "reservation_system/decision.html")

def order_form(request):
    if request.method == "POST":
        if "edit" in request.POST:
            return redirect("reservation_system:edit")
            # return render(request, "reservation_system/edit.html")
        if "buy" in request.POST:
            if not request.user.is_authenticated:
                return redirect("reservation_system:signin")
            # elif not request.POST["order_list"]:
            #     return redirect("reservation_system:order_form")
            else:
                user = request.user
                text = request.POST["order_list"]
                if text == "":
                    return redirect("reservation_system:classification")
                subject = "ももからこーたろー予約"
                from_email = "momokara@information"
                message = ""
                recipient_list = [user.email]
                # print(user.username, user.email, message
                
                add = ""
                k = False
                t = False
                for txt in text:
                    if txt not in ["[","]","{","}",":",'"']:
                        add += txt
                    if "name" in add:
                        add = "商品名:"
                        k = True
                    if "cnt" in add:
                        add = " 数量:"
                        t = True

                    if k and txt == "]":
                        message += add
                        add = ""
                        k = False
                    if t and txt == ",":
                        message += add
                        message += "\n"
                        add = ""
                        t = False
                    
                # print(message)

                send_mail(subject, message, from_email, recipient_list)
                

                return redirect("reservation_system:classification")

    return render(request, "reservation_system/order_form.html")

def menus(request):
    return render(request, "reservation_system/menus.html")

def edit(request):
    return render(request, "reservation_system/edit.html")

def signup(request):
    if request.method == 'POST':
        userName = request.POST["inputUserName"] 
        email = request.POST["inputEmail"]
        password = request.POST["inputPassword"]

        if not (userName and email and password):
            return render(request, "reservation_system/signup.html", {"error": "空白を埋めてください"})

        else:
            User.objects.create_user(userName, email, password)
            user = authenticate(request, username=userName, password=password)
            login(request, user)
            return render(request, "reservation_system/classification.html")
    
    return render(request, "reservation_system/signup.html")

def signin(request):
    if request.method == "POST":
        userName = request.POST["username"]
        password = request.POST["password"]

        user = authenticate(request, username=userName, password=password)

        if user is not None:
            login(request, user)
            # return redirect('classification')
            return redirect("reservation_system:classification")
        else:
            return render(request, "reservation_system/signin.html", {"error": "入力内容が間違っています"})

    return render(request, "reservation_system/signin.html")

def signout(request):
    logout(request)
    return redirect("reservation_system:classification")