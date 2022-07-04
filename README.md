# JavaScript Example with Healenium
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)<br/>
This repository contains automation tests on JavaScript using Healenium.

## How to start
### 1. Start Healenium Proxy from infra folder
```cd infra``` <br/><br/>
To work with Healenium and Selenoid plus Selenoid Ui, use:<br/>

Create <b>/db/sql</b> folder on the same level in your project.<br/>
<pre>
    Add init.sql file into ./db/sql/init.sql folder in your project via command:

    <b>$ curl https://raw.githubusercontent.com/healenium/healenium-client/master/example/init.sql -o init.sql</b>

    Example project structure:

        your_project_name (root)
            |__infra
                |__db
                    |__sql
                        |__init.sql
</pre>
<pre>
    To download docker-compose.yaml file into your project use this command:

    <b>$ curl https://raw.githubusercontent.com/healenium/healenium-example-javascript/master/infra/docker-compose.yaml -o docker-compose.yaml</b>

    Additionally downlod browsers.json file into you project use this command:

    <b>curl https://raw.githubusercontent.com/healenium/healenium-example-python/master/infra/browsers.json -o browsers.json</b>

    Manually pull docker images with specific versions from browsers.json:

    <b>docker pull selenoid/vnc:chrome_102.0</b>
    <b>docker pull selenoid/vnc:chrome_101.0</b>
    <b>docker pull selenoid/vnc:firefox_101.0</b>
    <b>docker pull selenoid/vnc:chrome_100.0</b>

    Example project structure:

        your_project_name (root)
            |__infra
                |__db
                    |__sql
                        |__init.sql
                |__browsers.json
                |__docker-compose.yaml

    Command to run docker-compose.yaml

        <b>docker-compose up -d</b>

Verify the next images are <b>Up</b> and <b>Running</b>
<pre>
    * postgres:14.2-bullseye
    * healenium/hlm-backend:3.2.3
    * healenium/hlm-selector-imitator:1.1
    * healenium/hlm-proxy:1.0.0
    * healenium/hlm-selenoid:0.1.0
    * aerokube/selenoid-ui:1.10.5
</pre>
</pre>
To work with Healenium and standard Selenium hub with nodes, use:<br/>
<pre>
    To download docker-compose-selenium-v3.yaml file into your project use this command:

    <b>$ curl https://raw.githubusercontent.com/healenium/healenium-example-javascript/master/infra/docker-compose-selenium-v3.yaml -o docker-compose-selenium-v3.yaml</b>

    Example project structure:

        your_project_name (root)
            |__infra
                |__db
                    |__sql
                        |__init.sql
                |__docker-compose-selenium-v3.yaml

    Command to run docker-compose-selenium-v3.yaml

        <b>docker-compose -f docker-compose-selenium-v3.yaml up -d</b>
</pre>

### 2. Create RemoteWebDriver for Healenium-Proxy
To run using Healenium create RemoteWebDriver with URL ```http://<remote webdriver host>:8085```:

`let opts = new chrome.Options();
opts.addArguments('no-sandbox')
driver = await new webdriver.Builder()
.withCapabilities(webdriver.Capabilities.chrome())
.usingServer('http://localhost:8085')
.setChromeOptions(opts)
.build();`


### 3. Run tests using Jasmine
Add Jasmine to your package.json

`npm install --save-dev jasmine`

Initialize Jasmine in your project

`npx jasmine init`

Set jasmine as your test script in your package.json

`"scripts": { "test": "jasmine" }`

Run your tests

`npm test`

### 4. Monitoring results
You can monitor tests running if you using Healenium with Selenoid plus Selenoid Ui, use:<br/>
<pre>
    go to <b>http://localhost:8080</b>
</pre>
