#!/bin/sh

build(){
    wasm-pack build --target web
}

pack(){
   rollup ./main.js --format iife --file ./pkg/bundle.js
}

stop(){
    if [ -f .serverpid ]; then
        kill $(cat .serverpid)
        rm .serverpid
        echo Server stopped
    else
        echo Could not find the server PID. Is it running?
    fi
}

build
