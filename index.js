const express = require('express')
require('dotenv').config()
const app = express()
const port = 4000
const gitData={
    
        "login": "NaVIn69",
        "id": 108820077,
        "node_id": "U_kgDOBnx2bQ",
        "avatar_url": "https://avatars.githubusercontent.com/u/108820077?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/NaVIn69",
        "html_url": "https://github.com/NaVIn69",
        "followers_url": "https://api.github.com/users/NaVIn69/followers",
        "following_url": "https://api.github.com/users/NaVIn69/following{/other_user}",
        "gists_url": "https://api.github.com/users/NaVIn69/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/NaVIn69/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/NaVIn69/subscriptions",
        "organizations_url": "https://api.github.com/users/NaVIn69/orgs",
        "repos_url": "https://api.github.com/users/NaVIn69/repos",
        "events_url": "https://api.github.com/users/NaVIn69/events{/privacy}",
        "received_events_url": "https://api.github.com/users/NaVIn69/received_events",
        "type": "User",
        "site_admin": false,
        "name": "navin",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 2,
        "public_gists": 0,
        "followers": 0,
        "following": 1,
        "created_at": "2022-07-06T15:17:47Z",
        "updated_at": "2024-06-24T13:52:50Z"
      
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about',(req,res)=>{
      res.send('About page')
})
app.get('/login',(req,res)=>{
      res.send('<h1>please login</h1>')
})
app.get('/github',(req,res)=>{
        res.json(gitData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})