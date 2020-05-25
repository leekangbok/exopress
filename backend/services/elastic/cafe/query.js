function getGeoEsQuery(lat, lon, distance) {
    return {
        size: 500,
        timeout: '1m',
        body: {
            query: {
                bool: {
                    must: {
                        match_all: {}
                    },
                    filter: {
                        geo_distance: {
                            distance: `${distance}m`,
                            location: {
                                lat,
                                lon
                            }
                        }
                    }
                }
            },
            sort: {
                _geo_distance: {
                    location: {
                        lat,
                        lon
                    },
                    order: 'asc'
                }
            }
        }
    };
}

module.exports = {
    getGeoEsQuery
};