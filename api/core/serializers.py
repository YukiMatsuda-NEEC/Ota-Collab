from rest_framework import serializers

class OffersSerializer(serializers.Serializer):
    offers = serializers.ListField(
        child = serializers.CharField(max_length=30)
    )
    
class LastNumSerializer(serializers.Serializer):
    lastNum = serializers.CharField()