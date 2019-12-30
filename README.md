# m365 Dashboard API

Extensión no oficial de la aplicación m356 Dashboard.

Read in [*English version*] (README.en.md)

<a href="https://play.google.com/store/apps/details?id=adriandp.m365dashboard">![Get it on Play Store](https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png)</a>

El propósito de esta API es poder obtener los datos propios del patinete. No es una base de datos común.

## Índice

- [Instalación](#instalación)
- [Úso](#úso)
- [Contribución](#contribución)
- [Endpoints](#endpoints)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Instalación

## Úso

## Endpoints


El identificador puede ser el _id del objeto JSON o puede ser el serial del patinete.


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

## Contribución

Pull requests son bienvenidas. Para cambios importantes, abra primero un problema para discutir qué le gustaría cambiar.

Asegúrese de actualizar las pruebas según corresponda.

Agradecimientos a @AitorG

## Contacto

Puedes enviarme un mensaje privado a telegram [@CRaW69](https://t.me/CRaW69).
Para más información unete al grupo oficial [@m365Dashboard](https://t.me/m365Dashboard).

## Licencia
[MIT](https://choosealicense.com/licenses/mit/)
