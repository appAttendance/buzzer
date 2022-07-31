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
* Dependencies are outdated

## Installation 
First clone this repo, might require installing Git:
```
git clone https://gitlab.com/eloydegen/hacker-jeopardy-buzzer
cd hacker-jeopardy-buzzer
```
### Debian
```
sudo apt update && sudo apt install nodejs npm
npm install
node index.js
```
### Docker
```
docker build -t buzzer .
docker run -p 8090:8090 buzzer
```

Open http://localhost:8090 in your browser to start!

#### Optional: Nginx reverse proxy
```
sudo apt install certbot python3-certbot-nginx nginx
```

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
sudo certbot --nginx -d example.com
```

## Usage 

The players goto the homepage (`http://localhost:8090/`) and they can enter their name and team
number. Joining will give them a giant buzzer button!

The host heads over to `/host` and will be able to see everyone that buzzes in and clear the list
in between questions.
