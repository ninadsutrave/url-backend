# URL Shortner REST API

## Description

A REST API to generate custom short links for users and to track the number of clicks make on the shortened link.

## API EndPoints

BASE URL: https://tit.vercel.app

- /search

  | Purpose          | To check the availibility of the custom code given by the user |
  | ---------------- | -------------------------------------------------------------- |
  | METHOD           | GET                                                            |
  | Query Parameters | searchItem                                                     |
  | Path Parameters  | None                                                           |
  | Request Body     | None                                                           |
  | URL              | https://tit.vercel.app/search?searchItem=play                  |

- /shortenUrl

  | Purpose          | To auto generate a shortened link for the URL provided |
  | ---------------- | ------------------------------------------------------ |
  | METHOD           | POST                                                   |
  | Query Parameters | None                                                   |
  | Path Parameters  | None                                                   |
  | Request Body     | { longUrl }                                            |
  | URL              | https://tit.vercel.app/shortenUrl                      |

- /create

  | Purpose          | To create a shortened link with the given custom code |
  | ---------------- | ----------------------------------------------------- |
  | METHOD           | POST                                                  |
  | Query Parameters | None                                                  |
  | Path Parameters  | None                                                  |
  | Request Body     | { longUrl, code }                                     |
  | URL              | https://tit.vercel.app/create                         |

- /clicks

  | Purpose          | To fetch the number of clicks made on the shortened link |
  | ---------------- | -------------------------------------------------------- |
  | METHOD           | POST                                                     |
  | Query Parameters | None                                                     |
  | Body Parameters  | None                                                     |
  | Request Body     | { shortUrl }                                             |
  | URL              | https://tit.vercel.app/clicks                            |

- /analytics

  | Purpose          | To fetch the detailed information of interactivity with the link |
  | ---------------- | ---------------------------------------------------------------- |
  | METHOD           | POST                                                             |
  | Query Parameters | None                                                             |
  | Body Parameters  | None                                                             |
  | Request Body     | { shortUrl }                                                     |
  | URL              | https://tit.vercel.app/analytics                                 |

- /:code

  | Purpose          | To redirect to the user's desired URL |
  | ---------------- | ------------------------------------- |
  | METHOD           | GET                                   |
  | Query Parameters | None                                  |
  | Body Parameters  | code                                  |
  | Request Body     | None                                  |
  | URL              | https://tit.vercel.app/:code          |

## License

MIT © Ninad Sutrave
