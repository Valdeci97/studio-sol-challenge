import { GraphQLResponse } from '@apollo/server';
import { describe, expect, it, assert } from 'vitest';
import { mockServer } from './mocks/mockServer';
import { queries } from './mocks/queries';
import { graphqlResponse } from './mocks/responses';

let res: GraphQLResponse<Record<string, unknown>>;
const RESPONSE_BODY_TYPE = 'single';

describe('Testing /graphql endpoint', () => {
  describe('Send password without rules', () => {
    it('should return no exception', async () => {
      res = await mockServer.executeOperation(queries.sendNoRules);
      assert(res.body.kind === RESPONSE_BODY_TYPE);
      expect(res.body.singleResult.data?.verify).toMatchObject(graphqlResponse.BODY_OK);
    });
  });

  describe('Send password with "minSize" rule defined', () => {
    it('should return no exception', async () => {
      res = await mockServer.executeOperation(queries.sendValidMinSize);
      assert(res.body.kind === RESPONSE_BODY_TYPE);
      expect(res.body.singleResult.data?.verify).toMatchObject(graphqlResponse.BODY_OK);
    });

    it('should return "minSize" expection', async () => {
      res = await mockServer.executeOperation(queries.sendInValidMinSize);
      assert(res.body.kind === RESPONSE_BODY_TYPE);
      expect(res.body.singleResult.data?.verify).toMatchObject(graphqlResponse.MIN_SIZE);
    });
  });

  describe('Send password with "minUppercase" rule defined', () => {
    it('should return no exception', async () => {
      res = await mockServer.executeOperation(queries.sendValidMinUppercase);
      assert(res.body.kind === RESPONSE_BODY_TYPE);
      expect(res.body.singleResult.data?.verify).toMatchObject(graphqlResponse.BODY_OK);
    });

    it('should return "minUppercase" exception', async () => {
      res = await mockServer.executeOperation(queries.sendInvalidMinUppercase);
      assert(res.body.kind === RESPONSE_BODY_TYPE);
      expect(res.body.singleResult.data?.verify).toMatchObject(
        graphqlResponse.MIN_UPPERCASE,
      );
    });
  });

  describe('Send password with "minLowercase" rule defined', () => {
    it('should return no exception', async () => {
      res = await mockServer.executeOperation(queries.sendValidMinLowercase);
      assert(res.body.kind === RESPONSE_BODY_TYPE);
      expect(res.body.singleResult.data?.verify).toMatchObject(graphqlResponse.BODY_OK);
    });

    it('should return "minLowercase" exception', async () => {
      res = await mockServer.executeOperation(queries.sendInvalidMinLowercase);
      assert(res.body.kind === RESPONSE_BODY_TYPE);
      expect(res.body.singleResult.data?.verify).toMatchObject(
        graphqlResponse.MIN_LOWERCASE,
      );
    });
  });

  describe('Send password with "minDigit" rule defined', () => {
    it('should return no exception', async () => {
      res = await mockServer.executeOperation(queries.sendValidMinDigit);
      assert(res.body.kind === RESPONSE_BODY_TYPE);
      expect(res.body.singleResult.data?.verify).toMatchObject(graphqlResponse.BODY_OK);
    });

    it('should return "minDigit" exception', async () => {
      res = await mockServer.executeOperation(queries.sendInvalidMinDigit);
      assert(res.body.kind === RESPONSE_BODY_TYPE);
      expect(res.body.singleResult.data?.verify).toMatchObject(graphqlResponse.MIN_DIGIT);
    });
  });

  describe('Send password with "minSpecialChars" rule defined', () => {
    it('should return no exception', async () => {
      res = await mockServer.executeOperation(queries.sendValidMinSpecialChars);
      assert(res.body.kind === RESPONSE_BODY_TYPE);
      expect(res.body.singleResult.data?.verify).toMatchObject(graphqlResponse.BODY_OK);
    });

    it('should return "minSpecialChars" exception', async () => {
      res = await mockServer.executeOperation(queries.sendInvalidMinSpecialChars);
      assert(res.body.kind === RESPONSE_BODY_TYPE);
      expect(res.body.singleResult.data?.verify).toMatchObject(
        graphqlResponse.MIN_SPECIAL_CHARS,
      );
    });
  });

  describe('Send password with all rules defined', () => {
    it('should return all exceptions array', async () => {
      res = await mockServer.executeOperation(queries.sendInvalidAllCases);
      assert(res.body.kind === RESPONSE_BODY_TYPE);
      expect(res.body.singleResult.data?.verify).toMatchObject(graphqlResponse.ALL_CASES);
    });
  });
});
