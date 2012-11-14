from django.conf import settings

def common_data():
    data = {
        'settings': settings,
    }
    return data
