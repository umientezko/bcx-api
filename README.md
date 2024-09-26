# ⚙️ Fayrix Engine

![Rust](https://img.shields.io/badge/rust-1.76-orange)
![WASM](https://img.shields.io/badge/wasm-ready-blue)
![Docker](https://img.shields.io/badge/docker-supported-2496ED)

**fast simulation engine for procedural sandbox strategy games**

## overview

Fayrix Engine lets you simulate AI-driven sandbox battles in browser or CLI mode.

👉 demo: [fayrix.dev/demo](https://fayrix.dev/demo)

## quick start

```bash
# install cli
npm install -g fayrix-engine

# generate a new world
fayrix init world1

# run simulation
fayrix run --map random --speed 3x
```

## features

*  **AI scripting** (JavaScript)
*  **real-time tick engine**
*  **procedural world generation**
*  **web canvas renderer**
*  **replay & analytics dashboard**

docs: [docs.fayrix.dev](https://docs.fayrix.dev)

## api usage

```javascript
import { Engine } from 'fayrix-engine'

const game = new Engine({
  seed: 42,
  bots: ['./botA.js', './botB.js']
})

game.on('update', state => console.log(state.tick))
game.start()
```

## roadmap

* [x] wasm build
* [ ] distributed matches
* [ ] native app

MIT © [fayrix.dev](https://fayrix.dev)
