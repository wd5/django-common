from django.db import models
from django.contrib.auth.models import User
from django.utils.html import strip_tags
from django.conf import settings

from mptt.models import MPTTModel, TreeForeignKey
from tinymce import models as tinymce_models
from slugify import slugify
from tagging.fields import TagField
from tagging.models import Tag
from urlparse import urlparse

from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill, Adjust, SmartResize, ResizeToFit


# Create your models here.
if 'south' in settings.INSTALLED_APPS:
    from south.modelsinspector import add_introspection_rules
    add_introspection_rules( [], ["^tinymce\.models.\HTMLField"] )

class CommonCategory( MPTTModel ):
    title = models.CharField( max_length = 100 )
    parent = TreeForeignKey( 'self', null = True, blank = True, related_name = 'children' )
    order = models.IntegerField( blank = True, default = 999, db_index = True )
#    order = models.IntegerField( default = 99, db_index = True )

    class Meta:
        abstract = True
#        ordering = ['order', 'title']

    class MPTTMeta:
        order_insertion_by = ['title']

    def __unicode__( self ):
        return self.title

    def slug( self ):
        return slugify( self.title )

class CommonPost( models.Model ):
    title = models.CharField( max_length = 200 )
    content = tinymce_models.HTMLField()
    author = models.ForeignKey( User, related_name = "%(app_label)s_%(class)s_related" )
    date_add = models.DateTimeField( auto_now_add = True )
    date_edit = models.DateTimeField( auto_now = True )
    status = models.CharField( max_length = 15, choices = settings.STATUS_CHOICES, default = 'active', db_index = True )
    source = models.URLField( blank = True, null = True )
    tags = TagField()

    class Meta:
        abstract = True
        ordering = ['pk']

    def __unicode__( self ):
        return self.title

    def slug( self ):
        return slugify( self.title )

    def snippet( self ):
        striped = strip_tags( self.content )

        ret = striped[:250]
        if len( striped ) > 250:
            ret + '...'

        return ret

    def hostname( self ):
        o = urlparse( self.source )
        return o.hostname


class CommonPostImage( models.Model ):
    icon = ImageSpecField( [
            Adjust( contrast = 1.2, sharpness = 1.1 ),
            ResizeToFill( 50, 50 )
        ],
        image_field = 'image',
#        format = 'JPEG',
        options = {
            'quality': 90,
            'progressive':True,
        },
    )
    x50 = ImageSpecField( [
            Adjust( contrast = 1.2, sharpness = 1.1 ),
            ResizeToFit( 50, 50 )
        ],
        image_field = 'image',
#        format = 'JPEG',
        options = {
            'quality': 90,
            'progressive':True,
        },
    )
    x100 = ImageSpecField( [
            Adjust( contrast = 1.2, sharpness = 1.1 ),
            ResizeToFit( 100, 100 )
        ],
        image_field = 'image',
#        format = 'JPEG',
        options = {
            'quality': 90,
            'progressive':True,
        }
    )
    thumbnail = ImageSpecField( [
            Adjust( contrast = 1.2, sharpness = 1.1 ),
            ResizeToFit( 150, 150 )
        ],
        image_field = 'image',
#        format = 'JPEG',
        options = {
            'quality': 90,
            'progressive':True,
        }
    )
    x150 = ImageSpecField( [
            Adjust( contrast = 1.2, sharpness = 1.1 ),
            ResizeToFit( 150, 150 )
        ],
        image_field = 'image',
        options = {
            'quality': 90,
            'progressive':True,
        }
    )
    x250 = ImageSpecField( [
            Adjust( contrast = 1.2, sharpness = 1.1 ),
            ResizeToFit( 250, 250 )
        ],
        image_field = 'image',
#        format = 'JPEG',
        options = {
            'quality': 90,
            'progressive':True,
        }
    )
    x450 = ImageSpecField( [
            Adjust( contrast = 1.2, sharpness = 1.1 ),
            ResizeToFit( 450, 450 )
        ],
        image_field = 'image',
#        format = 'JPEG',
        options = {
            'quality': 90,
            'progressive':True,
        }
    )
    x650 = ImageSpecField( [
            Adjust( contrast = 1.2, sharpness = 1.1 ),
            ResizeToFit( 650, 650 )
        ],
        image_field = 'image',
#        format = 'JPEG',
        options = {
            'quality': 90,
            'progressive':True,
        }
    )
    description = models.CharField( max_length = 200, blank = True, )

    class Meta:
        abstract = True

