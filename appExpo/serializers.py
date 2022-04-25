from .models import Work, File, ExpoComment
from rest_framework import serializers


class WorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Work
        fields = ('id', 'name', 'authors', 'description', 'image')
        depth = 1


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = ('id', 'name', 'description', 'file')
        depth = 1


class ExpoCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExpoComment
        fields = ('id', 'comment', 'created_at')
        depth = 1
