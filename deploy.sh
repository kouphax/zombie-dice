#! /bin/bash
set -e

IAMHERE=$(pwd)

function finish {
  echo "Cleaning up"
  cd $IAMHERE
  echo $IAMHERE
  rm -rf deploy/
}
trap finish EXIT

rm -rf target/ deploy/
git clone git@github.com:kouphax/zombie-dice.git --branch gh-pages --single-branch deploy
boot prepare

cp -R target/ deploy/
cd deploy
git add -A
git commit -m "Automated Commit"
git push origin gh-pages
