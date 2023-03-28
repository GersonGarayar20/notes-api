import { connect } from 'mongoose'

export const DBConnect = async () => {
  try {
    await connect(process.env.MONGO_URI)
    console.log('bd conectada')
  } catch (err) {
    console.log(err)
  }
}
