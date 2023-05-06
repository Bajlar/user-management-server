/**
 * server site setup
 * -----------------------
 * 1. cmd open
 * 2. cd \working file open
 * 3. mkdir [my project name]
 * 4. cd [my project name]
 * 5. npm init -y (sob feature show the display)
{
  "name": "user-management-server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
 * 6. npm install express cors [express + cors install ek sathe]
 * 7. package.json file [scripts object e set] "start": "node index.js"
 * 8. create index.js
 * 9. create .gitignore file [set node_modules]
 * 10. Next: Hello World
 * 11. express setup index.js file e
 * 12. cmd te ---> nodemon index.js [server run]
*/

/**
 * 1. create a post api on the server side
 * 2. client side send data via post
 * 3. set fetch method inside the fetch options (second parameter)
 * 4. options will have three things: method
 * 5. options will have headers: 'content-type': 'application/json'
 * 6. body: JSON.stringify(users)
 * 7. on the server side: don't forget to use express middleware
*/