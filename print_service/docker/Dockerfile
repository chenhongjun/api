FROM debian:11.7-slim

RUN apt-get update
RUN apt-get install -y gettext
RUN mkdir -p /app/print_service/conf && mkdir -p /app/print_service/logs
COPY print_service /app/print_service
COPY conf/app.yaml /app/print_service/conf/app.yaml
RUN chmod +x /app/print_service/print_service
COPY conf/run.sh /app/print_service/
RUN chmod +x /app/print_service/run.sh

CMD cd /app/print_service && ./run.sh
