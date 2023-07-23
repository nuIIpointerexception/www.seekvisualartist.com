#!/bin/bash

nohup npm run start -- --port 8001 &
bg_pid=$!
disown $bg_pid