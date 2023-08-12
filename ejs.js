// const express= require('express');
// const app= express();
// app.set('view engine','ejs')
// app.get('/pro',(req,res)=>{
//     res.render('profile')
// })
// app.listen(4500);
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/profile', (req, res) => {
    const user=
       { name:"Hassan",
        age: 22}
    
  res.render('profile',{user});
});

app.listen(4500, () => {
  console.log('Server is running on port 4500');
});
