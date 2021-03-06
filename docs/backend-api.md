---
id: backend-api
title: REST API
---

## Rest API

Info provided below will be rewritten in future.


| ENDPOINT               | METHOD | RETURN                 | NOTE                              |
|------------------------|--------|------------------------|-----------------------------------|
| `/api/matches/info`    | GET    | Matches list           |                                   |
| `/api/addmatch`        | POST   |                        | Add a new match to the database   |
| `/api/view/match/:id`  | GET    | Specific match info    | :id -> match id                   |
| `/api/editmatch`       | POST   |                        | ID of a match is necessary        |
| `/api/addplayer`       | POST   |                        | Adds a new player to the database |
| `/api/view/player/:id` | GET    | Specific player info   | :id -> player id                  |
| `/api/editplayer`      | POST   |                        | ID of a player is necessary       |
| `/api/players`         | GET    | Gets all players list  |                                   |
| `/api/teams`           | GET    | Teams list             |                                   |
| `/api/addclan`         | POST   |                        | Add a new team to the database    |
| `/api/view/team/:id`   | GET    | Get specific team info |                                   |
| `/api/editclan`        | POST   |                        | ID of a match is necessary        |
