# web-scrapping
django docker react 

System made to get data from a specific page on the internet and display it in our own react frontend.

***

## How to build:
There's two different ways to build the project. 
Either via docker and docker-compose, 
or running the project locally on your machine.

### Setup:

clone the repository
```git clone https://github.com/fernand0aguilar/web-scrapping.git```
after the download
cd into the repository 

#### The easy way:

ỳou should have installed "docker" and "docker-compose"
run 
```
$ docker-compose build
$ docker-compose up
```

if everything went right you should see a message like this.

`Successfully tagged webscrapping_backend:latest`

and later

`Successfully tagged webscrapping_frontend:latest`

#### The hard way:
```
install python 3.6 on your machine
cd frontend
$ yarn install

cd ../backend/

RUN
$ pip3 install -r requirements
$ python3 manage.py makemigrations
$ python3 manage.py migrate
$ python3 manage.py shell < webscraping.py
$ python3 manage.py runserver
```
***
### Test
python3 manage.py test


