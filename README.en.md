# m365 Dashboard API

Extension no officially from m365 Dashboard application.


<a href="https://play.google.com/store/apps/details?id=adriandp.m365dashboard">![Get it on Play Store](https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png)</a>

The purpose of this API is to obtain own data from scooter. It is not a public database.

## Index

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Endpoints](#endpoints)
- [License](#license)
- [Contact](#contact)

## Installation

## Usage

## Endpoints

The identifier can be the _id of the JSON object or might be the scooter serial.


- /scooter
  - /scooter/:id

    ```json
    {
        "serial": 100000,
        "total_km": 5,
        "firmware": 34,
        "ble": 2000,
        "bms": 44,
        "bms_serial": 800,
        "battery_capacity": 44,
        "total_cycles": 44,
        "completed_cycles": 0
    }

- /temperature

- /fuelSave
  - /fuelSave/:id

    ```json
    {
        "success": true,
        "message": {
            "money_saved": "6645 €"
        }
    }
    ```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

Special thanks to @AitorG

## Contact

You can send me a private message on telegram [@CRaW69](https://t.me/CRaW69).
For more information enroll you in official group [@m365Dashboard](https://t.me/m365Dashboard).

## License
[MIT](https://choosealicense.com/licenses/mit/)