from django.conf import settings

def log( *args ):
    if settings.DEBUG:
        import logging
        logger = logging.getLogger( 'zoki' )
        logger.debug( *args )
