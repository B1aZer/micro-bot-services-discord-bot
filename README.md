Discord Bot for GooDee.finance

## Goal

- [ ] DAO -> whitelist -> profit

## PriDE

- when to use events (listeners) one way, when to use requests (calls) two way
- os queue threshold
- reddit dunamic caching (on demand) 

## Startup / stability

- start logger / 5
- start twitter / 5
- ./activate => sign in to accouts server-twitter.log | ./post.sh to check
- start opensea-monitor / 3 => 4.5
- start database-mongo => 5
- start reddit-praw => 5
- start bot => 3 => 4.5 // fixed, crashes on pia renewal, can be fixed with unhandledRejection listener

## Now

- [ ] RESTART BOT
- [ ] define twitter keys in utils/config, remove from envs
- [ ] import v1 for image
- [ ] list all protal heads
- [ ] move all sharks to single account and list, magiceden? check all sol wallets
- [ ] check reserve wallet
- [x] featured collection with image / description ?
- [x] top 100 / random 1 / not in mention last week
- [x] get image, description. Featured nft collection once a day
- [x] linkedin
- [x] check ids in unfollow
- [ ] random images from praw
- [x] save logs for twitter-mentions, twitter-likes, twitter-follows
- [f] wl script, min 50 and sort by date? will be same data everyday
- [f] follow before posting on twitter
- [f] tw comment with emojus (see below), not spam, only valuable content
- [ ] useagent for mint script may be outdated
- [x] replace >> with >, iterate logs, cp prev to new, create (>) new
- [ ] announce tw in crypto channel discord
- [x] separate dir for logs? symlinks
- [ ] test from everyone perspective up
- [ ] lv6 follow, like, retweet
- [ ] lv7 10 invites
- [ ] 1000 followers => collections
- [ ] nice twiiter meesage  ws freebie
- [f] twiiter disc link, wp pass

#### Minor

- [ ] check all servers send email
- [ ] cp log rotation 2>/dev/null
- [ ] save to log all user servers
- [ ] make twitter names bold
- [ ] reactionsNeeded is not needed for react task
- [ ] precentage green below floor price opensea monitor
- [x] twiiter / discord invite levels
- [ ] opensea monitor, push to queue with max 5 times
- [ ] Market, market paper, give pass, possibly give coins as part of promotion
- [x] ??
- [x] Cron for some reason sends message on second try, remove ntf error to file
- [ ] setColor to dotenv
- [ ] praw,scraper have secrets in code, search secret, move dotenv
- [ ] Finish landing. Alternate enter method
- [x] use discord builder timestamps and mentions - https://discordjs.guide/popular-topics/builders.html#timestamps
- [ ] hide command - https://github.com/discordjs/discord-api-types/blob/83f29b692839cc51869bcafdaf387b68731e0a28/rest/v9/index.ts#L756

#### Completed

