class TokenUtils {

    getToken = () => {
        const tokenItem = localStorage.getItem('token');
        return tokenItem;
    };

    setToken = res => {
        localStorage.setItem('token', res.data.jwt);
    }

    clearToken = () => {
        localStorage.removeItem('token');
    }

}

const tokenUtils = new TokenUtils();

export default tokenUtils;
