/**
 * @param {number} days
 * @param {boolean} future
 * @return {Date}
 */
export const dateGenerator = function(days, future = true) {
    const now = new Date();
    now.setDate(now.getDate() + parseInt(days));

    if (false === future) {
        now.setDate(now.getDate() - parseInt(days) * 2);
    }

    return now;
};
