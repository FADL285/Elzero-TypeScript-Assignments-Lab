#!/bin/bash

# shellcheck disable=SC2162

read -p "Enter folder name (default: assignment): " folder_name

if [ -z "$folder_name" ]; then
  folder_name="assignment"
fi

read -p "Enter the range of assignments (e.g. 1-6): " assignments_range

read -p "Create src folder? (y/n) - default is true : " create_src

# Check if create_src is y or yes (case insensitive) and set create_src to true else set it to false
if [[ "$create_src" =~ ^[Nn]$ ]]; then
  create_src=false
else
  create_src=true # Default value
fi

start=$(echo "$assignments_range" | cut -d '-' -f 1)
end=$(echo "$assignments_range" | cut -d '-' -f 2)

for i in $(seq "$start" "$end"); do
  folder="${folder_name}-$i"
  mkdir -p "$folder"
  cd "$folder" || exit
  echo "-------------- 🚀 Initializing $folder... 🏗️⚙️⚙ 🚀 ---------------"
  pnpm init
  pnpm add -D typescript
  pnpm tsc --init
  if [ "$create_src" = true ]; then
    mkdir src
    touch src/index.ts
    echo "console.log('Hello World! 🌎')" > src/index.ts
    sed -i 's|// "rootDir": "./"|"rootDir": "./src"|' tsconfig.json
    sed -i 's|// "outDir": "./"|"outDir": "./dist"|' tsconfig.json
    sed -i 's#// "noImplicitAny": true,#"noImplicitAny": true,#' tsconfig.json
  fi
  echo "-------------- 🚀 Initializing the $folder is done 💫✅ 🚀 ---------------"
  cd ..
done
