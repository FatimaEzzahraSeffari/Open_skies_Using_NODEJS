
const express = require("express");

const User = require("./model/User");
const clb  = require("./model/join");
const clubmsg = require("./model/cmsg");
const Msg = require("./model/contamsg");
const Admin = require("./model/admin");
const Add = require("./model/add");
const app = express();
app.use(express.static("public/img"));
app.use(express.static("public/css"));

const { name } = require("ejs");
const bodyParser = require('body-parser'); 
const { default :mongoose}=require("mongoose");



app.use(bodyParser.urlencoded({ extended: true }))   

app.get('/', function(req, res) {
    res.render("index.ejs")
    });
    app.get('/home', function(req, res) {
        res.render("index.ejs")
        });
    app.get('/login', function(req, res) {
        res.render("login.ejs")
        });
        app.get('/Signup', function(req, res) {
            res.render("Signup.ejs")
            });
            
            

            app.get('/clubs', function(req, res) {
                res.render("clubs.ejs")
                });
                app.get('/about', function(req, res) {
                    res.render("about.ejs")
                    });
                app.get('/contact', function(req, res) {
                    res.render("contact.ejs")
                    });
                    app.get('/join', function(req, res) {
                        res.render("join.ejs")
                        });

                        app.get('/Message', function(req, res) {
                            res.render("Message.ejs")
                            });

                            
 
                                app.get('/singupad', function(req, res) {
                                    res.render("singupad.ejs")
                                    });

                                    app.get('/loginad', function(req, res) {
                                        res.render("loginad.ejs")
                                        });

                                    
                                       
                                        app.get('/affichage', function(req, res) {
                                            res.render("affichage.ejs")
                                            });
                                           
                                            
                                            app.get('/memberstable', (req,res) => {
                                                User.find({},(err,items)=>{
                                                    res.render("memberstable.ejs", { User: items})
    
                                                })
                                            })
                                       
                                            app.get('/adminstable', (req,res) => {
                                                Admin.find({},(err,items)=>{
                                                    res.render('adminstable.ejs', { Admin: items})
    
                                                })
                                            })
                                        
                                            app.get('/jointable', (req,res) => {
                                                clb.find({},(err,items)=>{
                                                    res.render('jointable.ejs', {clb: items})
    
                                                })
                                            })
                                       
                                            app.get('/clubsmsgtable', (req,res) => {
                                                clubmsg.find({},(err,items)=>{
                                                    res.render('clubsmsgtable.ejs', {clubmsg: items})
    
                                                })
                                            })
                                        
                                            app.get('/msgmembertable', (req,res) => {
                                                Msg.find({},(err,items)=>{
                                                    res.render('msgmembertable.ejs', {Msg: items})
    
                                                })
                                            })
                                            app.get('/add', function(req, res) {
                                                res.render("add.ejs")
                                                });
                                                app.get('/addclubtable', (req,res) => {
                                                    Add.find({},(err,items)=>{
                                                        res.render('addclubtable.ejs', {Add: items})
        
                                                    })
                                                })
                                                
                               //members Edit  
                                            app.get('/edit/Userr/:id',(req,res,next)=>{
                                                console.log(req.params.id);
                                                User.findOne({_id:req.params.id},req.body,{new:true},(err,docs)=>{
                                                    if(err){
                                                        console.log("can't retreive data because db error");
                                                        next(err);
                                                    }else{
                                                        console.log
                                                        res.redirect('/edit/User/'+req.params.id);
                                                    }
                                                });
                                                
                                                })   

                                                app.post('/edit/Userr/:id',(req,res,next)=>{
                                                 
                                                   User.findOneAndUpdate({_id:req.params.id},req.body,(err,docs)=>{
                                                        if(err){
                                                            console.log("somthing wrong to update this");
                                                            next(err)
                                                        }else{
                                                            res.redirect('/memberstable')
                                                        }
                                    
                                                });
                                              
    
                                            });      
                                            app.get('/edit/User/:dd', (req, res) => {
                                                User.findOne({_id:req.params.dd},(err,item)=>{
                                                res.render('edit.ejs', { id:item._id,firstname:item.firstname,lastname:item.lastname,phonenumber:item.phonenumber,
                                                    email:item.email,password:item.password,retypepassword:item.retypepassword,school:item.school,Interests:item.Interests,
                                                    motivation:item.motivation,cb1:item.cb1
                                                 })
                                            })
                                        })




                                         //admin Edit  
                                         app.get('/edit/Adminn/:id',(req,res,next)=>{
                                            console.log(req.params.id);
                                            Admin.findOne({_id:req.params.id},req.body,{new:true},(err,docs)=>{
                                                if(err){
                                                    console.log("can't retreive data because db error");
                                                    next(err);
                                                }else{
                                                    console.log
                                                    res.redirect('/edit/Admin/'+req.params.id);
                                                }
                                            });
                                            
                                            })   

                                            app.post('/edit/Adminn/:id',(req,res,next)=>{
                                             
                                               Admin.findOneAndUpdate({_id:req.params.id},req.body,(err,docs)=>{
                                                    if(err){
                                                        console.log("somthing wrong to update this");
                                                        next(err)
                                                    }else{
                                                        res.redirect('/adminstable')
                                                    }
                                
                                            });
                                          

                                        });      
                                        app.get('/edit/Admin/:dd', (req, res) => {
                                            Admin.findOne({_id:req.params.dd},(err,item)=>{
                                            res.render('editadmin.ejs', { id:item._id,firstname4:item.firstname4,lastname4:item.lastname4,phonenumber4:item.phonenumber4,
                                                email4:item.email4,password4:item.password4,retypepassword4:item.retypepassword4,cb2:item.cb2
                                             })
                                        })
                                    })


                                     //clubmsg Edit  
                                     app.get('/edit/clubmsgg/:id',(req,res,next)=>{
                                        console.log(req.params.id);
                                        clubmsg.findOne({_id:req.params.id},req.body,{new:true},(err,docs)=>{
                                            if(err){
                                                console.log("can't retreive data because db error");
                                                next(err);
                                            }else{
                                                console.log
                                                res.redirect('/edit/clubmsg/'+req.params.id);
                                            }
                                        });
                                        
                                        })   

                                        app.post('/edit/clubmsgg/:id',(req,res,next)=>{
                                         
                                            clubmsg.findOneAndUpdate({_id:req.params.id},req.body,(err,docs)=>{
                                                if(err){
                                                    console.log("somthing wrong to update this");
                                                    next(err)
                                                }else{
                                                    res.redirect('/clubsmsgtable')
                                                }
                            
                                        });
                                      

                                    });      
                                    app.get('/edit/clubmsg/:dd', (req, res) => {
                                        clubmsg.findOne({_id:req.params.dd},(err,item)=>{
                                        res.render('editclubmsg.ejs', { id:item._id,firstname1:item.firstname1,lastname1:item.lastname1,school1:item.school1,subject1:item.subject1,
                                         })
                                    })
                                })

                                       
                                //join club Edit  
                                app.get('/edit/clbb/:id',(req,res,next)=>{
                                    console.log(req.params.id);
                                    clb.findOne({_id:req.params.id},req.body,{new:true},(err,docs)=>{
                                        if(err){
                                            console.log("can't retreive data because db error");
                                            next(err);
                                        }else{
                                            console.log
                                            res.redirect('/edit/clb/'+req.params.id);
                                        }
                                    });
                                    
                                    })   

                                    app.post('/edit/clbb/:id',(req,res,next)=>{
                                     
                                        clb.findOneAndUpdate({_id:req.params.id},req.body,(err,docs)=>{
                                            if(err){
                                                console.log("somthing wrong to update this");
                                                next(err)
                                            }else{
                                                res.redirect('/jointable')
                                            }
                        
                                    });
                                  

                                });      
                                app.get('/edit/clb/:dd', (req, res) => {
                                    clb.findOne({_id:req.params.dd},(err,item)=>{
                                    res.render('editjoin.ejs', { id:item._id,firstname2:item.firstname2,lastname2:item.lastname2,email2:item.email2,CLUB:item.CLUB,why:item.why,
                                        Date:item.Date,cb:item.cb
                                     })
                                })
                            })

                                 //contact Edit  
                                 app.get('/edit/Msgg/:id',(req,res,next)=>{
                                    console.log(req.params.id);
                                    Msg.findOne({_id:req.params.id},req.body,{new:true},(err,docs)=>{
                                        if(err){
                                            console.log("can't retreive data because db error");
                                            next(err);
                                        }else{
                                            console.log
                                            res.redirect('/edit/Msg/'+req.params.id);
                                        }
                                    });
                                    
                                    })   

                                    app.post('/edit/Msgg/:id',(req,res,next)=>{
                                     
                                       Msg.findOneAndUpdate({_id:req.params.id},req.body,(err,docs)=>{
                                            if(err){
                                                console.log("somthing wrong to update this");
                                                next(err)
                                            }else{
                                                res.redirect('/msgmembertable')
                                            }
                        
                                    });
                                  

                                });      
                                app.get('/edit/Msg/:dd', (req, res) => {
                                    Msg.findOne({_id:req.params.dd},(err,item)=>{
                                    res.render('editcontact.ejs', { id:item._id,name:item.name,email3:item.email3, subject:item.subject,message3 :item.message3 ,
                                        
                                     })
                                })
                            })

                                     //add Edit  
                                 app.get('/edit/Addd/:id',(req,res,next)=>{
                                    console.log(req.params.id);
                                    Add.findOne({_id:req.params.id},req.body,{new:true},(err,docs)=>{
                                        if(err){
                                            console.log("can't retreive data because db error");
                                            next(err);
                                        }else{
                                            console.log
                                            res.redirect('/edit/Add/'+req.params.id);
                                        }
                                    });
                                    
                                    })   

                                    app.post('/edit/Addd/:id',(req,res,next)=>{
                                     
                                       Add.findOneAndUpdate({_id:req.params.id},req.body,(err,docs)=>{
                                            if(err){
                                                console.log("somthing wrong to update this");
                                                next(err)
                                            }else{
                                                res.redirect('/addclubtable')
                                            }
                        
                                    });
                                  

                                });      
                                app.get('/edit/Add/:dd', (req, res) => {
                                    Add.findOne({_id:req.params.dd},(err,item)=>{
                                    res.render('editadd.ejs', { id:item._id,name:item.name,president:item.president, Description:item.Description,myfile:item.myfile 
                                        
                                     })
                                })
                            })

                                           
                                            //delete function members table
                                            app.get('/delete/User/:id', function(req, res) {
                                                User.remove({ _id: req.params.id }, function(err, delData) {
                                                    
                                                    res.redirect('/memberstable')
                                                });
                                                
                                            })
                                             //delete function contact table
                                             app.get('/delete/Msg/:id', function(req, res) {
                                              Msg.remove({ _id: req.params.id }, function(err, delData) {
                                                    res.redirect('/msgmembertable')
                                                });
                                           
                                            })
                                            //delete function join table
                                            app.get('/delete/clb/:id', function(req, res) {
                                                clb.remove({ _id: req.params.id }, function(err, delData) {
                                                      res.redirect('/jointable')
                                                  });
                                             
                                              })
                                               //delete function clubmsg table
                                            app.get('/delete/clubmsg/:id', function(req, res) {
                                                clubmsg.remove({ _id: req.params.id }, function(err, delData) {
                                                      res.redirect('/clubsmsgtable')
                                                  });
                                             
                                              })
                                               //delete function admin table
                                            app.get('/delete/Admin/:id', function(req, res) {
                                                Admin.remove({ _id: req.params.id }, function(err, delData) {
                                                      res.redirect('/adminstable')
                                                  });
                                             
                                              })
                                               //delete function add table
                                            app.get('/delete/Add/:id', function(req, res) {
                                                Add.remove({ _id: req.params.id }, function(err, delData) {
                                                    
                                                    res.redirect('/addclubtable')
                                                });
                                            })
                                              //add new post method
                                              app.post("/add",(req,res)=>{ 
                                                const {name,president,Description, myfile,} =req.body; 
                                                console.log(req.body)
                                                Add.findOne({name:name},(err,add)=>{
                                                    console.log(add)
                                                    if(add)
                                                    { res.send({message:"club already exist"}) 
                                                }else 
                                                { 
                                                    const newAdd = new Add({
                                                        name: name,
                                                        president: president,
                                                        Description:Description,
                                                        myfile:myfile
                                                       
                                                        
                                                     });
                                                   
                                                console.log(newAdd)
                                                newAdd.save(err=>{
                                                        if(err){
                                                             res.send(err.message) 
                                                            }else { 
                                                                res.send({message:"sucessfull"})
                                                            }
                                                        })
                                                    }
                                                })
                                            }) 
                                              
                                                                    //signup post method
                    app.post("/Signup",(req,res)=>{ 
                        const {firstname,lastname,phonenumber,email,password,  retypepassword ,school,Interests,motivation,cb1} =req.body; 
                        console.log(req.body)
                        const A = /^[a-zA-Z0-9+_.-]+@+gmail.com+$/;
                        if (A.test(email)) {
                        User.findOne({email:email},(err,user)=>{
                            console.log(user)
                            if(user)
                            { res.send({message:"user already exist"}) 
                        }else 
                        { 
                            const newUser = new User({
                                firstname: firstname,
                                lastname: lastname,
                                phonenumber:phonenumber,
                                email:email,
                                password: password,
                                retypepassword :retypepassword,
                                school:  school,
                                Interests: Interests,
                                motivation: motivation,
                                cb1:cb1
                                
                             });
                           
                        console.log(newUser)
                        newUser.save(err=>{
                                if(err){
                                     res.send(err.message) 
                                    }else { 
                                        res.send({message:"sucessfull"})
                                    }
                                })
                            }
                        })
                    }else {
                        res.send('adress email invalid ');
                
                
                    }
                    })
            
             
                    
                    //login post method 
                    app.post("/login",(req,res)=>{
                        const {email,password} =req.body;
                        
                        User.findOne({email:email},(err,user)=>{
                            if(user){
                                if(password === user.password){
                                    res.render("clubs.ejs")
                                }else{
                                     res.send({message:"wrong credentials"})
                                      }
                                     }else{
                                         res.send("not register")
                                        }

                                     })
                                    });








                                     // join post method 
                                     app.post("/join",(req,res)=>{ 
                                        const {firstname2,lastname2,email2,CLUB,why,Date,cb} =req.body; 
                                        console.log(req.body)
                                        clb.findOne({email2:email2},(err,join1)=>{
                                           console.log(join1)
                                           if(join1)
                                           { res.send({message:"membre already exist"}) 
                                       }else {    
                                           const newclb= new clb({
                                               firstname2:firstname2,
                                               lastname2:lastname2,
                                               email2:email2,
                                               CLUB:CLUB,
                                               why:why,
                                               Date:Date,
                                               cb:cb
                                           });
                                           newclb.save(err=>{
                                               if(err){
                                                    res.send(err.message) 
                                                   }else{ 
                                                       res.send({message:"sucessfull"})
                                                    }
                                                   })
                                               }
                                           })
                                       });
                  

                      //club msg post method
                      app.post("/Message",(req,res)=>{ 
                       const {firstname1,lastname1,school1,subject1} =req.body; 
       console.log(req.body)
       clubmsg.findOne({firstname1:firstname1,lastname1:lastname1},(err,message)=>{
           console.log(message)
           if(message)
           { res.send({message:"msg already send"}) 
       }else 
       { 
           
           const newclubmsg= new clubmsg({
               firstname1:firstname1,
               lastname1:lastname1,
               school1:school1,
               subject1:subject1
              
           });
           newclubmsg.save(err=>{
                if(err){
                    res.send(err.message) 
                   }else{ 
                       res.send({message:"sucessfull"})
                   }
               })
           }
           })
       });

       //contact post method
       app.post("/contact",(req,res)=>{ 
           const {name,email3,subject,message3} =req.body; 
console.log(req.body)
Msg.findOne({email3:email3},(err,msg)=>{
console.log(msg)
if(msg)
{ res.send({message:"msg already send"}) 
}else 
{ 
const newMsg = new Msg({
    name:name,
    email3:email3,
    subject:subject,
    message3:message3
   });
   newMsg.save(err=>{
       if(err){
            res.send(err.message) 
           }else{ 
               res.send({message:"sucessfull"})
           }
       })
   }
}) 
});



