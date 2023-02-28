const multer = require('multer');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const sec = 'shhhhhhhhhhhhhhhhhhhtttttttttttttttttttyyyyyyyyyyyyyy'
const port = 3000;
const User  = require('../model/model');

// exports.upload = multer({
//   storage: multer.diskStorage({
//     destination: async function (req, file, cb) {
//       let dir = "uploads/"+req.email;
//       if (!fs.existsSync(dir)){
//         await fs.mkdirSync(dir, {recursive: true}, err => {});
//       }
//       cb(null, dir);
//     },
//     filename: function (req, file, cb) {
//       console.log(file);
//       let extenstion = file.originalname.split('.')
//       cb(null, file.fieldname + "-" + Date.now() + "."+[extenstion[1]]);
//     },
//   }),
// });
const Storage = multer({
  storage: multer.diskStorage({
    destination: async function (req, file, cb) {
      let dir = "./uploadsImages/"+req.file.path;
      if (!fs.existsSync(dir)){
        await fs.mkdirSync(dir, {recursive: true}, err => {});
      }
      cb(null, dir);
    },
    filename: function (req, file, cb) {
      console.log(file);
      let extenstion = file.originalname.split('.')
      cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
  }),
});

const upload = multer({
  storage: Storage
}).single('Imagedata')

module.exports = {upload}
// module.exports ={postimg}