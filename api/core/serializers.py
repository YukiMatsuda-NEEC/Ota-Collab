from rest_framework import serializers

class OffersSerializer(serializers.Serializer):
    offers = serializers.ListField(
        child = serializers.IntegerField()
    )
    
class LastNumSerializer(serializers.Serializer):
    lastNum = serializers.CharField()