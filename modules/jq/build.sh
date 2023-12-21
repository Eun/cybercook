#!/bin/sh
git config --global url."https://github.com/".insteadOf git@github.com:
git config --global url."https://".insteadOf git://

git clone https://github.com/fiatjaf/jq-web.git
cd jq-web || exit 1
git submodule update --init --recursive
make
cp jq.wasm.js jq.wasm.min.js jq.wasm.wasm /out/
