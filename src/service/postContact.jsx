import axios from 'axios'

const postContact = (api, body, setLoading, setModalVisible) => {
    setLoading(true);  // Open the loading modal

    axios.post(`https://irbis-trade.uz/api${api}`, body)
        .then(() => {
            setLoading(false);
            setModalVisible(true)
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
}
export default postContact