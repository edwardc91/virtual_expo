"""virtual_expo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from django.conf.urls.static import static
from virtual_expo import settings
from django.views.generic import TemplateView
from appExpo.viewsapi.api_views import *
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", TemplateView.as_view(template_name="index.html")),
]

# urls for api - django rest framework

urlpatterns += [url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')), ]

router = DefaultRouter()
router.register(r'api/works', WorksViewSet, 'works')
router.register(r'api/files', FilesViewSet, 'files')
router.register(r'api/expo_comments', ExpoCommentsViewSet, 'expo_comments')

urlpatterns += router.urls

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [url(r'^(?:.*)/?$', TemplateView.as_view(template_name="index.html")), ]
