#! /bin/bash
set -e

rm -rf target/
git clone git@github.com:kouphax/zombie-dice.git --branch gh-pages --single-branch target
boot prepare

cd target
git add -A
git commit -m "Automated Commit"
git push origin gh-pages
cd ..
rm -rf target
