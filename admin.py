from django.contrib import admin

from mptt.admin import MPTTModelAdmin

class CommonCategoryAdmin( MPTTModelAdmin ):
    list_display = ( 'title', )
    search_fields = ( 'title', )

    class Meta:
        abstract = True

class CommonPostAdmin(admin.ModelAdmin):
    filter_horizontal = ( 'category', )
    search_fields = ( 'title', )
    list_filter = ( 'date_edit', )
    list_display = ( 'title', 'author', 'date_edit', 'date_add', 'status' )

    class Meta:
        abstract = True
