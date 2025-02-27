# mellow

## DataBase Setup

1. Create mongoDB account - https://account.mongodb.com/account/register
2. Create AWS cluster
3. Under Security tab, click Database Access, and on the right `add new database user`. After you enter username and password, click `add user` at the bottom right corner.
4. Under Security tab, click Network Access, and whitelist your IP address.
5. Once your cluster is created, under Clusters tab, click connect and copy the connection string which will look something like this `mongodb+srv://<username>:<password>@cluster0.ioku4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`. Instead of `<username>` there will be your username, and you will need to replace `<password>` with your password.
6. Finally, inside your project folder, `cd` into server, create new file `.env` and enter `DB=<paste the string from above here>`. It will look similar to this `DB=mongodb+srv://srdjan:mypass@cluster0.ioku4.mongodb.net/reaction?retryWrites=true&w=majority`.

## Running the app
While in the server directory, run `npm run dev` to start the live server. The live server will watch for changes to files in the `src` directory and reload the page when they're changed.

## Viewing Static Version of the App
While developing the app, you can take a look at the static pages that you'll eventually convert into a dynamic application. To do so, visit `http://localhost:3000/ui` in the browser.

## Developing the app

The starting point of the application is the `/client/src/index.js` file. That's where the root component of the application - `Application` - is rendered to the DOM. You can add new components to the `/client/src/components` folder.

## Calculation of item positions

- If the item is the first to be created in the group, it gets a position of 65535.
- If the item is inserted at the beginning of the group, the position becomes half of the previously-first item’s position.
- If the item is inserted at the end of the list, the position becomes the previously-last item’s position plus 65536
- If the item is inserted between two other items, the position becomes `(itemBefore.position + itemAfter.position) / 2`.
- Positions are floats with a high precision (10 digits or so)
