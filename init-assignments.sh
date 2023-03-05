#!/bin/bash

# shellcheck disable=SC2162

read -p "Enter folder name (default: assignment): " folder_name

if [ -z "$folder_name" ]; then
  folder_name="assignment"
fi

read -p "Enter the range of assignments (e.g. 1-6): " assignments_range

read -p "Create src folder? (y/n): " create_src

# Check if create_src is y or yes (case insensitive) and set create_src to true else set it to false
if [[ "$create_src" =~ ^[Yy]$ ]]; then
  create_src=true
else
  create_src=false
fi

start=$(echo "$assignments_range" | cut -d '-' -f 1)
end=$(echo "$assignments_range" | cut -d '-' -f 2)

for i in $(seq "$start" "$end"); do
  folder="${folder_name}-$i"
  mkdir -p "$folder"
  cd "$folder" || exit
  echo "Initializing $folder..."
  pnpm init
  pnpm add -D typescript
  pnpm tsc --init
  if [ "$create_src" = true ]; then
    mkdir src
  fi
  cd ..
done
