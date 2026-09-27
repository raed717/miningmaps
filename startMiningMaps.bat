@echo off


echo Starting Server...
start cmd /k "code && npm run dev"

echo opening agy
start cmd /k "agy --dangerously-skip-permissions"

echo All services launched.
