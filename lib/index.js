/**
  * @module CredofasterPartnerApiLib
  *
  * Buy Airtime on the most simplistic System. We abstract all the nitty-gritty leaving you with
  * just the option to specify the account number to receive airtime and how much.   We guarantee
  * 95% uptime, 99% reliability.  Just Request and we will make sure you get, in realtime. If not,
  * you will be notified immediately by events.  Now, what Credo is faster that Credofaster!
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const MainController = require('./Controllers/MainController');
const EventsController = require('./Controllers/EventsController');
const PartnerAirtimeRequest = require('./Models/PartnerAirtimeRequest');
const SingleAirtimeParameter = require('./Models/SingleAirtimeParameter');
const Initiator = require('./Models/Initiator');
const Denomination = require('./Models/Denomination');
const PartnerAirtimeResponse = require('./Models/PartnerAirtimeResponse');
const PartnerAirtimeBalanceResponse = require('./Models/PartnerAirtimeBalanceResponse');
const RegisterCallbackRequest = require('./Models/RegisterCallbackRequest');
const EventCallbackPayload = require('./Models/EventCallbackPayload');
const RegisterCallbackResponse = require('./Models/RegisterCallbackResponse');
const EventCallbackFeedback = require('./Models/EventCallbackFeedback');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of CredofasterPartnerApiLib
    Configuration,
    Environments,
    // controllers of CredofasterPartnerApiLib
    MainController,
    EventsController,
    // models of CredofasterPartnerApiLib
    PartnerAirtimeRequest,
    SingleAirtimeParameter,
    Initiator,
    Denomination,
    PartnerAirtimeResponse,
    PartnerAirtimeBalanceResponse,
    RegisterCallbackRequest,
    EventCallbackPayload,
    RegisterCallbackResponse,
    EventCallbackFeedback,
    // exceptions of CredofasterPartnerApiLib
    APIException,
};

module.exports = initializer;
