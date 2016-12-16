# Express.js-project-starter
Project starter for Express.js with Q and layer separation

Here I present you the starter setup I personally prefer when using Express.js. You may use this mini "framework" to kickstart your own express project. The skeleton is separated into three different layers:

* Router: You should register your routes in <b> Routes.js </b> inside <i>routes</i> directory. Example: ```router.get('/',controller.get)```
* Controller: You should define your controllers inside <i>controllers</i> directory. You can find an example at ```/controllers/examplecontroller.js```
* Model: You shall define your model files inside <i>model</i> directory. You can find a model example at ```/model/examplemode.js```

The models and controllers are relying on promises using the Q lib. You may place a dbms of your liking to work with the model layer.
