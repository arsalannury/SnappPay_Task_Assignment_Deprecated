<h1 style="text-align: center;">SnappPay Assignment</h1>

<p>React Js application based on Webpack and Babel without <strong>CRA</strong> configuration. A <strong>SPA</strong> app for snapp passengers to manage their contacts list</p> 

![Snapp Pay Logo!](./src/assets/images/download.jpg "logo")

-----------------
<h2>To run this app you should follow this guide</h2>

<ol>
  <li>run server from <strong>backend folder</strong> in <strong>snapppay-assignment</strong> directory</li>
  <li>run <code>npm install</code></li>
  <li>run <code>npm start</code></li>
  <li>run <code>npm test</code> to run unit tests</li>
</ol>

----------------

<h3>Branches</h3>

<p>the main branch which updated with latest changes is <strong>master</strong> branch</p>

---------------

<h4>Api Endpoints</h4>

<p>The base url is <code>http://localhost:1337</code></p>
<strong>GET -> /passenger</strong>
<strong>GET -> /passenger/::passengerId</strong>
<strong>GET -> /passenger/?where={"first_name":{"contains":"Jabez"}}&sort=createdAt DESC&limit=30</strong>
