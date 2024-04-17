from django.urls import path
from .views import *

urlpatterns = [
    path('companies/', c_list),
    path('companies/<int:company_id>/', c_detail),
    path('companies/<int:company_id>/vacancies/', c_vacancies),
    path('vacancies/', v_list),
    path('vacancies/<int:vacancy_id>/', v_detail),
    path('vacancies/top10_v/', top10_v),
]