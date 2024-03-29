const { gql } = require('apollo-server-micro')

module.exports = gql`
  type Query {
    me: User!
    stores: [Store!]!
    store(id: ID!): Store!
    keys(storeId: ID): [Key!]!
    gateways: [Gateway!]!
    gateway(slug: String!): Gateway!
    products(
      dir: SORT_DIR
      limit: Int
      offset: Int
      sort: PRODUCT_SORT_FIELDS
    ): [Product!]
    product(id: ID!): Product
    brands(
      dir: SORT_DIR
      limit: Int
      offset: Int
      sort: CATALOGUE_SORT_FIELDS
    ): [Brand!]
    brand(id: ID!): Brand
    categories(
      dir: SORT_DIR
      limit: Int
      offset: Int
      sort: CATALOGUE_SORT_FIELDS
    ): [Category!]
    category(id: ID!): Category
    collections(
      dir: SORT_DIR
      limit: Int
      offset: Int
      sort: CATALOGUE_SORT_FIELDS
    ): [Collection!]
    collection(id: ID!): Collection
    integrations: [Integration!]
    integration(id: ID!): Integration
    inventory(productID: ID!): Inventory
  }

  type Mutation {
    register(
      name: String!
      email: String!
      password: String!
      company: String
    ): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    createToken(
      client_id: String!
      client_secret: String
      grant_type: GRANT_TYPE
    ): AuthPayload!
    refreshToken(token: String!): AuthPayload!
    renameStore(id: ID!, newName: String!): Store!
    createStore(name: String!): Store!
    switchStore(id: ID!): SuccessPayload!
    addUserToStore(
      id: ID!
      name: String
      email: String!
      role: UserRole
    ): SuccessPayload!
    enableIntegrationFromTemplate(type: INTEGRATION_TEMPLATE!): Integration!
  }

  type Invitee {
    name: String
    email: String!
    role: UserRole!
  }

  type Product implements CatalogueResource {
    id: ID!
    name: String!
    description: String!
    price: [ProductPrice!]
    sku: String!
    slug: String!
    status: CATALOGUE_STATUS!
    inventory: Inventory!
    main_image: File
  }

  type ProductPrice {
    amount: Int!
    currency: String!
    includes_tax: Boolean!
  }

  type User {
    id: ID!
    name: String!
    company: String
    email: String!
  }

  type Store {
    id: ID!
    noneUuid: ID!
    name: String!
    users: [User!]!
  }

  type Key {
    user_id: ID!
    store_id: ID!
    client_id: String!
    client_secret: String!
  }

  type AuthPayload {
    identifier: String!
    access_token: String!
    refresh_token: String!
    token_type: String!
    expires: Int!
    expires_in: Int!
    user: User!
  }

  type SuccessPayload {
    success: Boolean!
    message: String
  }

  union Gateway = Stripe | Adyen | Braintree | CardConnect | Manual

  type Stripe {
    name: String
    slug: String
    login: String
    enabled: Boolean
  }

  type Adyen {
    name: String
    slug: String
    username: String
    merchant_account: String
    password: String
    test: Boolean
    enabled: Boolean
  }

  type Braintree {
    name: String
    slug: String
    merchant_id: String
    private_key: String
    public_key: String
    environment: String
    enabled: Boolean
  }

  type CardConnect {
    name: String
    slug: String
    merchant_id: String
    username: String
    password: String
    test: Boolean
    enabled: Boolean
  }

  type Manual {
    name: String
    slug: String
    enabled: Boolean
  }

  type Brand implements CatalogueResource {
    id: ID!
    name: String!
    description: String!
    slug: String!
    status: CATALOGUE_STATUS!
  }

  type Category implements CatalogueResource {
    id: ID!
    name: String!
    description: String!
    slug: String!
    status: CATALOGUE_STATUS!
  }

  type Collection implements CatalogueResource {
    id: ID!
    name: String!
    description: String!
    slug: String!
    status: CATALOGUE_STATUS!
  }

  type Inventory {
    allocated: Int!
    available: Int!
    total: Int!
  }

  type File {
    id: ID!
    file_name: String!
    file_size: Int!
    href: String!
    public: Boolean!
  }

  type Integration {
    id: ID!
    name: String!
    description: String!
    integration_type: INTEGRATION_TYPE!
    enabled: Boolean!
    observes: [String!]
    configuration: INTEGRATION_CONFIG
  }

  type INTEGRATION_CONFIG {
    secret_key: String
    url: String!
  }

  enum GRANT_TYPE {
    implicit
    client_credentials
  }

  enum SORT_DIR {
    asc
    desc
  }

  enum CATALOGUE_SORT_FIELDS {
    created_at
    description
    name
    slug
    status
    updated_at
  }

  enum CATALOGUE_STATUS {
    draft
    live
  }

  enum PRODUCT_SORT_FIELDS {
    description
    name
    sku
    slug
  }

  enum UserRole {
    USER
    ADMIN
  }

  enum INTEGRATION_TYPE {
    webhook
  }

  enum INTEGRATION_TEMPLATE {
    ORDER_CONFIRMATION_EMAIL
    ORDER_SHIPPED_EMAIL
  }

  interface CatalogueResource {
    id: ID!
    name: String!
    description: String!
    slug: String!
    status: CATALOGUE_STATUS!
  }
`
