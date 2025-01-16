from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import Project
from .serializers import ProjectSerializer


# Create your views here.
class ProjectListView(ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    