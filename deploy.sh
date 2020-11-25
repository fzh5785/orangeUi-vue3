rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'deploy' &&
git branch -M master &&
git remote add origin git@github.com:fzh5785/orangeUi-vue3-website.git &&
#git remote add origin git@gitee.com:fzh5785/orange-ui-vue3-website.git &&
git push -f -u origin master &&
cd ..
