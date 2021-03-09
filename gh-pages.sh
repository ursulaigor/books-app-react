git branch -D gh-pages 
git push origin --delete gh-pages
git checkout -b gh-pages && npm run build && git add -f build && git commit -m 'gh-pages' && git push origin gh-pages 
git checkout main
