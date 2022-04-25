from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework import viewsets
from appExpo.serializers import *
from rest_framework.response import Response
from appExpo.models import *


class WorksViewSet(viewsets.ModelViewSet):
    """
    API endpoint for player games
    """
    queryset = Work.objects.all()
    serializer_class = WorkSerializer


class FilesViewSet(viewsets.ModelViewSet):
    """
    API endpoint for player games
    """
    queryset = File.objects.all()
    serializer_class = FileSerializer


class ExpoCommentsViewSet(viewsets.ModelViewSet):
    """
    API endpoint for player games
    """
    queryset = ExpoComment.objects.all().order_by("created_at")
    serializer_class = ExpoCommentSerializer