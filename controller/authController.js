const multer = require('multer');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const User  = require('../model/model');
const sec = 'shhhhhhhhhhhhhhhhhhhtttttttttttttttttttyyyyyyyyyyyyyy'
const mongodb = require('../helper/Helper');
const db = require('../helper/Helper');
const storageController = require('../controller/storageController')




const signup = function(req, res){
    const user = new User(req.body)
    user.save((err)=>{
        if (err) {
            res.status(400).send(err);
          } else {
            res.send('User created');
          }
    })
}

const updateuser = function (req, res) {
    console.log(req.email)
    User.findOneAndUpdate({email: req.email}, {email: req.body.email}).then((response)=>{
    if(response){
        let email = req.body.email
        var token = jwt.sign({
            email: email,
        }, sec);
        return res.status(200).json({
            message: "updated successfully !",
            token
        })
    }else{
            return res.status(404).json({
                message: "not successfull!",
            })}
        })
    }   

// const uploadImage = function(req, res){
//   storageController.upload(req,res, (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         const newimage =  new User({
//             name: req.body.name,
//             Image: {
//                 data: req.file.filename,
//                 contentType: 'image/jpg'
//             }
//         })
//         newimage.save()
//         .then(()=>{
//             res.send("successfully uploaded")
//         })
//         .catch(()=>{
//             res.send("not successful") 
//         })
//     }
//   })
// }

// const upload = multer({
//     storage: multer.diskStorage({
//       destination: async function (req, file, cb) {
//         let dir = "uploads/"+req.firstname;
//         if (!fs.existsSync(dir)){
//           await fs.mkdirSync(dir, {recursive: true}, err => {});
//         }
//         cb(null, dir);
//       },
//       filename: function (req, file, cb) {
//         console.log(file);
//         let extenstion = file.originalname.split('.')
//         cb(null, file.fieldname + "-" + Date.now() + "."+[extenstion[1]]);
//       },
//     }),
//   });

// const upload = function(){
//  multer({
//     storage: multer.diskStorage({
//       destination: async function (req, file, cb) {
//         let dir = "./uploadsImages/"+req.User;
//         if (!fs.existsSync(dir)){
//           await fs.mkdirSync(dir, {recursive: true}, err => {});
//         }
//         cb(null, dir);
//       },
//       filename: function (req, file, cb) {
//         console.log(file);
//         let extenstion = file.originalname.split('.')
//         cb(null, file.fieldname + "-" + Date.now() + "."+[extenstion[1]]);
//       },
//     }),
//   });
// }

// const upload = multer({
//     storage: multer.diskStorage({
//       destination: async function (req, file, cb) {
//         let dir = "uploads/"+req.email;
//         if (!fs.existsSync(dir)){
//           await fs.mkdirSync(dir, {recursive: true}, err => {});
//         }
//         cb(null, dir);
//       },
//       filename: function (req, file, cb) {
//         console.log(file);
//         let extenstion = file.originalname.split('.')
//         cb(null, file.fieldname + "-" + Date.now() + "."+[extenstion[1]]);
//       },
//     }),
//   });

const uploadimage=(req,res)=>{
        User.findOne({email:req.email},(err,user)=>{
         user.image = req.file.path
          user.save((err)=>{
            console.log(err);
          })
          return res.status(200).json({
            message: 'upload successful'
          })
        })
    }

const deleteuser = function (req, res) {
    console.log(req.email)
    User.findOneAndDelete({firstname: req.email}).then(()=>{
        return res.status(200).json({
            message: "deleted successfully !",
        }).catch(()=>{
            return res.status(404).json({
                message: "not successfull!",
            })
        })
    })
}

const login = function (req, res) {
    let {email, password}= req.body;
    User.findOne({email,password}).then(user=>{
    if (user) {
        var token = jwt.sign({
            email: email,
        }, sec);
        return res.status(200).json({
            message: "login successfully !",
            token
        })
    }else{
        return res.status(404).json({
            message: "login not successfully !",
        })
    }
      })
    }

const logout = (req,res)=>{
   res.send('logout successful')
}; 



module.exports = {login, signup, updateuser, deleteuser, logout, uploadimage}