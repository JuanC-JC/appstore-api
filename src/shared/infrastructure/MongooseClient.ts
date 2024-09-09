import mongoose, { connect, ConnectOptions,Mongoose } from "mongoose";

export class MongooseConection {
  private static instance: Mongoose;

  private constructor(readonly uri: string) {
    throw new Error("Cannot create instance of Singleton class");
  }

  public static async getInstance(uri?:string, options?: ConnectOptions): Promise<Mongoose> {
    if(MongooseConection.instance){
      return MongooseConection.instance
    }

    if(uri === undefined){throw new Error("URI is required for first instance")}

    try{
      mongoose.set("strictQuery", false);
      MongooseConection.instance = await connect(uri, options)
      console.log(`connected to MongoDB: ${uri}`)
      return MongooseConection.instance
    }catch(err){
      console.log(`Error connecting to MongoDB: ${err}`)
      throw err
    }

  }

}