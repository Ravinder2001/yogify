let ENVConfig = {
  cloudinaryCloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  postgresURL: process.env.POSTGRES_URL,
  postgresSSL: false,
  nextAuthSecret: process.env.NEXTAUTH_SECRET,
  rowID: process.env.ROW_ID,
  email: process.env.EMAIL,
  password: process.env.PASSWORD,
  password: process.env.PASSWORD,
  leadRecevingEmails: process.env.LEAD_RECEIVE_EMAILS,
  mobile: process.env.NEXT_PUBLIC_MOBILE,
  baseURL: process.env.NEXTAUTH_URL,
};
export default ENVConfig;
