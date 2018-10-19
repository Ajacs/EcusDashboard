import superagent from 'superagent';
import config from '../config/config';

export const serviceCall = (date, endDate) => {
    date = date.format('YYYY-MM-DD');
    endDate = endDate.format('YYYY-MM-DD');
    const { api: { url, default_currency, compact } } = config;
    return superagent
        .get(url)
        .query({ q: default_currency, compact, date, endDate })
}