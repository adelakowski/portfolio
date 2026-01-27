npm install
if ($LASTEXITCODE -eq 0) {
    npm run build
    if ($LASTEXITCODE -eq 0) {
        firebase deploy
    }
}
