// load our app server using express somehow
const express =require('express')
const app = express()

app.get("/",(req,res)=>{
	console.log("responding to root route")
	res.send("Hello from Root")
})

//localhost:3003
app.listen(3003,() => {
console.log("Server is up and listening on 3003....")
})
