/**
 * @name getFlatRateFulfillmentRestrictions
 * @method
 * @memberof Fulfillment/NoMeteorQueries
 * @summary Query the FlatRateFulfillmentRestrictions collection for restrictions with the provided shopId
 * @param {Object} context - an object containing the per-request state
 * @param {Object} params - request parameters
 * @param {String} params.shopId - Shop ID for the shop that owns the restrictions
 * @return {Promise<Object>|undefined} - A restrictions document, if one is found
 */
export default async function getFlatRateFulfillmentRestrictions(context, { shopId } = {}) {
  const { collections } = context;
  const { FlatRateFulfillmentRestrictions } = collections;

  return FlatRateFulfillmentRestrictions.find({
    shopId
  });
}