import { Table, Entity } from 'dynamodb-toolbox'
import { dynamoDbDocumentClient } from '../dynamodb-init'

const ProgramTable = new Table({
  name: process.env.PROGRAM_TABLE,
  partitionKey: 'userId',
  sortKey: 'id',
  DocumentClient: dynamoDbDocumentClient,
})

const Program = new Entity({
  name: 'Program',
  attributes: {
    userId: {
      partitionKey: true,
    },
    id: {
      sortKey: true,
    },
    name: 'string',
    description: 'string',
    status: 'string',
    education: 'list',
  },
  table: ProgramTable,
})

export default Program
