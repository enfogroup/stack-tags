
/**
 * Possible account environments
 */
 export enum AccountEnvironment {
  DEVELOPMENT = 'Development',
  STAGE = 'Stage',
  TEST = 'Test',
  ACCEPTANCE_TEST = 'AcceptanceTest',
  SYSTEM_TEST = 'SystemTest',
  PRODUCTION = 'Production',
  OPS = 'Ops',
  ALL = 'ALL'
}

/**
 * Available Service Level Agreements
 */
export enum ServiceLevelAgreement {
  /**
   * Monday-Friday 07:00-17:00 CET
   */
  WEEKDAY = 'Weekday',
  /**
   * 24/7
   */
  TWENTY_FOUR_SEVEN = '24/7'
}

/**
 * Available ways to deploy/manage resources
 */
export enum ManagedBy {
  /**
   * Deployed via CloudFormation
   */
  CLOUDFORMATION = 'cloudformation',
  /**
   * Deployed via the AWS CDK
   */
  CDK = 'cdk',
  /**
   * Created via HashiCorp Terraform
   */
  TERRAFORM = 'terraform',
  /**
   * Created by AWS Lambda
   */
  LAMBDA = 'lambda',
  /**
   * Created via script (AWS CLI or AWS SDK)
   */
  SCRIPT = 'script',
  /**
   * Manually created in the AWS Console
   */
  CONSOLE = 'console'
}

/**
 * Standard tags which should be applied to all resources in an Enfo account
 */
export interface StackTags {
  /**
   * Email of assigned owner
   */
  readonly Owner: string
  /**
   * Name of the customer, from an Enfo perspective. This is optional if the whole account belongs to the same customer.
   */
  readonly Customer?: string
  /**
   * Name of the project
   */
  readonly Project: string
  /**
   * Project identifier in JIRA
   */
  readonly ProjectKey: string
  /**
   * Cost center or business unit identification information, which is relevant for cost allocation purposes.
   * Format of value is customer specific. Multiple values can be specified if there are multiple levels in a hierarchy for cost allocation.
   * First value then is the top level and the following levels further down in the hierarchy.
   */
  readonly CostCenter: string
  /**
   * Issue in JIRA which was the reason for this resource to be set up or created.
   * For example KEY-123
   */
  readonly SetupRequest: string
  /**
   * The AWS account number
   */
  readonly Account: string
  /**
   * Name of environment that this resource belongs to.
   * If it belongs to multiple environments multiple values may be specified.
   * Multiple values are specified as a string with comma separation between environments. For example 'Development,Test'
   */
  readonly Environment: AccountEnvironment | string
  /**
   * Name of the resource, which may be added for extra description.
   * Do not include any key metadata in the Name tag only, use separate tags for that!
   * The Name tag shall never be required to obtain key information about a resource.
   * The primary purpose is to provide an easy human readable identifier.
   */
  readonly Name?: string
  /**
   * How was this resource created and how does one manage it
   * Hard set to 'cdk' for this Interface
   */
  readonly ManagedBy: ManagedBy
  /**
   * The repo containing the mechanism defined in ManagedBy.
   */
  readonly Repo?: string
  /**
   * The commit hash used for the deploy
   */
  readonly Commit?: string
  /**
   * Service level agreement
   */
  readonly SLA: ServiceLevelAgreement
  /**
   * ISO-8601
   */
  readonly LastUpdated?: string
}
