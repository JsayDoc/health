define({ "api": [
  {
    "type": "post",
    "url": "accounts/social_auth/:backend/",
    "title": "Авторизация через соц. сети",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"token\": {\n        \"refresh\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6M\",\n        \"access\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNT\"\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>Информация о токене пользователя</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "token.refresh",
            "description": "<p>Refresh токен для продления основного токена</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "token.access",
            "description": "<p>Токен пользователя</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"error_code\": \"1\",\n    \"error_message\": [\n        \"Адрес электронной почты обязателен\"\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error Code": [
          {
            "group": "Error Code",
            "optional": false,
            "field": "1",
            "description": "<p>Невалидный токен или пользователь не дал необходимые разрешения</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "social_auth",
    "group": "Аутентификация",
    "description": "<p>Возможные варианты backend - <code>google-oauth2, vk-oauth2, apple-id</code></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Токен полученный от соц. сети</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Валидный e-mail, обязательное поле если backend <code>vk-oauth2</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "first_name",
            "description": "<p>Имя пользователя, обязательное поле если backend <code>apple-id</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Floatfield",
            "optional": true,
            "field": "tz",
            "defaultValue": "0",
            "description": "<p>Часовой пояс</p>"
          }
        ]
      }
    },
    "filename": "health/apps/account/rest/v1/api.py",
    "groupTitle": "Аутентификация"
  },
  {
    "type": "post",
    "url": "accounts/token/refresh/",
    "title": "Продление токена",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"access\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhw\"\n}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "access",
            "description": "<p>Новый токен пользователя</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"detail\": \"Токен недействителен или просрочен\",\n    \"code\": \"token_not_valid\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "name": "token_refresh",
    "group": "Аутентификация",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refresh",
            "description": "<p>Refresh Token пользователя</p>"
          }
        ]
      }
    },
    "filename": "health/apps/account/rest/v1/urls.py",
    "groupTitle": "Аутентификация"
  },
  {
    "type": "get",
    "url": "survey/list/",
    "title": "Список вопросов",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"id\": 1,\n        \"name\": \"Как вы оцениваете свое физическое состояние на данный момент?\",\n        \"is_multiple\": false,\n        \"survey_answers\": [\n            {\n                \"id\": 1,\n                \"name\": \"Отличное\"\n            },\n            {\n                \"id\": 2,\n                \"name\": \"Хорошее\"\n            },\n            {\n                \"id\": 3,\n                \"name\": \"Удовлетворительное\"\n            },\n            {\n                \"id\": 4,\n                \"name\": \"Плохое\"\n            }\n        ]\n    },\n    {\n        \"id\": 2,\n        \"name\": \"Цель, которая вам интересна?\",\n        \"is_multiple\": true,\n        \"survey_answers\": [\n            {\n                \"id\": 16,\n                \"name\": \"Испытания самому себе, элемент игры\"\n            },\n            {\n                \"id\": 17,\n                \"name\": \"Улучшить кровообращение в мозге и эффективнее решать задачи\"\n            },\n            {\n                \"id\": 18,\n                \"name\": \"Не чувствовать себя разбитым с утра, быть отдохнувшим\"\n            },\n            {\n                \"id\": 19,\n                \"name\": \"Быть примером для своих детей\"\n            }\n        ]\n    }\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "List",
            "optional": false,
            "field": "survey_answers",
            "description": "<p>Список ответов</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "survey_answers.id",
            "description": "<p>ID ответа</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "survey_answers.name",
            "description": "<p>Ответ</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID вопроса</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Вопрос</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "is_multiple",
            "description": "<p>Множественный выбор <code>True</code> - да, <code>False</code> - нет</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "survey_list",
    "group": "Опросы",
    "filename": "health/apps/survey/rest/v1/api.py",
    "groupTitle": "Опросы"
  }
] });
