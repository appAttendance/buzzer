A fork of the MIT licensed [buzzer from bufferapp](https://github.com/bufferapp/buzzer)

Customized for Hacker Jeopardy at MCH2022. New features:
* Sound buzzer
* Red background when the first user presses the buzzer
* Larger text for usage in a large room

If you can, you should use hardware buttons. Those are way more fun than this, and also makes checking against cheating way easier because you can just forbid the use of smartphones. This is more of a last resort option. Check out [this article on Hackaday](https://hackaday.com/2019/08/20/game-on-with-these-open-source-arduino-buzzers/)

![Buzzer screenshot](/screenshots/buzzer.png "Buzzer screenshot")

## Known issues
* Host is not warned when audio permissions aren't given
* Buzzer sounds can overlap
* Number of joined users does not decrease when users leave the buzzer
* Teams are not deduplicated
* Everything is unauthenticated

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

## Nginx reverse proxy
Add the following to `/etc/nginx/sites-available/default`:
```
server_name example.com;

location / {
        proxy_pass http://localhost:8090;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

Get a certificate:
```
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d example.com
```
