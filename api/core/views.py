from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import OffersSerializer


class OffersArray(object):
    def __init__(self, offers):
        self.offers = offers

@api_view(["GET"])
def matching(request, slug):
    if request.method == "GET":
        obj = OffersArray([slug, 'b002', 'c003'])
        offers = OffersSerializer(obj)
        return Response(offers.data)