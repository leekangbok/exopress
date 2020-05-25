module.exports = {
    ApiResult: {
        success(data) {
            return {
                success: true,
                errMsg: '',
                data
            };
        },
        fail(errMsg) {
            return {
                success: false,
                errMsg
            }
        }
    }
};