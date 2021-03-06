import { Router } from 'express'
import { getLocations, createLocation, getLocation, deleteLocation, updateLocation } from '../controllers/location.controller'

const router = Router();

router.route('/')
    .get(getLocations)
    .post(createLocation);

router.route('/:locationId')
    .get(getLocation)
    .delete(deleteLocation)
    .put(updateLocation);

export default router;