#! /bin/bash
envsubst < /app/print_service/conf/app.yaml > /app/print_service/conf/app.yaml.release && mv -f /app/print_service/conf/app.yaml.release /app/print_service/conf/app.yaml
cd /app/print_service && ./print_service > ./logs/output.log 2>&1