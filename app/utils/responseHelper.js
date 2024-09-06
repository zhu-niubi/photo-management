// app/utils/responseHelper.js

const responseHelper = {
    /**
     * 返回成功状态
     * @param {string} message - 自定义的成功消息，默认为 'Operation successful'
     * @param {Object|null} data - 成功时返回的数据，默认为 null
     * @returns {Object} 返回成功对象，包含 success 状态为 true，消息和数据
     */
    success(message = 'Operation successful', data = null) {
        return {
            success: true,
            message,
            data,
        };
    },

    /**
     * 返回失败状态（通用错误）
     * @param {string} message - 自定义的失败消息，默认为 'Operation failed'
     * @param {number} code - HTTP 状态码，默认为 500（服务器内部错误）
     * @param {Object|null} data - 失败时附带的额外数据，默认为 null
     * @returns {Object} 返回失败对象，包含 success 状态为 false，消息，状态码和数据
     */
    fail(message = 'Operation failed', code = 500, data = null) {
        return {
            success: false,
            message,
            code,
            data,
        };
    },

    /**
     * 返回参数无效状态
     * @param {string} message - 自定义的错误消息，默认为 'Invalid parameter'
     * @param {number} code - HTTP 状态码，默认为 400（请求参数错误）
     * @returns {Object} 返回失败对象，包含 success 状态为 false，消息和状态码
     */
    invalidParam(message = 'Invalid parameter', code = 400) {
        return {
            success: false,
            message,
            code,
        };
    },

    /**
     * 返回未授权状态
     * @param {string} message - 自定义的错误消息，默认为 'Unauthorized'
     * @param {number} code - HTTP 状态码，默认为 401（未授权，通常用于需要认证的接口）
     * @returns {Object} 返回失败对象，包含 success 状态为 false，消息和状态码
     */
    unauthorized(message = 'Unauthorized', code = 401) {
        return {
            success: false,
            message,
            code,
        };
    },

    /**
     * 返回禁止访问状态
     * @param {string} message - 自定义的错误消息，默认为 'Forbidden'
     * @param {number} code - HTTP 状态码，默认为 403（禁止访问）
     * @returns {Object} 返回失败对象，包含 success 状态为 false，消息和状态码
     */
    forbidden(message = 'Forbidden', code = 403) {
        return {
            success: false,
            message,
            code,
        };
    },

    /**
     * 返回资源未找到状态
     * @param {string} message - 自定义的错误消息，默认为 'Resource not found'
     * @param {number} code - HTTP 状态码，默认为 404（资源未找到）
     * @returns {Object} 返回失败对象，包含 success 状态为 false，消息和状态码
     */
    notFound(message = 'Resource not found', code = 404) {
        return {
            success: false,
            message,
            code,
        };
    },

    /**
     * 返回资源冲突状态
     * @param {string} message - 自定义的错误消息，默认为 'Resource already exists'
     * @param {number} code - HTTP 状态码，默认为 409（资源冲突，例如用户名或手机号已存在）
     * @returns {Object} 返回失败对象，包含 success 状态为 false，消息和状态码
     */
    conflict(message = 'Resource already exists', code = 409) {
        return {
            success: false,
            message,
            code,
        };
    },

    /**
     * 返回跨域问题状态
     * @param {string} message - 自定义的错误消息，默认为 'Cross-Origin Request Blocked'
     * @param {number} code - HTTP 状态码，默认为 403（禁止访问，CORS问题导致）
     * @returns {Object} 返回失败对象，包含 success 状态为 false，消息和状态码
     */
    corsError(message = 'Cross-Origin Request Blocked', code = 403) {
        return {
            success: false,
            message,
            code,
        };
    },

    /**
     * 返回服务器错误状态
     * @param {string} message - 自定义的错误消息，默认为 'Internal Server Error'
     * @param {number} code - HTTP 状态码，默认为 500（服务器内部错误）
     * @returns {Object} 返回失败对象，包含 success 状态为 false，消息和状态码
     */
    serverError(message = 'Internal Server Error', code = 500) {
        return {
            success: false,
            message,
            code,
        };
    },

    /**
     * 返回服务不可用状态
     * @param {string} message - 自定义的错误消息，默认为 'Service Unavailable'
     * @param {number} code - HTTP 状态码，默认为 503（服务不可用）
     * @returns {Object} 返回失败对象，包含 success 状态为 false，消息和状态码
     */
    serviceUnavailable(message = 'Service Unavailable', code = 503) {
        return {
            success: false,
            message,
            code,
        };
    }
};

module.exports = responseHelper;