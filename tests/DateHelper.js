/**
 * @param {number} days
 * @param {boolean} future
 * @return {Date}
 */
export const dateGenerator = function(days, future = true) {
    const now = new Date();
    if (false === future) {
        now.setDate(now.getDate() - days);
    }
    now.setDate(now.getDate() + days);

    return now;
};
