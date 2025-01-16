from django.db import models

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=60)
    preview = models.ImageField(upload_to='projects/')
    description = models.TextField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name="Project"
        verbose_name_plural="Projects"

    def __str__ (self):
        return self.title
