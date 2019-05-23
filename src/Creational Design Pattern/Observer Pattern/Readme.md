# The Observer Pattern

Observer is a design pattern in which an object maintains a lists of objects depending on it.

## Components
* Subject: Maintains a list of observers
* Observer: Provides an update interface for objects
* ConcreteSubject: Broadcasts notifications to Observers on changes of state
* ConcreteObserver: Stores a reference to the ConcreteSubject

