import { gql } from "apollo-server";

export const typeDefs = gql`

scalar Date

type Query {
  hello: String
  users(name: String): [User!]!
}
type User {
    name: String
    age: Int
    timestamp: Date
}
# User schema
type Users {
  id: ID!
  username: String
  password: String
  phoneNumber: Int
  avatarUrl: String
  provider: String
  paymentId: [Payment]
}
# Order schema
type Order {
  id: ID!
  orderItemId: [OrderItem!]
  userId: Users
  deliveryId: Delivery
  paymentId: Payment
  status: String
}
# OrderItem schema
type OrderItem {
  id: ID!
  storeId: Store!
  orderId: Order!
  productId: [Product!]!
}
# Delivery schema
type Delivery {
  id: ID!
  orderId: Order!
  derliverId: Users!
  deliveryTime: Date!
  confirmDeliverTime: Date
}
# Address schema
type Address {
  id:ID!
  lat: Float!
  lng: Float!
  address: String!
}
# Store schema
type Store {
    id: ID!
    name: String
    addressId: [Address!]! # may have the different stores around but have only store id
    avatarUrl: String
    userId: [Users] # contact to the store
}
# Product schema
type Product {
  id: ID!
  productName: String
  productCategoryId: [Category!]!
  price: Float
}
# Category schema
type Category {
  id:ID!
  categoryName: String
}
# Payment schema
type Payment {
  id:ID!
  orderId: Order!
  paymentProviderId: PaymentProvider!
  amount: Float!
  create: Date
  status: String
  refunded: Boolean
  billingAddress: Address!
}
# PaymentProvider schema
type PaymentProvider {
  id: ID!
  provider: String!
  providerOrderId: String!
  token: String!
}
`