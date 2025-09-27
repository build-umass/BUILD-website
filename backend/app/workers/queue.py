import redis
from rq import Queue
from app.config import settings

redis_conn = redis.Redis.from_url(settings.REDIS_URL, decode_responses=True)
q_default = Queue("default", connection=redis_conn)
