<h1>Kanban</h1>

**Register**
----
  Register User.

* **URL**

  /users/register

* **Method:**

  `POST`

*  **Request Headers**

    * None

*  **Request Params**

    * None

*  **Request Body**

    * FullName: <E.g: John Doe>  
    * Email: <E.g: johndoe@mail.com>
    * Password: <E.g: johndoe>

* **Success Response:**

  * **Code:** 201 Created<br />
    **Content:** <br />
    ```
    {
        "id": 1,
        "fullName": "John Doe",
        "email": "johndoe@mail.com"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 Bad Request<br />
    **Content:** <br />
    ```
    {
        "message": [
            "Full Name Cannot be Empty",
            "Email Cannot be Empty",
            "Email Is Invalid",
            "Password Cannot be Empty",
            "Email Invalid / Already Taken"
        ]
    }
    ```

    Or

  * **Code:** 500 INTERNAL SERVER ERROR<br />
    **Content:** <br />
    ```
    {message: 'Internal Server Error'}
    ```

***

**Login**
----
  Login User.

* **URL**

  /users/login

* **Method:**

  `POST`

* **Request Headers**

  * None

* **Request Params**

  * None

* **Request Body**

  * Email: <E.g: johndoe@mail.com>
  * Password: <E.g: johndoe>

* **Success Response:**

* **Code:** 200 Created<br />
  **Content:** <br />
  ```
  {
    "id": 1,
    "fullName": "mujib",
    "email": "mujib@mail.com",
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 eyJpZCI6MSwiZW1haWwiOiJtdWppYkBtYWlsLmNvbSIsImlhdCI6MTYxMzE1MDUwOH0.j0WnusEGkMprO76MOaqVbRIazmMyNLJBH5RuYSjkCqI"
  }
  ```

* **Error Response:**

* **Code:** 400 Bad Request<br />
  **Content:** <br />
  ```
  {
      "message": [
          "Email Cannot be Empty",
          "Email Is Invalid",
          "Password Cannot be Empty",
      ]
  }
  ```

  Or

* **Code:** 500 INTERNAL SERVER ERROR<br />
  **Content:** <br />
  ```
  {message: 'Internal Server Error'}
  ```

***

**Show ALL Kanbans**
----
  Returns All Kanban lists.

* **URL**

  /kanbans

* **Method:**

  `GET`

*  **Request Headers**

    * access_token

*  **Request Params**

    * None

*  **Request Body**

    * None

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** <br />
    ```
    [
        {
            "id": 1,
            "title": "Bikin Kanban",
            "description": "Bikin Layout Dulu",
            "category": "backlog",
            "UserId": 1,
            "createdAt": "2021-02-09T13:47:55.954Z",
            "updatedAt": "2021-02-09T13:47:55.954Z"
        }, ...
    ]
    ```
 
* **Error Response:**

  * **Code:** 400 Bad Request<br />
    **Content:** <br />
    ```
    {message: 'Not Authenticate'}
    ```

    Or

  * **Code:** 500 INTERNAL SERVER ERROR<br />
    **Content:** <br />
    ```
    {message: 'Internal Server Error'}
    ```

***

**Get Kanban By Id**
----
  Return Kanban By Id.

* **URL**

  /kanbans/:id

* **Method:**

  `GET`

* **Request Headers**

  * access_token

* **Request Params**

  * id: <E.g: 1>

* **Request Body**

  * None

* **Success Response:**

* **Code:** 200 OK<br />
  **Content:** <br />
  ```
  {
    "id": 1,
    "title": "Bikin Kanban",
    "description": "Bikin Layout Dulu",
    "category": "backlog",
    "UserId": 1,
    "createdAt": "2021-02-09T13:47:55.954Z",
    "updatedAt": "2021-02-09T13:47:55.954Z"
  }
  ```

* **Error Response:**

* **Code:** 401 Not Authorized<br />
  **Content:** <br />
  ```
  {message: 'Not Authenticate'}
  ```
  
  Or

  * **Code:** 404 Not Found<br />
  **Content:** <br />
  ```
  {message: 'Not Found'}
  ```

  Or

* **Code:** 500 INTERNAL SERVER ERROR<br />
  **Content:** <br />
  ```
  {message: 'Internal Server Error'}
  ```

***

**Add Kanban**
----
  Add Kanban.

* **URL**

  /kanbans

* **Method:**

  `POST`

*  **Request Headers**

    * access_token

*  **Request Params**

    * None

*  **Request Body**

    * Title: <e.g: Bikin Kanban>
    * Description: <e.g: Bikin Layout Dulu>
    * Category: <e.g: backlog>

* **Success Response:**

  * **Code:** 201 Created <br />
    **Content:** <br />
    ```
    {
        "id": 1,
        "title": "Bikin Kanban",
        "description": "Bikin Layout Dulu",
        "category": "backlog",
        "UserId": 1,
        "createdAt": "2021-02-09T13:47:55.954Z",
        "updatedAt": "2021-02-09T13:47:55.954Z"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 Bad Request<br />
    **Content:** <br />
    ```
    {
        "message": [
            "Title Cannot be Empty",
            "Description Cannot be Empty",
            "Category Cannot be Empty"
        ]
    }
    ```

    Or

  * **Code:** 500 INTERNAL SERVER ERROR<br />
    **Content:** <br />
    ```
    {message: 'Internal Server Error'}
    ```

***

**Update Kanban**
----
  Update Category Kanban.

* **URL**

  /kanbans/:id

* **Method:**

  `PATCH`

*  **Request Headers**

    * access_token

*  **Request Params**

    * id: <e.g: 1>

*  **Request Body**

    * Category: <e.g: todo>

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** <br />
    ```
    [
        {
            "id": 1,
            "title": "Bikin Kanban",
            "description": "Bikin Layout Dulu",
            "category": "todo",
            "UserId": 1,
            "createdAt": "2021-02-09T13:47:55.954Z",
            "updatedAt": "2021-02-09T13:47:55.954Z"
        }
    ]
    ```
 
* **Error Response:**

  * **Code:** 400 Bad Request<br />
    **Content:** <br />
    ```
    {
        "message": [
            "Title Cannot be Empty",
            "Description Cannot be Empty",
            "Category Cannot be Empty"
        ]
    }
    ```

    Or

  * **Code:** 401 Not Authorize<br />
    **Content:** <br />
    ```
    {
        "message": "Not Authorize"
    }
    ```

    Or

  * **Code:** 500 INTERNAL SERVER ERROR<br />
    **Content:** <br />
    ```
    {message: 'Internal Server Error'}
    ```
***

**Edit Kanban**
----
  Edit Kanban.

* **URL**

  /kanbans/:id

* **Method:**

  `PUT`

* **Request Headers**

  * access_token

* **Request Params**

  * id: <e.g: 1>

*  **Request Body**

    * Title: <e.g: Bikin Kanban Server>
    * Description: <e.g: Bikin Layout Dulu>
    * Category: <e.g: backlog>

* **Success Response:**

* **Code:** 200 OK<br />
  **Content:** <br />
  ```
  [
      {
          "id": 1,
          "title": "Bikin Kanban Server",
          "description": "Bikin Layout Dulu",
          "category": "backlog",
          "UserId": 1,
          "createdAt": "2021-02-09T13:47:55.954Z",
          "updatedAt": "2021-02-09T13:47:55.954Z"
      }
  ]
  ```

* **Error Response:**

* **Code:** 400 Bad Request<br />
  **Content:** <br />
  ```
  {
      "message": [
          "Category Cannot be Empty"
      ]
  }
  ```

  Or

* **Code:** 401 Not Authorize<br />
  **Content:** <br />
  ```
  {
      "message": "Not Authorize"
  }
  ```

  Or

* **Code:** 500 INTERNAL SERVER ERROR<br />
  **Content:** <br />
  ```
  {message: 'Internal Server Error'}
  ```


***

**Delete Kanban**
----
  Delete Kanban.

* **URL**

  /kanbans/:id

* **Method:**

  `DELETE`

*  **Request Headers**

    * access_token

*  **Request Params**

    * None

*  **Request Body**

    * None

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** <br />
    ```
    {
        "message": "Delete Kanban Success"
    }
    ```
 
* **Error Response:**

  * **Code:** 401 Not Authorize<br />
    **Content:** <br />
    ```
    {
        "message": "Not Authorize"
    }
    ```

    Or

  * **Code:** 500 INTERNAL SERVER ERROR<br />
    **Content:** <br />
    ```
    {message: 'Internal Server Error'}
    ```