$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/update.feature");
formatter.feature({
  "name": "update for first name",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "test update is successful",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@update"
    }
  ]
});
formatter.step({
  "name": "click on information button",
  "keyword": "When "
});
formatter.step({
  "name": "user delete old first name",
  "keyword": "And "
});
formatter.step({
  "name": "user writes \u003cnewfirstname\u003eand\u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "click to pic message",
  "keyword": "And "
});
formatter.step({
  "name": "click to pic confidentiality",
  "keyword": "And "
});
formatter.step({
  "name": "click to save button",
  "keyword": "And "
});
formatter.step({
  "name": "update new first name is successful",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "newfirstname",
        "password"
      ]
    },
    {
      "cells": [
        "dorsafaa",
        "Dodo27948.!"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "teststeps.steps.login_page_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters dorsafothmen12@gmail.comandDodo27948.!",
  "keyword": "When "
});
formatter.match({
  "location": "teststeps.steps.user_enters_email_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: result.webdriverValue.value list is missing or empty in Runtime.callFunctionOn response\n  (Session info: chrome\u003d119.0.6045.106)\n  (Driver info: chromedriver\u003d118.0.5993.70 (e52f33f30b91b4ddfad649acddc39ab570473b86-refs/branch-heads/5993@{#1216}),platform\u003dWindows NT 10.0.19045 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 40 milliseconds\nBuild info: version: \u00272.50.1\u0027, revision: \u0027d7fc91b29de65b790abb01f3ac5f7ea2191c88a7\u0027, time: \u00272016-01-29 11:11:26\u0027\nSystem info: host: \u0027TALAN-11UE63J\u0027, ip: \u002710.70.0.172\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.20\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:50045}, webauthn:extension:credBlob\u003dtrue, acceptInsecureCerts\u003dfalse, fedcm:accounts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, unexpectedAlertBehaviour\u003dignore, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d118.0.5993.70 (e52f33f30b91b4ddfad649acddc39ab570473b86-refs/branch-heads/5993@{#1216}), userDataDir\u003dC:\\Users\\dothmen\\AppData\\Local\\Temp\\scoped_dir2880_1886562581}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d119.0.6045.106, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, webauthn:extension:minPinLength\u003dtrue, webauthn:extension:prf\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 5b2bfe2d4666365b844fe1ecacf8e987\n*** Element info: {Using\u003dxpath, value\u003d//input[@class\u003d\u0027form-control\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat testpages.logintestpage.enterusername(logintestpage.java:18)\r\n\tat teststeps.steps.user_enters_email_password(steps.java:54)\r\n\tat ✽.user enters dorsafothmen12@gmail.comandDodo27948.!(file:///C:/Users/dothmen/Desktop/Nouveau%20dossier/jenkins/Act-5.5/ecommece/src/test/resources/Features/update.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "clicks on login  button",
  "keyword": "And "
});
formatter.match({
  "location": "teststeps.steps.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "And "
});
formatter.match({
  "location": "teststeps.steps.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "test update is successful",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@update"
    }
  ]
});
formatter.step({
  "name": "click on information button",
  "keyword": "When "
});
formatter.match({
  "location": "teststeps.steps.click_on_information_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user delete old first name",
  "keyword": "And "
});
formatter.match({
  "location": "teststeps.steps.user_delete_old_first_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user writes dorsafaaandDodo27948.!",
  "keyword": "When "
});
formatter.match({
  "location": "teststeps.steps.user_writes_newfirstname_and_Password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click to pic message",
  "keyword": "And "
});
formatter.match({
  "location": "teststeps.steps.click_to_pic_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click to pic confidentiality",
  "keyword": "And "
});
formatter.match({
  "location": "teststeps.steps.click_to_pic_confidentiality()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click to save button",
  "keyword": "And "
});
formatter.match({
  "location": "teststeps.steps.click_to_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "update new first name is successful",
  "keyword": "Then "
});
formatter.match({
  "location": "teststeps.steps.update_new_first_name_is_successful()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});