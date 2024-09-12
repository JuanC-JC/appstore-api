import { Nullable } from "../../shared/domain/Nullable";
import { AccountSubscription } from "../domain/accountSubscription";
import { AccountSubscriptionRepository } from "../domain/accountSubscription.repository";
import BHAccountSubscription from "../../common/model/BHAccountSubscription"
import { InferSchemaType, Model } from "mongoose";

const schema = BHAccountSubscription.schema()
type subscriptionType = InferSchemaType<typeof schema>;

export class MongoAccountSubscriptionRepository implements AccountSubscriptionRepository{
  async find(_idBHAccount: string): Promise<Nullable<AccountSubscription>> {
    const collection:Model<subscriptionType> = BHAccountSubscription.model().Model

    const subscription = await collection.findOne({_idBHAccount: _idBHAccount}).lean().exec()

    if(subscription) return AccountSubscription.fromPrimitives({
      id: subscription._id.toString(),
      _idBHAccount: subscription._idBHAccount || '',
      state: subscription.state || '',
      date: subscription.date
    })

    return null

  }
}