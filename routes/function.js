import express from 'express'
import redirect from '../controller/redirect.js'
import shorten from '../controller/shorten.js'
import getClicks from '../controller/clicks.js'
import searchCode from '../controller/search.js'
import createLink from '../controller/create.js'
import getAnalytics from '../controller/analytics.js'

const router = express.Router()

router.get('/search', searchCode)
router.post('/create', createLink)
router.post('/clicks', getClicks)
router.post('/shortenUrl', shorten)
router.post('/analytics', getAnalytics)
router.get('/:code', redirect)

export default router
