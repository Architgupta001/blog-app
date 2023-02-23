const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended:true})) 
app.use(express.static('public'))

const homeStartingContent = "Lorem ipsum dolor sit amet, ligula fusce ad purus, eleifend a fusce suspendisse. Ultrices malesuada pulvinar rutrum, ut pulvinar elit ipsum congue, aliquam nonummy non elementum aliquam. Sit nibh lacus donec erat, libero morbi amet integer lectus, nec molestie justo vestibulum. Mauris et tempor nunc et, dolor auctor aenean nec. Sed elit integer fringilla mauris, aliquam ipsum luctus quisque ut, neque nulla ridiculus vel, turpis erat massa lectus pellentesque. Et quis viverra integer a, quisque porta vulputate scelerisque magna. Libero vestibulum odio mi, eu egestas ac arcu et.";
const aboutStartingContent = "Montes sagittis tincidunt dolor, id arcu praesent luctus in, ut donec ac ac. A at suspendisse pellentesque nullam, proin ligula est consectetuer. Aenean in wisi quis adipiscing, sint maecenas ipsum pharetra, dolor nulla eget faucibus at. Velit sollicitudin ut wisi, egestas praesent diam elit, justo nam malesuada aliquam, id nulla eros egestas. Cras luctus in pulvinar, at tortor sodales lorem, iaculis massa in elit, turpis sit dolores mi duis. Erat libero bibendum elit, mauris fuga sed tortor at. Nulla justo dui ante ut, metus sodales arcu ligula.";
const contactStartingContent = "Lobortis amet inceptos lacinia venenatis, venenatis nulla ultricies egestas. A phasellus nullam sed feugiat, massa est quam ut, integer enim est aliquam quam. Commodo aliquam in semper, dictum nascetur vestibulum ut at. Ut taciti adipiscing dictum aenean, iaculis ut justo malesuada magnis. Dapibus scelerisque vel suspendisse, et ipsum consectetuer mi. Sed nulla vitae maecenas, ut sodales integer orci nulla. Suspendisse aliquam nunc feugiat pellentesque, wisi ante donec ultrices, ante sit dapibus in tempor, etiam neque ut proin nullam.";
let posts =[];

app.get('/',(req,res)=>{
    res.render('home',{homeContent:homeStartingContent,publishPosts:posts});
})

app.get('/about',(req,res)=>{
    res.render('about',{aboutContent:aboutStartingContent});
})

app.get('/contact',(req,res)=>{
    res.render('contact',{contactContent:contactStartingContent});
})

app.get('/compose',(req,res)=>{
    res.render('compose');
})

app.post('/compose',(req,res)=>{
    const post = {
        title: req.body.postTitle,
        body: req.body.postText
    } 
    posts.push(post)
    res.redirect('/')
})


app.listen(3000,()=>{
    console.log("server started on port 3000....");
})