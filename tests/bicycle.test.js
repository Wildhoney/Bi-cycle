import test from 'ava';

"ava": {
    "files": [
        "tests/*.test.js"
    ],
        "babel": "inherit",
        "require": [
        "babel-register",
        "./tests/helpers/setup-browser-env.js"
    ]

