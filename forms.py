from django import forms
from django.contrib.admin.widgets import FilteredSelectMultiple
from django.utils.translation import ugettext_lazy as _


class CommonPostEditForm( forms.ModelForm ):
#    content =

    class Meta:
        abstract = True
        fields = ( 'title', 'content', 'category', 'tags', )
        exclude = ( 'status', 'author', )

    class Media:
        css = {
            'all':( 
                'admin/css/widgets.css',
                'admin/css/forms.css',
            ),
        }
        # Adding this javascript is crucial
        js = ( 
            '/admin/jsi18n/',
        )
