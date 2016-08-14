from django.shortcuts import render

def index(request):
    template = 'spy/index.html'
    context = {'META': True}
    print dir(request)
    return render(request, template, context)
