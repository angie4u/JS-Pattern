# The Singleton Pattern

* Singleton pattern restricts initiation of a class to a single object
* If an instance already exists, then return that instance
* The instance must be accessible to clients from a well-known access point
* The sole instance should be extensible by subclassing
* Important note the difference between a static instance of a class vs Singleton -> Singleton can be implemented as a static, also can be **constructed lazily**

## Use Case
* Singleton is useful when exactly one object is needed to coordinate others across a system

## Drawbacks
We need to be careful when we use singleton, because it can cause tightly coupling
* [https://www.ibm.com/developerworks/webservices/library/co-single/index.html](https://www.ibm.com/developerworks/webservices/library/co-single/index.html)
* [http://misko.hevery.com/2008/10/21/dependency-injection-myth-reference-passing/](http://misko.hevery.com/2008/10/21/dependency-injection-myth-reference-passing/)
