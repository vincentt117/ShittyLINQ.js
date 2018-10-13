/**
 * @param {((x: T) => TKey)} keySelector
 * @template U
 * @returns {Array<U>}
 */

const _defaultComparer = function(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
};

function OrderBy(keySelector, comparer = _defaultComparer) {
  if (keySelector == null)
    throw 'Argument Null Exception - keySelector is null.';
  if (this === undefined) throw 'Undefined value exception!';
  if (this === null && typeof this === 'object') throw 'Null value exception!';
  return this.reduce(e => {
    {
      return JSON.parse(JSON.stringify(this)).sort(function(a, b) {
        return comparer * Math.abs(a[keySelector(e)] - b[keySelector(e)]);
      });
    }
  });
}

module.exports = OrderBy;
