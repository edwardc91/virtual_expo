from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
import appExpo.routing

application = ProtocolTypeRouter({
    # (http->django viewsapi is added by default)
    'websocket': AuthMiddlewareStack(
        URLRouter(
            appExpo.routing.websocket_urlpatterns
        )
    ),
})

