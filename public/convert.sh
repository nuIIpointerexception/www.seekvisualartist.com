#!/bin/bash

input_video="hero-backup.mp4"
output_directory="frames"
output_apng="hero.apng"
frame_rate=30

# Step 1: Convert video to frames using FFmpeg
if [ ! -d "$output_directory" ]; then
    mkdir "$output_directory"
fi

ffmpeg -i "$input_video" -vf "fps=$frame_rate" -compression_level 10 "$output_directory/frame_%04d.png"

# Step 2: Create APNG-like file (sequence of PNG images) using FFmpeg
ffmpeg -framerate $frame_rate -i "$output_directory/frame_%04d.png" -plays 0 "$output_apng"

# Step 3: Remove frames directory
# rm -rf "$output_directory"

echo "APNG conversion completed successfully!"
