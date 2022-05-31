# Introduction

This package exposes enums and interfaces for Stack Tags used by AWS accounts managed by Enfo. If you are not a customer this package will bring you little value.

## Installation

Install the package by running

```bash
npm install @enfo/aws-stack-tags
```

## Usage

While these example use the AWS CDK you can use the package with other platforms such as when creating resources using AWS Lambda.

```typescript
import { StackTags, AccountEnvironment, ServiceLevelAgreement, ManagedBy } from '@enfo/aws-stack-tags'
import { App } from 'aws-cdk-lib'
import { ExampleStack } from '../some/path'

const app = new App()

const tags: StackTags = {
  Owner: 'john.smith@example.com',
  Project: 'My project',
  ProjectKey: 'MP',
  CostCenter: '12345',
  SetupRequest: 'KEY-123',
  ManagedBy: ManagedBy.CDK,
  Repo: 'https://bitbucket.org/example/my-cool-repo/',
  Environment: AccountEnvironment.PRODUCTION,
  SLA: ServiceLevelAgreement.WEEKDAY,
  Account: '111122223333',
  LastUpdated: new Date().toISOString(),
}

new ExampleStack(app, 'some-name', {
  env: { 
    account: '11112222333',
    region: 'eu-west-1'
  },
  tags
})
```

When using Bitbucket Pipelines you can get the Repo and Commit fields like this:

```typescript
import { StackTags, AccountEnvironment, ServiceLevelAgreement } from '@enfo/aws-stack-tags'
import { App } from 'aws-cdk-lib'
import { ExampleStack } from '../some/path'

const app = new App()

const { BITBUCKET_GIT_HTTP_ORIGIN, BITBUCKET_COMMIT } = process.env
const tags: StackTags = {
  Owner: 'john.smith@example.com',
  Project: 'My project',
  ProjectKey: 'MP',
  CostCenter: '12345',
  SetupRequest: 'KEY-123',
  ManagedBy: ManagedBy.CDK,
  Repo: 'https://bitbucket.org/example/my-cool-repo/',
  Environment: AccountEnvironment.PRODUCTION,
  SLA: ServiceLevelAgreement.WEEKDAY,
  Account: '111122223333',
  LastUpdated: new Date().toISOString(),
  Repo: BITBUCKET_GIT_HTTP_ORIGIN || 'DEV_DEPLOY',
  Commit: BITBUCKET_COMMIT || 'DEV_DEPLOY',
}

new ExampleStack(app, 'some-name', {
  env: { 
    account: '11112222333',
    region: 'eu-west-1'
  },
  tags
})
```
