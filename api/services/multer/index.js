import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
const rootPath = process.cwd(); // export const booksPath = `${rootPath}\\dist`;

const storage = multer.diskStorage({
  destination: path.join(rootPath, '/dist'),
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname))
  }
});

export const upload = multer({
  storage,
  dest: path.join(rootPath, '/dist'),
  limits: { fileSize: 3500000 },
  fileFilter: (req, file, cb) => {
    const fileTypes = /pdf/;
    const mimeType = fileTypes.test(file.mimetype);
    if (mimeType) {
      return cb(null, true);
    }
    return cb("Custom CB error");
  }
});

