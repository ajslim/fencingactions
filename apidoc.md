# Users [/users]

## Get all users [GET]
Get all users

+ Response 200 (application/json; charset=utf-8)

    + Body

        [
          {
            "id": 1,
            "username": "test"
          }
        ]

## Create new User [POST]

+ Request (application/json)

    + Body
        {
            "username": "new",
            "password": "new"
        }

+ Response 201 (application/json; charset=utf-8)

    + Body


        {
            "id": 2,
            "username": "new",
            "password": "$2b$10$yR0AxtBaOWTzl3aWv1IpTuW71ZlClQV1frKkl3QLEh7h9sQNvdYSy",
            "updatedAt": "2018-04-14T22:40:47.026Z",
            "createdAt": "2018-04-14T22:40:47.026Z"
        }

# User [/users/{userId}]

+ Parameters

    + userId: 2 (number) - The unique ID of the User

## Get user [GET]
Get the user

+ Response 200 (application/json; charset=utf-8)

    + Body

        {
          "id": 2,
          "username": "testuser"
        }


## Update User [PUT]

+ Request (application/json)

    + Body
        {
            "username": "new user name",
            "password": "new password"
        }

+ Response 200 (application/json; charset=utf-8)

    + Body


        [
            1
        ]


# Actions [/actions]

## Get all actions [GET]
Get all actions

+ Response 200 (application/json; charset=utf-8)

    + Body

        [
          {
            "id": 1,
            "url": "http://www.google.com",
            "call_on_site_id": null,
            "createdAt": "2018-06-15T17:50:14.000Z",
            "updatedAt": "2018-06-15T17:50:14.000Z"
          }
        ]

## Create new action [POST]

+ Request (application/json)

    + Body
        {
            "url": "http://www.google.com",
            "call_on_site_id": null
        }

+ Response 201 (application/json; charset=utf-8)

    + Body


        {
            "id": 2,
            "url": "http://www.google.com",
            "updatedAt": "2018-04-14T22:40:47.026Z",
            "createdAt": "2018-04-14T22:40:47.026Z"
        }

# Action [/actions/{actionId}]

+ Parameters

    + userId: 1 (number) - The unique ID of the User

## Get action [GET]
Get the action

+ Response 200 (application/json; charset=utf-8)

    + Body

        {
          "id": 2,
          "url": "http://www.google.com",
          "call_on_site_id": null,
          "updatedAt": "2018-04-14T22:40:47.026Z",
          "createdAt": "2018-04-14T22:40:47.026Z"
        }


## Update Action [PUT]

+ Request (application/json)

    + Body
        {
          "url": "http://www.google.com",
          "call_on_site_id": null
        }

+ Response 200 (application/json; charset=utf-8)

    + Body


        [
            1
        ]

