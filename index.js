class debi {
    constructor() {
        this.baseURL = window.location.protocol + "//" + window.location.host + window.location.pathname;
    }

    /**
    * Combines two strings and prepares this for the URL.
    * Parsers can be used in the second parameters.
    * @param string a Must be of string type
    * @param string b Must be of string type
    */
    ustr(a, b) {
        history.pushState({ path: this.baseURL }, '', this.baseURL + '?' + a + '=' + b);
    }
    /**
     * Combines two array and prepares this for the URL.
     * The second array can contain two-dimensional arrays.
     * @param array a Must be of array type
     * @param array b Must be of array type
     */
    uarr(a, b) {
        if (a.length !== b.length) {
            return false;
        }
        let debiStr = '?';
        for (let i = 0; i < b.length; i++) {

            debiStr += '&' + a[i] + '=' + b[i];
            history.pushState({ path: this.baseURL }, '', this.baseURL + debiStr.replace('?&', '?'));

        }
    }
}
const s = new debi();