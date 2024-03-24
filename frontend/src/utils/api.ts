// Use https in prod and http in dev
const protocol = import.meta.env.PROD ? 'https' : 'http';

/**
 * BaseURL for service calls
 */
export const baseUrl = `${protocol}://${location.hostname}:3000`;