- [x] post whitelists. script?
- [x] MONITOR BOT
- [x] os monitor now works
- [x] twitter scripts move config to env
- [x] wl get log from server
- [x] log server save post {project, name, data}
- [x] sav all mentions => notinfile, notinids => follow /get loghserv => follow /post twserv
- [x] twitter scripts throw like whitelists (check server logs these errors) and save mentions
- [x] save all twitter-mentions
- [x] redo upcoming
- [x] top : mo : 10
- [x] recent : tu, th, subb : 5-10 : notIn: [0,1,2,3,4,5,6,7]
- [x] random : everyday : 10 : notIn: [0,1,2,3,4,5,6,7]
- [x] trending nft notin?
- [x] rewrite tw server access token from file on refresh
- [x] makerequest((client) => client.v2.do)
- [x] except log and repeat request 
- [x] get follows / save follows
- [x] follows script
- [x] unfollows script
- [x] tw server: Token was not refreshed!
- [x] refresh email
- [x] cron refresh
- [x] activate script all  3
- [x] opensea recent are ot working
- [x] pride (for inteview)
- [x] usernames: floor, mint, collections?
- [x] goodee @ add to each twit? check if its ok
- [x] variable timeout for 2 scripts
- [x] all accounts same info /name
- [x] activate => accounts => _air => env
- [x] create accounts chage ENV for tomorrow.js
- [x] python script to take file, remove duplicates, sort, parse nicely, count symbols
- [x] check twit top mints
- [x] /get twitter server: search recent for specified nft hashtag ?tag=NFT => post ids
- [x] /post like server twitter post ids => like
- [x] script like for each tweet id, random interval
- [x] recent collections not working?
- [x] queue for opensea ws, check if postings are recent
- [-] twitter activate resets all active tokens
- [x] add influencer from apes: https://twitter.com/0xskellymode, https://twitter.com/iakimihyb, https://twitter.com/jpeggler, https://twitter.com/MaisonGhost, https://twitter.com/NfThinks, https://twitter.com/SOLBigBrain, https://twitter.com/solplayboy, https://twitter.com/sainteclectic
- [x] fix faq => check stable => 
- [x] nice discord meesage with freebie => 
- [x] market in servers
- [x] freebie - private
- [x] warning wallet not connected
- [x] warning not eff funds
- [x] 50 coins per level
- [x] discord message in channels
- [x] discord right panel roles
- [x] send all eth back
- [x] timeout commands
- [x] check task command permissions/levels
- [x] check bot commands permissions
- [x] check community commands permissions
- [-] random nft
- [x] wtf with coins at right click command rank?
- [x] start marketing discord/ twitter
- [x] replace | with |||, remove unicode from name in logs?
- [x] refactor bot tasks, make base calss and extend, w o wo json
- [x] fix motivate
- [x] finish levelup
- [X] complete lv1
- [x] coins, db => 
- [x] refactor paid commands =>
- [x] require coins =>
- [x] UI => server => discord
- [x] certbot
- [x] disord button => js bundler => ethers
- [x] contract => bot event
- [x] test in bootsrap complied repo UI => move to flask server bundle
- [x] payment UI and code, $10 - 100 coins, 10 each use, Range Inputs from 100 to 10000 =>
- [x] complete contract =>
- [x] make listener in bot, modify coins in db => 
- [x] complete payment
- [x] restirc "info" channel to read only
- [x] max number of usages / lim
- [x] status command / user menu / lelevup UI
- [x] add role routine add on xp. how we count tasks there were not complete? Split to lv1 subtasks and count after exec
- [x] log user commands
- [x] upload to rinkeby =>
- [x] message newtork
- [x] cp script bundle
- [x] mv handler
- [-] move eslint folder
- [x] replace discord url, script?
- [x] upload to server
- [x] do not write blank files, rm if blank?
- [x] add bot price in description
- [x] send discord embed for coins in log channel
- [x] buy command
- [x] bot reward as lv2
- [x] twitter check
- [x] brwowser util
- [x] check commands access levels
- [x] mainnet?
- [x] ---
- [x] refactor levelup levels, commands, rank command num of commands
- [x] levelup json
- [x] coins in levelup are static
- [x] log levelups
- [x] ---
- [x] object.assign in tasks base class
- [x] add 2nd other tasks
- [x] add /meme command
- [x] check bots commands only ephemeral
- [x] multiple entry command
- [x] funny sublass
- [x] sublclass motivate
- [x] do not submit same message
- [x] levelup, you gained new role `role`
- [x] test
- [x] 0xaA321A715e08eF44EeE8CadB1282688D9dc683cf
- [x] test from 0
- [f] https://stackoverflow.com/questions/72048570/403-error-when-setting-application-command-permissions-on-discord
- [x] cleanup reddit praw
- [x] ---
- [x] remove <> from scripts, add in bot presentation
- [x] log all sensitive data, start should all log to log
- [+] each role gives 100 coins + see whatsup (levels(new channels), new tasks (quests), command drop (free), coins drop)
- [x] Finish etherscan scraper, write file, schedule 1h
- [x] Scrap upcoming, with tw,disc count, schedule 1 day
- [x] Finish twitter, schedule
- [x] Opensea monitor for new listings (floor price), new collection listings (9)daily)
- [x] add links to embeds
- [x] fix python twitter
- [x] enter command
- [-] Roles, Screener. 4 commands free by screener questions. Getting enlighted role (1nd from 2nd tier gives 100 coins and opens marketing tasks)
- [x] paid commands always visible in !help
- [-] Check permissions for channels
- [x] Finish payment, coins
- [x] Commands for each bot
- [-] 5 bot commands and 5 images (motivate, memes, pepe, culture, random nft (https://docs.opensea.io/reference/retrieving-orders))
- [-] 5 roles (crypto dumbass, crypto nomad, crypto lost mmoney, crypto junkie, cryptographer)
- [x] 5 commands (upcoming, recent, minting, twitter, whitelist)
- [x] add tasks, task are commands in different dir
- [x] prepare discord first
- [x] upload to mainnet?
- [x] Test to team + jonny
- [x] commands timeout and max number of us
- [x] randomize whitelists (in command)
- [x] 0.185 b1z, 0.081 
- [x] 3.905 / 2 = 1.9525 
- [x] 2.16402 + 1.9525 = 4.11652
- [x] 4.11652 - 0.185 - 0.081 - 1 = 2.85052
- [x] 2.85052 / 5 = 0.570104
- [x] mine = 0.570104 + 0.185 = 0.755104 + 2.3 = 3
- [x] pciky = 0.570104 + 0.081 = 0.651104 387259264034668545
- [x] screener, lvlup, 

## Tests

- http://localhost:3044/get?name=twitter-following&ids=[1,2,3]&limit=40&order=date&thresh=100
- http://localhost:3044/get?name=prominent-whitelists&order=random&limit=1
- http://localhost:3022/followers?username=goodeefi&userId=1508796104254578690

## Levels

- dummy level1. screener => bot with os monitor group
- newcomer level2. funny , 5 images => /funny reward
- first timer level3. motivate, 1 like => motivate
- newbie level4. meme 3 likes => meme
- noob level5. culture 5 likes => culture

## Discord

chrome://inspect/#devices
https://discord.com/developers/applications/959176510118453301/oauth2/url-generator
1. you appeared here and dont know what to do. Experiment!
2. bot is the only way
3. design dark souls
1. You do not talk about CLUB.
2. Obey rule 1.
3. only share with whoom you trust
- add some discord channels, see ohm, concave etc.
- check category permissions: bot only have access to bot, check other roles, channels should be synced with category
- b1z
- nft talk, defi talk, whitelists, twitter inf, discords

## Auth

- [ ] linktree - goodeefinance
- [ ] https://linktr.ee/admin
- [ ] ThisIsNotATest - pdf to server
- [ ] see discord doc
- [ ] https://account.mongodb.com/account/login?n=%2Fv2%2F6247624b23c8387f5fc7402a%23metrics%2FreplicaSet%2F62476363d3e7f33ae4fe8221%2Fexplorer%2Fgoodeedb%2Fusermodels%2Ffind

## twitter

- [ ] tw playground https://oauth-playground.glitch.me/?id=tweetsRecentSearch&params=%28%27query%21%27%23NFT+lang%3Aen+-is%3Aretweet+-has%3Alinks%27%7Ebody%21%27%27%7Epath%21%28%29%7Emax_results%21%27100%27%7Etweet.fields%21%27%27%29_
- [ ] tw query: https://developer.twitter.com/en/docs/twitter-api/tweets/search/integrate/build-a-query
- [ ] tw hash analytics: https://www.hashtags.org/analytics/nft/
- [ ] tw trends https://trends24.in/united-states/
- [ ] tw search annotations https://developer.twitter.com/en/docs/twitter-api/annotations/overview
- [ ] tw search metrics (likes, retweets)
- https://developer.twitter.com/en/portal/dashboard
- [ ] 1phone 10 accounts
- [ ] 🗿 🐬 🤴 🐋👴🐨🌝➿🤶🐳
- [ ] ➵🚏👁⏸🌩🔖📋🆚🎟🏏
- [ ] 🙈🐶🙊🐾😹🐱🐝🐐🐰🐍
- [ ] only register with email and add phone later or acc will be locked
- [x] local map storage
- [x] POST /refresh cron job 15 minutes
- [x] start script that run express and /activate
- [x] /activate runs pupeteer allow on twitter app
- [x] client get working access tokens from db and makes request (client repopulated before each request) 

## Reddit

- https://www.reddit.com/prefs/apps?newUser=true&showOnboarding=true&signup_survey=true
- 
## Monitor

- htop (mem)
- ncdu (space)
  
## Collections

- https://twitter.com/AkumuDragonz
- https://twitter.com/greatgoatsnft
- https://twitter.com/VinceniaNft
- https://twitter.com/TrippinApeNFT
- https://twitter.com/TrippyKidzNFT
- https://twitter.com/oakparadisenft

## BOT ideas

- news
- any good NFT project has "You might like projects on the side" on twitter
- ai to find projects?
- discord emoji and stickers
- imgur images
- tumblr

## hardcoded

- channel id in bot-discord/tasks/data/lv2.json

## Coding LOLS

#### await

can be used wo main function in browser (node --inspect)

#### async

requires catch in most cases

#### redirect error

`>>` or `>` will redirect standard output but error will still be visivle in console. Convenient.

#### env

you should put env to the project that importing files
process that running file will only look in current folder not in imported

#### Semilocns
```
    client.roles = rolesManager.roles.cache
    ['ethereum_handler', 'opensea_handler'].forEach(handler => {
        require(`../handlers/${handler}`)(client);
    });
```
Calls first statemns with array as arg wo semicolon
```
  return log.split('\n')
            // shuffle
            .sort((a, b) => 0.5 - Math.random())
            .slice(0, this.count)
            .sort((a, b) => new Date(b.split(this.separator)[2].trim()) - new Date(a.split(this.separator)[2].trim()))
```
will only return first statement wo semicolon

## Bots Resources

- [ ] https://www.niftyriver.io/analytics/whitelists
- [ ] https://nftgo.io/whale-tracking/mint
- [ ] https://www.nftscan.com/analytics/discover
- [ ] random nft https://nfty.dev/

## Marketing

- [ ] Give password to discord with tools. So we are wanting to launh unique defi project, see WP, if you agree give us info and we give you oass to closed discord.
- [ ] Push WP to server and protect with pass
- [ ] 1. What project is about?
- [ ] 2. What discord is about?
- [ ] 3. What we are looking for? We are looking for projects..
- [ ] 4. Who supports us?
- [ ] PS. Kindly note that all information I share with you is private and not inteded for public disclosure. Thank you.
- [ ] 5. Please let me know if you will be willing to participate. I will send pass and sample of announcement other project used for us. You can use it and come up with your own.

## End of May Launch

- [ ] Landing cave of secrets pass / pay
- [ ] reddit service
- [ ] Screener tasks. Like list your favourite nfts. What non-released project you think will make it.
- [ ] TRUSTable Marketing letter
- [ ] Voting command for nfts
- [ ] ERC20 token
- [ ] Boost Xp
- [ ] Withdraw xp-> token?

## Ideas

- [ ] Discord is a new web
- [ ] Crypto discord with influncer search bot
- [ ] Sneakers discord and bot
- [ ] Discord search engine with indexer bot
- [ ] remove bs font

## Tasks

- [x] have the same structure as commands
- [ ] description is a embed
- [-] separate script to bundle tasks into JSON db
- [ ] remove rollup eb2d9cf7c21be76bc44672ffa80bf6188f1e9985
- [ ] check commands async ex
- [ ] redo reddit parsing, separate service and websocket?
- [ ] check discord 25, add 2 roles, summarize xp
- [ ] command tasks id or available or new or cat

#### timeline (looking to 4 weeks)

- [ ] Screener -> all question one time, can be done in a day
- [ ] Marketing timeout 6h -> 24h one micro-level at least, 2-3 days total, 5 preferrably
- [ ] Community -> depend on user intercation, 5 pref
- [ ] Art, create real art, 5 pref
- [ ] Code, create real code, 5 pref
- [ ] Shop. 5-7 days
- [ ] Can create req(large XP) puzzles to delay

#### Scrapper

- https://github.com/NotYourGuy/scraperr
- https://www.reddit.com/r/DataHoarder/comments/d400y5/reddit_image_scraper/

#### Shop

- [ ] place to spend xp points
- [ ] 40 pages 20/20?
- [ ] n - amount of mintable papers, can be adjusted in real time.
- [ ] Legend role gove access to mint
- [ ] sell(list), buy, send, (showoff)
- [ ] 2 of 4 commands give password to encryption
- [ ] user have to guess how to decrypt with phrase
- [ ] 0.1 per level per 5 roles ~ 2-3 days

#### Legend role, shop access

- [ ] Mint 50k
- [ ] sell,buy,show,send each 5k
- [ ] hint 1, requre crypto task to solve
- [ ] hint 2
- [ ] hint 3

#### White role, wp access

- [ ] show password
- [ ] vote coll_id xp_amoune
- [ ] list supported collections

#### Cypher

- [ ] Uncommon cipher
- [ ] enigma online?
- [ ] uncommon text encryption
- [ ] https://crypto.stackexchange.com/questions/41529/implementing-symmetric-encryption-algorithms-with-whole-words
- [ ] http://rumkin.com/tools/cipher/

#### 2 weeks in (discord launch after)

- [ ] Check if successfull
- [ ] talk to sync
- [ ] landing page by figma design
- [ ] nft design art
- [ ] staking contract ala air
- [ ] erc20 token launch, non tradable, swappable (? to real token later ?)

#### 1 month - 14 may deadline

- [x] Easy to write tasks connected to flexible answers.
- [x] XP systems with horizontal and vertical leveling. Vertical measured by xp, Horizontal by ranks (number of tasks).
- [x] 5 categories tasks: Market, Comm, Art, Code, Boost. 1month span
- [x] Boost implementation.

#### NEXT

- [ ] Whitepaper longe
- [ ] shop? discordnft? currency as xp?
- [ ] vote
- [ ] see 2 weeks

#### Boost

- [ ] Boost function open browser
- [ ] Discord authenticate -> get user detials
- [ ] Deployed contract
- [ ] UI, desired xp / number of levels
- [ ] pay to contract with guild/userId
- [ ] emit guild/userId event and amount spent
- [ ] listen in app -> provide xp and send DM
- [ ] "maximum" button 0.5 eth straight to the shop level

#### Main

- [ ] Colldown for command argument
- [x] add categories

#### Leveling

###### Tasks

General timout for tier 1 tasks - 6h.
This makes tier 4-5 tasks optional.
Tier 4-5 tasks aimed at project success.

###### Screener crypto

- [ ] favorite project, influencer
- [ ] other discords
- [ ] ---
- [4] unique idea for nft
- [5] tokenomics

###### Marketing

- [ ] tweet
- [ ] reddit
- [ ] tweet with mention
- [4] original image
- [5] marketing video

###### Community

- [1] Use one of the ! commands
- [3] Help other
- [5] Teem up

###### Art

- [ ] liked work
- [ ] your work
- [4] logo work
- [5] nft idea

###### Code

- [ ] Solve simple task
- [ ] Sole HR task, submission channel
- [3] node task
- [4] solidity task
- [5] Create NFT??

###### Roles/Channels

- [ ] Marketing
- [ ] Community building
- [ ] Art
- [ ] Dev
- [ ] Booster
- [ ] Whitepaper

## v0

#### Donation -> Boost

- [ ] Donation gives you XP
- [ ] Donate n eth -> receive n xp
- [ ] Donoh role

#### XP

- is a local currency. No way in code it should check level xp, only highest roles. Except assign
- only solving tasks in current category gives roles. OR. highest categories have higher bounty.
- category roles by solving a lot of tasks inside category

#### Commands

- [x] Motivation
- [ ] Funny
- [ ] Creepy
- [ ] Art/Photo
- [ ] Games
- [ ] Memes
- [ ] Culture
- [ ] VR
- [ ] https://www.reddit.com/r/generative/ and p5js

###### System

- [ ] modmail
- [ ] nominate/givexp

#### Tasks

###### Marketing

- [ ] Twitter x 10 x 24h?
- [ ] Medium
- [ ] Tiktok
- [ ] Reddit
- [ ] YouTube

###### Dev

- hackerrak by submit date

###### Art

- Memes
- SVG

#### Questions

- [x] Why do we need need await profiles?
- [x] !? messages delayed
- [ ] loLowerCase for roles and commands
  
#### Discord

- [x] All channels hidden by default
- [ ] Read only channels
- [ ] Bot content intent https://support-dev.discord.com/hc/en-us/articles/4404772028055

#### Files

- [ ] permissions.js serverId move to .env
- [ ] messageCreate.js mpve prefix to .env
- [ ] help js admin
- [ ] answer 6 horus delay

#### Goals

- [x] answer
- [x] xp system
- [ ] leaderboard
- [ ] profile xp image ?
- [ ] discord NFT as embed

#### Sisters

- https://thedefiant.io/amm-nfts/


#### Discord Accs

347653
blaze.imba
kwerkee12
dmitry.branitskiy1@gmail.com - disabled
dmitrii.branitskii2 - discord buy accs contact (Gerb#3719)
dmitrii.branitskii3
dmitrii.branitskii4

#### Resources

- [ ] vstudio code vim completion https://github.com/neoclide/coc.nvim
- [ ] effective nft launch (https://www.paradigm.xyz/2021/10/a-guide-to-designing-effective-nft-launches)
- [ ] mongodb Sam google account
- [ ] [discord python add to server with api](https://dev.to/dandev95/add-a-user-to-a-guild-with-discord-oauth2-in-python-using-requests-595f)
- [ ] jqery template Defining a HTML template to append using JQuery (https://stackoverflow.com/questions/18673860/defining-a-html-template-to-append-using-jquery)
- [ ] Pupeteer OS Scraper - https://github.com/dcts/opensea-scraper/blob/main/src/functions/offers.js
- [ ] Global search bot - https://github.com/discord/discord-api-docs/issues/663
- [ ] hn hiring - https://news.ycombinator.com/item?id=31235968
- [ ] cheap service and phones - https://www.reddit.com/r/NoContract/comments/rhtnbk/my_cell_service_advice_tree_cheapest_rate_plan/
- [ ] Dev portal https://discord.com/developers/applications/959176510118453301/oauth2/url-generator
- [ ] Badges - https://tibi4.com/discord-role-icons/
- [ ] NFT Discord Bot https://github.com/lucid-eleven/nft-discord-bot
- [ ] Nice looking code bot https://github.com/discord-tickets/bot/tree/main/src
- [ ] Better discord ranking https://github.com/Tomato6966/better-discord-ranking-system
- [ ] Amamri old bot https://github.com/litochee/AmariBot/blob/master/app.js
- [ ] Music bot https://github.com/SudhanPlayz/Discord-MusicBot/blob/master/structures/DiscordMusicBot.js
- [ ] Discord leveling system https://www.youtube.com/watch?v=Moma4FjzHQU