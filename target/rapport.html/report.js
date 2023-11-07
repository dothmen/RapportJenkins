$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/add.feature");
formatter.feature({
  "name": "add the selected product to the cart",
  "description": "",
  "keyword": "Feature"
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
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: result.webdriverValue.value list is missing or empty in Runtime.callFunctionOn response\n  (Session info: chrome\u003d119.0.6045.106)\n  (Driver info: chromedriver\u003d118.0.5993.70 (e52f33f30b91b4ddfad649acddc39ab570473b86-refs/branch-heads/5993@{#1216}),platform\u003dWindows NT 10.0.19045 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 30 milliseconds\nBuild info: version: \u00272.50.1\u0027, revision: \u0027d7fc91b29de65b790abb01f3ac5f7ea2191c88a7\u0027, time: \u00272016-01-29 11:11:26\u0027\nSystem info: host: \u0027TALAN-11UE63J\u0027, ip: \u002710.70.0.172\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.20\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54725}, webauthn:extension:credBlob\u003dtrue, acceptInsecureCerts\u003dfalse, fedcm:accounts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, unexpectedAlertBehaviour\u003dignore, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d118.0.5993.70 (e52f33f30b91b4ddfad649acddc39ab570473b86-refs/branch-heads/5993@{#1216}), userDataDir\u003dC:\\Users\\dothmen\\AppData\\Local\\Temp\\scoped_dir20096_94543757}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d119.0.6045.106, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, webauthn:extension:minPinLength\u003dtrue, webauthn:extension:prf\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: aa356d7778319f2c818fae79b0cde0f0\n*** Element info: {Using\u003dxpath, value\u003d//input[@class\u003d\u0027form-control\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat testpages.logintestpage.enterusername(logintestpage.java:18)\r\n\tat teststeps.steps.user_enters_email_password(steps.java:54)\r\n\tat ✽.user enters dorsafothmen12@gmail.comandDodo27948.!(file:///C:/Users/dothmen/Desktop/Nouveau%20dossier/jenkins/Act-5.5/ecommece/src/test/resources/Features/add.feature:5)\r\n",
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
  "name": "check add the selected product to the cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@add"
    }
  ]
});
formatter.step({
  "name": "when the user clicks on the product he wants to buy",
  "keyword": "When "
});
formatter.match({
  "location": "teststeps.steps.when_the_user_clicks_on_the_product_he_wants_to_buy()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on add to Cart",
  "keyword": "And "
});
formatter.match({
  "location": "teststeps.steps.click_on_add_to_Cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Product added to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "teststeps.steps.product_added_to_cart_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/addcomment.feature");
formatter.feature({
  "name": "add a comment",
  "description": "",
  "keyword": "Feature"
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
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: result.webdriverValue.value list is missing or empty in Runtime.callFunctionOn response\n  (Session info: chrome\u003d119.0.6045.106)\n  (Driver info: chromedriver\u003d118.0.5993.70 (e52f33f30b91b4ddfad649acddc39ab570473b86-refs/branch-heads/5993@{#1216}),platform\u003dWindows NT 10.0.19045 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 24 milliseconds\nBuild info: version: \u00272.50.1\u0027, revision: \u0027d7fc91b29de65b790abb01f3ac5f7ea2191c88a7\u0027, time: \u00272016-01-29 11:11:26\u0027\nSystem info: host: \u0027TALAN-11UE63J\u0027, ip: \u002710.70.0.172\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.20\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54747}, webauthn:extension:credBlob\u003dtrue, acceptInsecureCerts\u003dfalse, fedcm:accounts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, unexpectedAlertBehaviour\u003dignore, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d118.0.5993.70 (e52f33f30b91b4ddfad649acddc39ab570473b86-refs/branch-heads/5993@{#1216}), userDataDir\u003dC:\\Users\\dothmen\\AppData\\Local\\Temp\\scoped_dir17820_894612521}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d119.0.6045.106, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, webauthn:extension:minPinLength\u003dtrue, webauthn:extension:prf\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 6223c614e0f45b99a5f42a5bb20bc6be\n*** Element info: {Using\u003dxpath, value\u003d//input[@class\u003d\u0027form-control\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat testpages.logintestpage.enterusername(logintestpage.java:18)\r\n\tat teststeps.steps.user_enters_email_password(steps.java:54)\r\n\tat ✽.user enters dorsafothmen12@gmail.comandDodo27948.!(file:///C:/Users/dothmen/Desktop/Nouveau%20dossier/jenkins/Act-5.5/ecommece/src/test/resources/Features/addcomment.feature:6)\r\n",
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
formatter.step({
  "name": "user wants to search for the cheapest software",
  "keyword": "When "
});
formatter.match({
  "location": "teststeps.steps.user_wants_to_search_for_the_cheapest_software()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on informatique button",
  "keyword": "And "
});
formatter.match({
  "location": "teststeps.steps.user_click_on_informatique_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "choose the category user click on software button",
  "keyword": "And "
});
formatter.match({
  "location": "teststeps.steps.choose_the_category_user_click_on_software_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on relevance button and click on decreasing price",
  "keyword": "And "
});
formatter.match({
  "location": "teststeps.steps.click_on_relevance_button_and_click_on_decreasing_price()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user chooses the software that suits them",
  "keyword": "And "
});
formatter.match({
  "location": "teststeps.steps.user_chooses_the_software_that_suits_them()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "when the user clicks on the product he wants to buy",
  "keyword": "And "
});
formatter.match({
  "location": "teststeps.steps.when_the_user_clicks_on_the_product_he_wants_to_buy()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "add a comment",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@addcomment"
    }
  ]
});
formatter.step({
  "name": "user click on add a comment",
  "keyword": "When "
});
formatter.match({
  "location": "teststeps.steps.user_click_on_add_a_comment()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter clearer photo please",
  "keyword": "And "
});
formatter.match({
  "location": "teststeps.steps.enter_clearer_photo_please()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "teststeps.steps.click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "submit comment is successful",
  "keyword": "Then "
});
formatter.match({
  "location": "teststeps.steps.submit_comment_is_successful()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/login.test.page.feature");
formatter.feature({
  "name": "Test login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "login page is open",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \u003cemail\u003eand\u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "clicks on login  button",
  "keyword": "And "
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "dorsafothmen12@gmail.com",
        "Dodo27948.!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
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
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: result.webdriverValue.value list is missing or empty in Runtime.callFunctionOn response\n  (Session info: chrome\u003d119.0.6045.106)\n  (Driver info: chromedriver\u003d118.0.5993.70 (e52f33f30b91b4ddfad649acddc39ab570473b86-refs/branch-heads/5993@{#1216}),platform\u003dWindows NT 10.0.19045 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 19 milliseconds\nBuild info: version: \u00272.50.1\u0027, revision: \u0027d7fc91b29de65b790abb01f3ac5f7ea2191c88a7\u0027, time: \u00272016-01-29 11:11:26\u0027\nSystem info: host: \u0027TALAN-11UE63J\u0027, ip: \u002710.70.0.172\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.20\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54768}, webauthn:extension:credBlob\u003dtrue, acceptInsecureCerts\u003dfalse, fedcm:accounts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, unexpectedAlertBehaviour\u003dignore, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d118.0.5993.70 (e52f33f30b91b4ddfad649acddc39ab570473b86-refs/branch-heads/5993@{#1216}), userDataDir\u003dC:\\Users\\dothmen\\AppData\\Local\\Temp\\scoped_dir3644_1175094422}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d119.0.6045.106, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, webauthn:extension:minPinLength\u003dtrue, webauthn:extension:prf\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 111bf1f3e09f06e9a476315f5365ed24\n*** Element info: {Using\u003dxpath, value\u003d//input[@class\u003d\u0027form-control\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat testpages.logintestpage.enterusername(logintestpage.java:18)\r\n\tat teststeps.steps.user_enters_email_password(steps.java:54)\r\n\tat ✽.user enters dorsafothmen12@gmail.comandDodo27948.!(file:///C:/Users/dothmen/Desktop/Nouveau%20dossier/jenkins/Act-5.5/ecommece/src/test/resources/Features/login.test.page.feature:7)\r\n",
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
  "keyword": "Then "
});
formatter.match({
  "location": "teststeps.steps.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "check login not valid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@failedlogin"
    }
  ]
});
formatter.step({
  "name": "login page is open",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \u003cemail\u003eand\u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "clicks on login  button",
  "keyword": "And "
});
formatter.step({
  "name": "user recived error message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "dorsafothmen1@gmail.com",
        "dodo27948.!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "check login not valid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@failedlogin"
    }
  ]
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
  "name": "user enters dorsafothmen1@gmail.comanddodo27948.!",
  "keyword": "When "
});
formatter.match({
  "location": "teststeps.steps.user_enters_email_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: result.webdriverValue.value list is missing or empty in Runtime.callFunctionOn response\n  (Session info: chrome\u003d119.0.6045.106)\n  (Driver info: chromedriver\u003d118.0.5993.70 (e52f33f30b91b4ddfad649acddc39ab570473b86-refs/branch-heads/5993@{#1216}),platform\u003dWindows NT 10.0.19045 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 23 milliseconds\nBuild info: version: \u00272.50.1\u0027, revision: \u0027d7fc91b29de65b790abb01f3ac5f7ea2191c88a7\u0027, time: \u00272016-01-29 11:11:26\u0027\nSystem info: host: \u0027TALAN-11UE63J\u0027, ip: \u002710.70.0.172\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.20\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54789}, webauthn:extension:credBlob\u003dtrue, acceptInsecureCerts\u003dfalse, fedcm:accounts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, unexpectedAlertBehaviour\u003dignore, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d118.0.5993.70 (e52f33f30b91b4ddfad649acddc39ab570473b86-refs/branch-heads/5993@{#1216}), userDataDir\u003dC:\\Users\\dothmen\\AppData\\Local\\Temp\\scoped_dir6464_773675835}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d119.0.6045.106, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, webauthn:extension:minPinLength\u003dtrue, webauthn:extension:prf\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 29ee7735da4033bb764e6ee73b6320a5\n*** Element info: {Using\u003dxpath, value\u003d//input[@class\u003d\u0027form-control\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat testpages.logintestpage.enterusername(logintestpage.java:18)\r\n\tat teststeps.steps.user_enters_email_password(steps.java:54)\r\n\tat ✽.user enters dorsafothmen1@gmail.comanddodo27948.!(file:///C:/Users/dothmen/Desktop/Nouveau%20dossier/jenkins/Act-5.5/ecommece/src/test/resources/Features/login.test.page.feature:18)\r\n",
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
  "name": "user recived error message",
  "keyword": "Then "
});
formatter.match({
  "location": "teststeps.steps.user_recived_error_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/research.feature");
formatter.feature({
  "name": "research product",
  "description": "",
  "keyword": "Feature"
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
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: result.webdriverValue.value list is missing or empty in Runtime.callFunctionOn response\n  (Session info: chrome\u003d119.0.6045.106)\n  (Driver info: chromedriver\u003d118.0.5993.70 (e52f33f30b91b4ddfad649acddc39ab570473b86-refs/branch-heads/5993@{#1216}),platform\u003dWindows NT 10.0.19045 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 23 milliseconds\nBuild info: version: \u00272.50.1\u0027, revision: \u0027d7fc91b29de65b790abb01f3ac5f7ea2191c88a7\u0027, time: \u00272016-01-29 11:11:26\u0027\nSystem info: host: \u0027TALAN-11UE63J\u0027, ip: \u002710.70.0.172\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.20\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54810}, webauthn:extension:credBlob\u003dtrue, acceptInsecureCerts\u003dfalse, fedcm:accounts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, unexpectedAlertBehaviour\u003dignore, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d118.0.5993.70 (e52f33f30b91b4ddfad649acddc39ab570473b86-refs/branch-heads/5993@{#1216}), userDataDir\u003dC:\\Users\\dothmen\\AppData\\Local\\Temp\\scoped_dir19924_1390250639}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d119.0.6045.106, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, webauthn:extension:minPinLength\u003dtrue, webauthn:extension:prf\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: e6d6f47e71dfafc9a04761e102d809ff\n*** Element info: {Using\u003dxpath, value\u003d//input[@class\u003d\u0027form-control\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat testpages.logintestpage.enterusername(logintestpage.java:18)\r\n\tat teststeps.steps.user_enters_email_password(steps.java:54)\r\n\tat ✽.user enters dorsafothmen12@gmail.comandDodo27948.!(file:///C:/Users/dothmen/Desktop/Nouveau%20dossier/jenkins/Act-5.5/ecommece/src/test/resources/Features/research.feature:5)\r\n",
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
  "name": "check research product is successful",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@research"
    }
  ]
});
formatter.step({
  "name": "user wants to search for the cheapest software",
  "keyword": "When "
});
formatter.match({
  "location": "teststeps.steps.user_wants_to_search_for_the_cheapest_software()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on informatique button",
  "keyword": "And "
});
formatter.match({
  "location": "teststeps.steps.user_click_on_informatique_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "choose the category user click on software button",
  "keyword": "And "
});
formatter.match({
  "location": "teststeps.steps.choose_the_category_user_click_on_software_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on relevance button and click on decreasing price",
  "keyword": "And "
});
formatter.match({
  "location": "teststeps.steps.click_on_relevance_button_and_click_on_decreasing_price()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user chooses the software that suits them",
  "keyword": "Then "
});
formatter.match({
  "location": "teststeps.steps.user_chooses_the_software_that_suits_them()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/update.feature");
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
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: result.webdriverValue.value list is missing or empty in Runtime.callFunctionOn response\n  (Session info: chrome\u003d119.0.6045.106)\n  (Driver info: chromedriver\u003d118.0.5993.70 (e52f33f30b91b4ddfad649acddc39ab570473b86-refs/branch-heads/5993@{#1216}),platform\u003dWindows NT 10.0.19045 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 22 milliseconds\nBuild info: version: \u00272.50.1\u0027, revision: \u0027d7fc91b29de65b790abb01f3ac5f7ea2191c88a7\u0027, time: \u00272016-01-29 11:11:26\u0027\nSystem info: host: \u0027TALAN-11UE63J\u0027, ip: \u002710.70.0.172\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.20\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54832}, webauthn:extension:credBlob\u003dtrue, acceptInsecureCerts\u003dfalse, fedcm:accounts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, unexpectedAlertBehaviour\u003dignore, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d118.0.5993.70 (e52f33f30b91b4ddfad649acddc39ab570473b86-refs/branch-heads/5993@{#1216}), userDataDir\u003dC:\\Users\\dothmen\\AppData\\Local\\Temp\\scoped_dir16076_1144908767}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d119.0.6045.106, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, webauthn:extension:minPinLength\u003dtrue, webauthn:extension:prf\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 285d9fd50a631ab88f2ef42f3a66db12\n*** Element info: {Using\u003dxpath, value\u003d//input[@class\u003d\u0027form-control\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat testpages.logintestpage.enterusername(logintestpage.java:18)\r\n\tat teststeps.steps.user_enters_email_password(steps.java:54)\r\n\tat ✽.user enters dorsafothmen12@gmail.comandDodo27948.!(file:///C:/Users/dothmen/Desktop/Nouveau%20dossier/jenkins/Act-5.5/ecommece/src/test/resources/Features/update.feature:6)\r\n",
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
formatter.scenarioOutline({
  "name": "test update is not successful",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@failedupdate"
    }
  ]
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Given "
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
  "name": "update new first name is not successful",
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
        "dorsafaaa",
        "fgsfgf"
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
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: result.webdriverValue.value list is missing or empty in Runtime.callFunctionOn response\n  (Session info: chrome\u003d119.0.6045.106)\n  (Driver info: chromedriver\u003d118.0.5993.70 (e52f33f30b91b4ddfad649acddc39ab570473b86-refs/branch-heads/5993@{#1216}),platform\u003dWindows NT 10.0.19045 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 18 milliseconds\nBuild info: version: \u00272.50.1\u0027, revision: \u0027d7fc91b29de65b790abb01f3ac5f7ea2191c88a7\u0027, time: \u00272016-01-29 11:11:26\u0027\nSystem info: host: \u0027TALAN-11UE63J\u0027, ip: \u002710.70.0.172\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.20\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54860}, webauthn:extension:credBlob\u003dtrue, acceptInsecureCerts\u003dfalse, fedcm:accounts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, unexpectedAlertBehaviour\u003dignore, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d118.0.5993.70 (e52f33f30b91b4ddfad649acddc39ab570473b86-refs/branch-heads/5993@{#1216}), userDataDir\u003dC:\\Users\\dothmen\\AppData\\Local\\Temp\\scoped_dir21940_247712351}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d119.0.6045.106, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, webauthn:extension:minPinLength\u003dtrue, webauthn:extension:prf\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: f7f1fc98837a37138f165ca2c8fb0b47\n*** Element info: {Using\u003dxpath, value\u003d//input[@class\u003d\u0027form-control\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat testpages.logintestpage.enterusername(logintestpage.java:18)\r\n\tat teststeps.steps.user_enters_email_password(steps.java:54)\r\n\tat ✽.user enters dorsafothmen12@gmail.comandDodo27948.!(file:///C:/Users/dothmen/Desktop/Nouveau%20dossier/jenkins/Act-5.5/ecommece/src/test/resources/Features/update.feature:6)\r\n",
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
  "name": "test update is not successful",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@failedupdate"
    }
  ]
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "teststeps.steps.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "skipped"
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
  "name": "user writes dorsafaaaandfgsfgf",
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
  "name": "update new first name is not successful",
  "keyword": "Then "
});
formatter.match({
  "location": "teststeps.steps.update_new_first_name_is_not_successful()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});