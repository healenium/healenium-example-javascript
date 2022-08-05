# JavaScript Example with Healenium

[![Docker Pulls](https://img.shields.io/docker/pulls/healenium/hlm-backend.svg?maxAge=25920)](https://hub.docker.com/u/healenium)
[![License](https://img.shields.io/badge/license-Apache-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)

This repository contains automation tests on JavaScript using Healenium.

[1. Start Healenium components](#1-start-healenium-components)
* [Healenium with Selenoid](#run-healenium-with-selenoid)
* [Healenium with Selenium-Grid](#run-healenium-with-selenium-grid)

[2. Configuration RemoteWebDriver for Healenium](#2-configuration-remotewebdriver-for-healenium)

[3. Run tests using Jasmine](#3-run-tests-using-jasmine)

[4. Monitoring tests running](#4-monitoring-tests-running)

## How to start

### 1. Start Healenium components

Go into healenium folder

```sh
cd healenium
``` 

#### Run Healenium with Selenoid:

> Note: `browsers.json` consists of target browsers and appropriate versions.
> Before run healenium you have to manually pull selenoid browser docker images with version specified in browsers.json

Example pull selenoid chrome image:
```sh
docker pull selenoid/vnc:chrome_102.0
```
Full list of browser images you can find [here](https://hub.docker.com/u/selenoid)

Run healenium with Selenoid:
```sh
docker-compose up -d
```

#### Run Healenium with Selenium-Grid:
```sh
docker-compose -f docker-compose-selenium-grid.yaml up -d
```

<b>ATTENTION</b>

Verify the next images are <b>Up</b> and <b>Running</b>
- `postgres-db` (PostgreSQL database to store etalon selector / healing / report)
- `hlm-proxy` (Proxy client request to Selenium server)
- `hlm-bacand` (CRUD service)
- `selector imitator` (Convert healed locator to convenient format)
- `selenoid`/`selenium-grid` (Selenium server)

### 2. Configuration RemoteWebDriver for Healenium

To run using Healenium create RemoteWebDriver with URL ```http://<remote webdriver host>:8085```:

```javascript
    const selenium = require("selenium-webdriver");
    const NODE_URL = "http://localhost:8085";

    let args = [
        "--no-sandbox",
        "--disable-dev-shm-usage"
    ];

    let chromeCapabilities = selenium.Capabilities.chrome()
        .set('chromeOptions', { args })
        .set("enableVNC", true);

    let builder = new selenium.Builder()
        .forBrowser('chrome')
        .withCapabilities(chromeCapabilities);

    let driver = await builder.usingServer(NODE_URL).build();
```

### 3. Run tests using Jasmine

Add Jasmine to your package.json

```sh
npm install --save-dev jasmine
```

Initialize Jasmine in your project

```sh
npx jasmine init
```

Set jasmine as your test script in your package.json

```sh
"scripts": { "test": "jasmine" }
```

Run your tests

```sh
npm test
```

### 4. Monitoring tests running

You can monitor tests running if you using Healenium with Selenoid plus Selenoid Ui, go to :<br/>
```sh
http://localhost:8080
```

## Community / Support

* [Telegram chat](https://t.me/healenium)
* [YouTube Channel](https://www.youtube.com/channel/UCsZJ0ri-Hp7IA1A6Fgi4Hvg)
