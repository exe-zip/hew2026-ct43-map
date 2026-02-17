@echo off
setlocal enabledelayedexpansion

:: --- 設定項目 ---
:: 元となる画像ファイル名（同じフォルダに置いてください）
set "source=origin.jpg"

:: 出展番号の接頭辞
set "prefix=CT43-"
:: ----------------

echo 画像の複製を開始します...

for /L %%i in (1, 1, 120) do (
    :: 数字を3桁（001形式）に揃える処理
    set "num=00%%i"
    set "num=!num:~-3!"
    
    :: ファイルをコピー
    copy "%source%" "%prefix%!num!.jpg" > nul
)

echo 完了しました！120枚の画像を作成しました。
pause