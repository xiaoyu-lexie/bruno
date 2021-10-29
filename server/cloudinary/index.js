import cloudinary from 'cloudinary';
// import { CloudinaryStorage } from 'multer-storage-cloudinary'


cloudinary.config({
  cloud_name: 'dmeoozzcc',
  api_key: '917786673486738',
  api_secret: 'QiGOVje63GHgszlR0vMFfWxEyo8'
})

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: 'BEFORE',
//     allowedFormats:['jpeg', 'png', 'jpg']
//   }
// })
// console.log('kk',process.env.CLOUD_KEY)

export default cloudinary