const API = {
    path: process.env.REACT_APP_PATH,
    services : {
        auth: `${process.env.REACT_APP_PATH}/${process.env.REACT_APP_LOGIN}`,
        homeworks: `${process.env.REACT_APP_PATH}/${process.env.REACT_APP_TACK}`,
        homework: `${process.env.REACT_APP_PATH}/${process.env.REACT_APP_TACK_ONE}`,
    }
}
export default API;
