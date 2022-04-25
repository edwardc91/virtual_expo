from django.contrib import admin
from appExpo import models


# Register your models here.
@admin.register(models.File)
class FileAdmin(admin.ModelAdmin):
    list_display = ('name', 'file')


class CommentInline(admin.TabularInline):
    model = models.WorkComment
    extra = 1


@admin.register(models.ExpoComment)
class ExpoCommentAdmin(admin.ModelAdmin):
    list_display = ('created_at', 'comment')


@admin.register(models.Work)
class WorkAdmin(admin.ModelAdmin):
    list_display = ('name',)
    filter_horizontal = ('authors',)
    inlines = [CommentInline,]


@admin.register(models.Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('name',)


admin.site.site_header = "Pagina Web Dentro del Juego"
