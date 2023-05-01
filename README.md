**In order to run the project please perfrom following steps**


Run `npm i`

Copy the contents of .env.example to a new .env file 

Run `docker-compose build && docker-compose up`

Access the server at `http://localhost:3000` 

Test the single API presen the proejct with following cURL request
```
curl --location 'localhost:3000/validate' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'name=John Doe' \
--data-urlencode 'email=john.doe@gmail.com' \
--data-urlencode 'password=aS!implePassword'
```