//signupad post method
app.post("/singupad",(req,res)=>{ 
    const {firstname4,lastname4,phonenumber4,email4,password4,  retypepassword4 ,cb2} =req.body; 
     console.log(req.body)
     const re = /^[a-zA-Z0-9+_.-]+@+admin.com+$/;
     if (re.test(email4)) {
     Admin.findOne({email4:email4},(err,admin)=>{
            console.log(admin)
            if(admin)
            {
                 res.send({message:"admin already exist"}) 
        }else 
        { 
            const newAdmin = new Admin({
                firstname4: firstname4,
                lastname4: lastname4,
                phonenumber4:phonenumber4,
                email4:email4,
                password4: password4,
                retypepassword4 :retypepassword4,
                cb2:cb2
                
             });
           
        console.log(newAdmin)
        newAdmin.save(err=>{
                if(err){
                     res.send(err.message) 
                    }else{ 
                        res.send({message:"sucessfull"})
                    }
                    
                })
            }
        })
    }else {
            res.send('you are not admin ');
    
    
        }
        })

 

    //loginad post method 
    app.post("/loginad",(req,res)=>{

        const {email4,password4} =req.body;
        Admin.findOne({email4:email4},(err,admin)=>{
            if(admin){
                if(password4 === admin.password4){
                    res.render("affichage.ejs")
                }else{
                     res.send({message:"wrong credentials"})
                      }
                     }else{
                         res.send("not register")
                        }
                     })
                    })
                     



                    

                                     
app.listen(5000, () => {
console.log("Server is Running")
});