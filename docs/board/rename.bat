@echo off
setlocal enabledelayedexpansion

rem バッチファイルがあるフォルダをカレントディレクトリに設定
cd /d "%~dp0"

rem "CT43-"から始まるjpgファイルを対象に処理を行う
for %%F in (CT43-*.jpg) do (
    rem 拡張子を除いた元のファイル名を取得
    set "filename=%%~nF"
    
    rem 最初の8文字（例: CT43-002）だけを切り出す
    set "newname=!filename:~0,8!"
    
    rem 元の名前が8文字より長い（余分な文字がついている）場合のみリネームを実行
    if not "!filename!"=="!newname!" (
        ren "%%F" "!newname!.jpg"
    )
)

echo リネーム処理が完了しました！
pause