from django.db import models


# Create your models here.
class File(models.Model):
    name = models.CharField(max_length=200, verbose_name="Nombre")
    description = models.TextField(verbose_name="Descripcion")
    file = models.FileField(upload_to="uploads", verbose_name="Archivo")

    class Meta:
        verbose_name = "Archivo"

    def __str__(self):
        return self.name


class Author(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        verbose_name = "Autor"
        verbose_name_plural = "Autores"

    def __str__(self):
        return self.name


class Work(models.Model):
    name = models.CharField(max_length=200, verbose_name="Nombre")
    authors = models.ManyToManyField(Author, verbose_name="Autores")
    description = models.TextField(verbose_name="Descripcion")
    image = models.ImageField(upload_to="pictures", verbose_name="Imagen", help_text="Imagen: 500x500")

    class Meta:
        verbose_name = "Obra"

    def __str__(self):
        return self.name


class WorkComment(models.Model):
    work = models.ForeignKey(Work,on_delete=models.CASCADE, related_name='comments')
    comment = models.TextField(verbose_name="Comentario")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Comentario Obra"


class ExpoComment(models.Model):
    # work = models.ForeignKey(Work,on_delete=models.CASCADE, related_name='comments')
    comment = models.TextField(verbose_name="Comentario")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Comentario"
