import multer from 'multer';
import path from 'path';
const rootPath = process.cwd();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, rootPath + `/dist/${req.user.id}`);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + path.extname(file.originalname));
  }
});

export const upload = multer({
  storage,
  limits: { fileSize: 3500000 },
}).any();
// .single('docFile');


// import multer from 'multer';
// // import { v4 as uuidv4 } from 'uuid';
// import path from 'path';
// const rootPath = process.cwd(); // export const booksPath = `${rootPath}\\dist`;

// const storage = multer.diskStorage({
//   destination: path.join(rootPath, '/dist'),
//   filename: (req, file, cb) => {
//     // cb(null, uuidv4() + path.extname(file.originalname))
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

// export const upload = multer({
//   storage,
//   dest: path.join(rootPath, '/dist'),
//   limits: { fileSize: 3500000 },
//   fileFilter: (req, file, cb) => {
//     const fileTypes = /pdf/;
//     const mimeType = fileTypes.test(file.mimetype);
//     if (mimeType) {
//       return cb(null, true);
//     }
//     return cb("Custom CB error, wrong gile extension");
//   }
// });