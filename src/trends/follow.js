import TweetAvatar1 from "../assets/img/tweet-avatar1.svg"
import TweetAvatar2 from "../assets/img/tweet-avatar2.svg"
import TweetAvatar3 from "../assets/img/tweet-avatar3.svg"

let follow = [
    {
        "id":"01",
        "avatar": TweetAvatar2,
        "content": {
            "body": {
                "title": {
                    "author": "The New York Times",
                    "detail": "@nytimes",
                },
            },
        }

    },
    {
        "id":"02",
        "avatar": TweetAvatar1,
        "content": {
            "body": {
                "title": {
                    "author": "CNN",
                    "detail": "@CNN",
                },
            },
        }

    },
    {
        "id":"03",
        "avatar": TweetAvatar3,
        "content": {
            "body": {
                "title": {
                    "author": "Twitter",
                    "detail": "@Twitter",
                },
            },
        }

    },
    ]

export default follow



function SimpleSymbols(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[a-zA-Z]/)) {
            if ((str[i - 1] !== '+' || str[i + 1] !== '+')) {
                return false;
            }
        }
    }
    return true;
}

// Testez la fonction avec les exemples donnés
console.log(SimpleSymbols("+d+=3=+s+")); // Devrait afficher true
console.log(SimpleSymbols("f++d+")); // Devrait afficher false