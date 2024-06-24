import express from 'express';
import bodyParser from 'body-parser';
const app = express();

const PORT = 8000;

const blogList = [];

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

// get all blogs
app.get('/blogs', (req, res) => {
    return res.status(200).json({
        data: blogList,
        success: true,
        name: "Tapasya"
    })
})

//craeting new blogs

app.post ('/blogs' , (req, res) => {
    console.log(req.body);
    blogList.push({
        title: req.body.title,
        content : req.body.content ,
        id : Math.floor(Math.random() *1000)
    })

    return res.status(201).json({
        success:true
    });
})


// get single blog

app.get("/blogs/:title" , (req,res) => {

    const result = blogList.filter((blog) => blog.title == req.params.title);
    return res.status(200).json({
        data:result ,
        success:true,
    });
});

// console.log(app)

app.listen(PORT, () => {
    console.log(`Server is listening on PORT http://localhost:${PORT}....`);
})