<h1 align="center">React Redux Router v4 Saga boilerplate</h1>
<p align="center">This is a Docker Compose boilerplate for React with yarn, based on Alpine Linux image</p>
<p align="center">
  <img width="150" height="150" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWDWWMBh8n7MPfnXSxV7u6XGLybLQNrF52NjoemwP1iLPqwnkMQQ" alt="Linux Alpine logo">&nbsp;
  <img width="150" height="150" src="https://nodejs.org/static/images/logo-light.svg" alt="Node.js logo">&nbsp;
  <img width="150" height="150" src="https://yarnpkg.com/assets/search/ico-yarn.svg" alt="Yarn logo">&nbsp;
  <img width="150" height="150" src="https://raw.githubusercontent.com/docker/compose/master/logo.png" alt="Docker compose logo">
  <img width="150" height="150" src="https://cdn-images-1.medium.com/max/1200/1*N_6DIrFp3b3qv3WTDohqxg.png" alt="React logo">
</p>

---

## Installation:
1. Clone repository:
<pre class="command-line">
    <span class="command">git clone https://github.com/EliFuzz/react-redux-router4-saga.git</span>
</pre>
2. Go to folder:
<pre class="command-line">
    <span class="command">cd react-redux-router4-saga/docker</span>
</pre>
3. Copy and rename `.env_bak` to `.env`:
<pre class="command-line">
    <span class="command">cp .env_bak .env</span>
</pre>


## Settings:
`.env`:
- NODE_PORT=**3000**
- NODE_ENV=**development**

`docker/dev/Dockerfile`:
- FROM node:**10.9.0**-alpine - you can change node version. Look for reference: [Docker Hub](https://hub.docker.com/_/node/)
