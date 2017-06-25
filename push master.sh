#!/bin/bash  
git add .  
read -p "Commit description: " desc  
git commit -m "$desc"  
# -u sets this branch to be default for git push
git push -u origin master