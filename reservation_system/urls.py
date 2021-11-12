from django.urls import path

from . import views

app_name = "reservation_system"

urlpatterns = [
    path("",views.title_screen, name="title_screen"),
    path("classification",views.classification, name="classification"),
    path("cooking",views.cooking, name="cooking_screen"),
    path("details",views.details, name="details_screen"),
    path("decision",views.decision, name="decision_screen"),
    path("order_form",views.order_form, name="order_form_screen"),
    path("edit",views.edit, name="edit"),
    path("menus",views.menus, name="menus_screen"),
    path("signup", views.signup, name="signup"),
    path("signin", views.signin, name="signin"),
    path("signout", views.signout, name="signout")

]