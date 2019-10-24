# Descriptive Title Here
What more do you want than a POC? Here's one demonstrating how easy it is to use fastify!

## Pre-requisites
A running mongo db with name "nothing_to_see_here" and collection "move_along"
This can be accomplished via: 
- `docker run -d -p 27017:27017 --name awesome_name mongo`
- `docker exec -it awesome_name mongo`
- `use nothing_to_see_here`
- `db.move_along.insert({_id: "ThisIsABadId"})`

## Getting Started
`npm install`
`npm start`
