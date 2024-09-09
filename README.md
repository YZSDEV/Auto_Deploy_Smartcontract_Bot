# Auto_Deploy_Smartcontract_Bot
BOT for deploy smart contract on All chains EVM

You need NVM installed to run this BOT

Instructions :
Install requierements :
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
source ~/.nvm/nvm.sh
nvm install node
```

Clone this Repository
```
git clone https://github.com/YZSDEV/Auto_Deploy_Smartcontract_Bot.git
cd Auto_Deploy_Smartcontract_Bot
```
Install Dependencies
```
npm install
```

Edit ENV file to set up your Private key & RPC URL
```
nano .env
```
(Save with command) Ctrl+x , Y , Enter

Now Open the deploy.js to set up ABI & Bytecode Of your Smartcontract
```
nano deploy.js
```
(Save with command) Ctrl+x , Y , Enter

Run this bot with command
```
node deploy.js
```
