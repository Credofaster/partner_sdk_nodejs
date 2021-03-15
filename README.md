# Getting started

Buy Airtime on the most simplistic System. We abstract all the nitty-gritty leaving you with just the option to specify the account number to receive airtime and how much. 

We guarantee 95% uptime, 99% reliability.

Just Request and we will make sure you get, in realtime. If not, you will be notified immediately by events.

Now, what Credo is faster that Credofaster!

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Credofaster%20Partner%20Api-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=Credofaster%20Partner%20Api-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `CredofasterPartnerApiLib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=Credofaster%20Partner%20Api-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=Credofaster%20Partner%20Api-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=Credofaster%20Partner%20Api-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=Credofaster%20Partner%20Api-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  Credofaster Partner ApiController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=Credofaster%20Partner%20ApiController)

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| apiKey | Assigned APIKey |
| clientId | Assigned ClientId |



API client can be initialized as following:

```JavaScript
const lib = require('lib');

// Configuration parameters and credentials
lib.Configuration.apiKey = "XXXX-XXXX-XXXX-XXXX"; // Assigned APIKey
lib.Configuration.clientId = "ABCDEDFG1234"; // Assigned ClientId

```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [MainController](#main_controller)
* [EventsController](#events_controller)

## <a name="main_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MainController") MainController

### Get singleton instance

The singleton instance of the ``` MainController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MainController;
```

### <a name="airtime_request"></a>![Method: ](https://apidocs.io/img/method.png ".MainController.airtimeRequest") airtimeRequest

> Request Airtime Purchase


```javascript
function airtimeRequest(request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| request |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var request = new PartnerAirtimeRequest({"key":"value"});

    controller.airtimeRequest(request, function(error, response, context) {

    
    });
```



### <a name="airtime_balance"></a>![Method: ](https://apidocs.io/img/method.png ".MainController.airtimeBalance") airtimeBalance

> Gets the current Working Balance. 
> Balance is SIGNED


```javascript
function airtimeBalance(callback)
```

#### Example Usage

```javascript


    controller.airtimeBalance(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="events_controller"></a>![Class: ](https://apidocs.io/img/class.png ".EventsController") EventsController

### Get singleton instance

The singleton instance of the ``` EventsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.EventsController;
```

### <a name="register_callback"></a>![Method: ](https://apidocs.io/img/method.png ".EventsController.registerCallback") registerCallback

> A callback to receive the below Callbacks


```javascript
function registerCallback(request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| request |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var request = new RegisterCallbackRequest({"key":"value"});

    controller.registerCallback(request, function(error, response, context) {

    
    });
```



### <a name="client_event_feedback"></a>![Method: ](https://apidocs.io/img/method.png ".EventsController.clientEventFeedback") clientEventFeedback

> *Tags:*  ``` Skips Authentication ``` 

> You are required to provide a HTTP/HTTPS endpoint, to which we will publish various events. 
> 
> This Endpoint will be hosted on the CLIENT's Environment. If no endpoint is provided, we are not liable to any missing events. 
> 
> NOTE: A DETAILED PDF of all Events is shared on request. It contains application events, System Health Events and Alerts on the same.


```javascript
function clientEventFeedback(payloadToReceive, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| payloadToReceive |  ``` Required ```  | Sample Payload: {"EventId":"123456789","EventType":"QUEUED","RequestId":"A09797a11e2564061b859781b18bb34dd","EventData":{}} |



#### Example Usage

```javascript

    var payloadToReceive = new EventCallbackPayload({"EventId":"123456789","EventType":"QUEUED","RequestId":"A09797a11e2564061b859781b18bb34dd","EventData":{}});

    controller.clientEventFeedback(payloadToReceive, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



