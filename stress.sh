#!/bin/bash
for i in {1..1000}; do
    curl -s http://localhost:8080 &
    sleep $1
done