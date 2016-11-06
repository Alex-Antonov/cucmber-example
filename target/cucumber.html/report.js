$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("logging.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: ru"
    }
  ],
  "line": 3,
  "name": "Проверка логгирования",
  "description": "",
  "id": "проверка-логгирования",
  "keyword": "Функционал"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Удачное и неудачное логгирование",
  "description": "",
  "id": "проверка-логгирования;удачное-и-неудачное-логгирование",
  "type": "scenario_outline",
  "keyword": "Структура сценария"
});
formatter.step({
  "line": 5,
  "name": "я захожу на тестируемый сайт",
  "keyword": "Допустим "
});
formatter.step({
  "line": 6,
  "name": "попытаться залогиниться с \u003cтип\u003e данными",
  "keyword": "Если "
});
formatter.step({
  "line": 7,
  "name": "логирование пройдет \u003cстатус\u003e",
  "keyword": "То "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "проверка-логгирования;удачное-и-неудачное-логгирование;",
  "rows": [
    {
      "cells": [
        "тип",
        "статус"
      ],
      "line": 10,
      "id": "проверка-логгирования;удачное-и-неудачное-логгирование;;1"
    },
    {
      "cells": [
        "валидными",
        "удачно"
      ],
      "line": 11,
      "id": "проверка-логгирования;удачное-и-неудачное-логгирование;;2"
    },
    {
      "cells": [
        "инвалидными",
        "неудачно"
      ],
      "line": 12,
      "id": "проверка-логгирования;удачное-и-неудачное-логгирование;;3"
    }
  ],
  "keyword": "Примеры"
});
formatter.scenario({
  "line": 11,
  "name": "Удачное и неудачное логгирование",
  "description": "",
  "id": "проверка-логгирования;удачное-и-неудачное-логгирование;;2",
  "type": "scenario",
  "keyword": "Структура сценария"
});
formatter.step({
  "line": 5,
  "name": "я захожу на тестируемый сайт",
  "keyword": "Допустим "
});
formatter.step({
  "line": 6,
  "name": "попытаться залогиниться с валидными данными",
  "matchedColumns": [
    0
  ],
  "keyword": "Если "
});
formatter.step({
  "line": 7,
  "name": "логирование пройдет удачно",
  "matchedColumns": [
    1
  ],
  "keyword": "То "
});
formatter.match({
  "location": "LoginSteps.given()"
});
formatter.result({
  "duration": 14882931756,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "валидными",
      "offset": 26
    }
  ],
  "location": "LoginSteps.whenStartSerarching(String)"
});
formatter.result({
  "duration": 1327070775,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "удачно",
      "offset": 20
    }
  ],
  "location": "LoginSteps.then(String)"
});
formatter.result({
  "duration": 8103128656,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Удачное и неудачное логгирование",
  "description": "",
  "id": "проверка-логгирования;удачное-и-неудачное-логгирование;;3",
  "type": "scenario",
  "keyword": "Структура сценария"
});
formatter.step({
  "line": 5,
  "name": "я захожу на тестируемый сайт",
  "keyword": "Допустим "
});
formatter.step({
  "line": 6,
  "name": "попытаться залогиниться с инвалидными данными",
  "matchedColumns": [
    0
  ],
  "keyword": "Если "
});
formatter.step({
  "line": 7,
  "name": "логирование пройдет неудачно",
  "matchedColumns": [
    1
  ],
  "keyword": "То "
});
formatter.match({
  "location": "LoginSteps.given()"
});
formatter.result({
  "duration": 13450070731,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//form/input[@name\u003d\u0027email\u0027]\"}\nCommand duration or timeout: 10.06 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027littlebro\u0027, ip: \u0027192.168.0.5\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d45.4.0, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 5a258292-ef35-4689-861e-e58995d1a767\n*** Element info: {Using\u003dxpath, value\u003d.//form/input[@name\u003d\u0027email\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:408)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat my.antonov.web.pages.AbstractPage.$(AbstractPage.java:33)\r\n\tat my.antonov.web.pages.impl.LoginPage.openLoginPage(LoginPage.java:24)\r\n\tat my.antonov.tests.steps.LoginSteps.given(LoginSteps.java:26)\r\n\tat ✽.Допустим я захожу на тестируемый сайт(logging.feature:5)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//form/input[@name\u003d\u0027email\u0027]\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027littlebro\u0027, ip: \u0027192.168.0.5\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/alex/AppData/Local/Temp/anonymous3466662960023719482webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\r\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///C:/Users/alex/AppData/Local/Temp/anonymous3466662960023719482webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:625)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "инвалидными",
      "offset": 26
    }
  ],
  "location": "LoginSteps.whenStartSerarching(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "неудачно",
      "offset": 20
    }
  ],
  "location": "LoginSteps.then(String)"
});
formatter.result({
  "status": "skipped"
});
});