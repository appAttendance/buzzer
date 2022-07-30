A fork of the MIT licensed [buzzer from bufferapp](https://github.com/bufferapp/buzzer)

Customized for Hacker Jeopardy at MCH2022. New features:
* Sound buzzer
* Red background when the first user presses the buzzer
* Larger text for usage in a large room

## Known issues
* Host is not warned when audio permissions aren't given
* Buzzer sounds can overlap
* Number of joined users does not decrease when users leave the buzzer

## Running the app

You'll need [Node.js](https://nodejs.org) or [Docker](https://www.docker.com/) to run this
application. For Node:

```
npm install
node index.js
```

For Docker:

```
docker build -t buzzer .
docker run -p 8090:8090 buzzer
```

Open http://localhost:8090 in your browser to start!

## How to use

The players goto the homepage (`http://localhost:8090/`) and they can enter their name and team
number. Joining will give them a giant buzzer button!

The host heads over to `/host` and will be able to see everyone that buzzes in and clear the list
in between questions.
