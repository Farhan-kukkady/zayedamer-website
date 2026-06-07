$BASE_URL = "https://zayedamer.lovable.app"
$ASSET_DIRS = "src\assets\img", "src\assets"
$OUT_DIR = "public\images"

New-Item -ItemType Directory -Force -Path $OUT_DIR | Out-Null
Write-Host "Output folder: $OUT_DIR"

$total = 0
$success = 0
$failed = New-Object System.Collections.Generic.List[string]

foreach ($dir in $ASSET_DIRS) {
    if (-not (Test-Path $dir)) { continue }
    $jsonFiles = Get-ChildItem -Path $dir -Filter "*.asset.json" -File
    foreach ($file in $jsonFiles) {
        $json = Get-Content $file.FullName -Raw | ConvertFrom-Json
        $assetUrl = $json.url
        $filename = $json.original_filename
        if (-not $assetUrl -or -not $filename) { continue }
        $fullUrl = "$BASE_URL$assetUrl"
        $outPath = Join-Path $OUT_DIR $filename
        $total++
        Write-Host "Downloading: $filename"
        try {
            Invoke-WebRequest -Uri $fullUrl -OutFile $outPath -UseBasicParsing -TimeoutSec 30
            $json.url = "/images/$filename"
            $json | ConvertTo-Json -Depth 5 | Set-Content $file.FullName -Encoding UTF8
            $success++
            Write-Host "  OK: $filename"
        } catch {
            Write-Host "  FAILED: $filename - $_"
            $failed.Add($filename)
        }
    }
}

Write-Host ""
Write-Host "Downloaded: $success / $total"
if ($failed.Count -gt 0) {
    Write-Host "Failed:"
    foreach ($f in $failed) { Write-Host "  - $f" }
}
Write-Host "Done!"
