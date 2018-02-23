# AI_Chatbot
Building an AI chatbot with Dialogflow

# Overview

We will build an application to submit tickets with a network and 3 subnetworks that you will use throughout the tutorial. The following is a diagram of the chatbot application on Google Cloud Platform.

# Dialogflow Concepts & Constructs

[Dialogflow](https://dialogflow.com/docs/getting-started/basics) is a conversation building tool. It takes the human language and cleverly splits it into intents and arguments.

[Agent](https://dialogflow.com/docs/agents): Agents are best described as NLU (Natural Language Understanding) modules. These can be included in your app, product, or service and transforms natural user requests into actionable data.

This transformation occurs when a user input matches one of the intents inside your agent. [Intents](https://dialogflow.com/docs/intents) are the predefined or developer-defined components of agents that process a user's request.

[Intent](https://dialogflow.com/docs/intents): An intent represents a mapping between what a user says and what action should be taken by your software.

Intent interfaces have the following sections:

  - User says
  - Action
  - Response
  - Contexts

[Entity](https://dialogflow.com/docs/entities): Entities are powerful tools used for extracting [parameter values](https://dialogflow.com/docs/actions-and-parameters#parameters) from natural language inputs. Any important data you want to get from a user's request will have a corresponding entity.

The entities used in a particular agent will depend on the parameter values that are expected to be returned as a result of the agent functioning. In other words, a developer does not need to create entities for every possible concept mentioned in the agent – only for those needed for actionable data.

There are 3 types of entities:

  - [system](https://dialogflow.com/docs/entities#system_entities) (defined by Dialogflow)
  - [developer](https://dialogflow.com/docs/entities#developer_entities) (defined by a developer)
  - [user](https://dialogflow.com/docs/entities#user_entities) (built for each individual end-user in every request)

Each of these can be classified as:

  - mapping - having reference values
  - enum - having no reference values
  - composite - containing other entities with aliases and returning object type values
  
[Context](https://dialogflow.com/docs/contexts): Contexts represent the current context of a user's request. This is helpful for differentiating phrases which may be vague or have different meanings depending on the user's preferences, geographic location, the current page in an app, or the topic of conversation.

For example, if a user is listening to music and finds a band that catches their interest, they might say something like: "I want to hear more of them". As a developer, you can include the name of the band in the context with the request, so that the agent can use it in other intents.

[Fulfillment](https://dialogflow.com/docs/fulfillment): Fulfillment is a webhook that allows you to pass information from a matched intent into a web service and get a result from it.
