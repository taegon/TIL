REM build
cmd /c npm run docs:build

REM navigate into the build output directory
cd docs/.vuepress/dist

REM if you are deploying to a custom domain
REM echo 'www.example.com' > CNAME


git init
git add -A
git commit -m 'deploy'

REM if you are deploying to https://<USERNAME>.github.io
REM git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

REM if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:taegon/TIL.git master:gh-pages

REM cd -
REM cd ../../../
pause