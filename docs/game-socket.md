---
id: game-socket
title: Game socket
---

# Game socket 

**Nodejs** is required on local (game) or remote machine. Version recommended - **latest version**.  

*If you have nodejs installed, skip this step*  
For Debian and Ubuntu you can use following commands to install nodejs
```sh 
# Update latest system packages
$ sudo apt update 

# Install node with -y parm to accept all incoming confirmations
$ sudo apt install nodejs -y

# After all is installed, check do we have nodejs installed
$ node -v

# If you see numbers, you are good to go :D 
# npm is not required since no 3rd party packages are used
```
Before running script we need to create **config.js** file. We can grab **config.example.js** data for example and paste it new **config.js** 

Config data:  
*   **token**: token used for authentication with clint. This field can empty, app will generate auth key or you can write down own token.
*   **port**: local port of app. This is required for a game and client.
*   **address**: game server ip address. If app runs on same server as game write **127.0.0.1** or if you use remote game server, use that remote address.

Note: config.js need to be in same dir as **game.js**.

Manualy place **game.js** and run it with command

```sh
$ node game.js
```

There should be message logged in terminal if its all good.  

*Why we use node app?*  
Reason is simple, game server with native socket module cant listen for incoming connections. Another reason is easier auth and preparing outgoing data.